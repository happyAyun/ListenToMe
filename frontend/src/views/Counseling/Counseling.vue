<template>
  <div id="counseling" style="margin-left:auto; margin-right:auto;">
    <!-- 영역: 헤더 -->

    <!-- 영역: 바디 -->
    <div class="d-flex">
      <!-- 영역: 스트리밍 -->
      <div class="col-8">
        <!-- 모달(토클링): 감정 분석 -->
        <div @click="toggleInfo" v-if="$store.state.isInfo" class="float-end font-normal modal-info">emotion recognition data</div>

        <!-- 영역: 영상 -->
          <div id="video-container" class="col-md-6" style="margin-left:auto; margin-right:auto;">
              <user-video :stream-manager="publisher" @click.native="updateMainVideoStreamManager(publisher)"/>
      
              <user-video v-for="sub in subscribers" :key="sub.stream.connection.connectionId" :stream-manager="sub" @click.native="updateMainVideoStreamManager(sub)"/>
          </div>
      </div>

      <!-- 영역: 사이드바 -->
      <div class="col-3">
        <!-- 영역: 메모 -->
        <memo v-if="$store.state.isMemo"></memo>

        <!-- 영역: 기록 -->
        <records v-else class="overflow-auto"></records>
      </div>
    </div>

    <!-- 영역: 푸터 -->
      <div id="room-footer" class="d-flex align-items-center area-footer">
    <div class="col-4"></div>

    <!-- 버튼: 종료 -->
    <div class="col-4 d-flex justify-content-center">
      <button @click="moveToHome" class="btn btn-lg font-btn btn-end">End</button>
    </div>
    
    <div class="col-4 d-flex justify-content-end">
      <!-- 버튼: 기록(records) -->
      <button @click="openRecords" class="me-4 btn btn-lg font-btn btn-mov">Records</button>
      <!-- 버튼: 메모 -->
      <button @click="openMemo" class="me-4 btn btn-lg font-btn btn-mov">Memo</button>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import UserVideo from '@/components/Counseling/UserVideo.vue';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const OPENVIDU_SERVER_URL = "https://localhost:4443";
const OPENVIDU_SERVER_SECRET = "MY_SECRET";

import { mapGetters } from 'vuex' // mapGetters 헬퍼
import Memo from '@/components/Counseling/Memo.vue'
import Records from '@/components/Counseling/Records.vue'

export default {
  name: 'Counseling',
  components: {
    UserVideo,
    Memo,
    Records,
  },
  computed: {
    ...mapGetters([ 
        'GE_USERSESSION',
        'GE_USERID'
        // { myName: 'getFirstItem' }, <-- getFirstItem 를 myName 으로 매핑
    ]) 
  },
  created(){
      this.mySessionId = this.GE_USERSESSION;
      this.myUserName =  this.GE_USERID;
      this.joinSession();
  },
  data () {
		return {
			OV: undefined,
			session: undefined,
			mainStreamManager: undefined,
			publisher: undefined,
			subscribers: [],

			mySessionId: 'SessionA',
			myUserName: 'Participant' + Math.floor(Math.random() * 100),
		}
	},
  methods: {
    toggleInfo: function () {
      this.$store.dispatch('toggleInfo')
    },
    moveToHome: function () {
    if (this.session) this.session.disconnect();

			this.session = undefined;
			this.mainStreamManager = undefined;
			this.publisher = undefined;
			this.subscribers = [];
			this.OV = undefined;

			window.removeEventListener('beforeunload', this.leaveSession);
      this.$router.push({name: 'CounselingMain'})
    },
    openMemo: function () {
      this.$store.dispatch('openMemo')
    },
    openRecords: function () {
      this.$store.dispatch('openRecords')
    },
    joinSession () {
			// --- Get an OpenVidu object ---
			this.OV = new OpenVidu();

			// --- Init a session ---
			this.session = this.OV.initSession();
			// --- Specify the actions when events take place in the session ---
			
			// On every new Stream received...
			this.session.on('streamCreated', ({ stream }) => {
				const subscriber = this.session.subscribe(stream);
				this.subscribers.push(subscriber);
			});

			// On every Stream destroyed...
			this.session.on('streamDestroyed', ({ stream }) => {
				const index = this.subscribers.indexOf(stream.streamManager, 0);
				if (index >= 0) {
					this.subscribers.splice(index, 1);
				}
			});
			// On every asynchronous exception...
			this.session.on('exception', ({ exception }) => {
				console.warn(exception);
			});

			// --- Connect to the session with a valid user token ---

			// 'getToken' method is simulating what your server-side should do.
			// 'token' parameter should be retrieved and returned by your own backend
			this.getToken(this.mySessionId).then(token => {
				this.session.connect(token, { clientData: this.myUserName })
					.then(() => {

						// --- Get your own camera stream with the desired properties ---

						let publisher = this.OV.initPublisher(undefined, {
							audioSource: undefined, // The source of audio. If undefined default microphone
							videoSource: undefined, // The source of video. If undefined default webcam
							publishAudio: true,  	// Whether you want to start publishing with your audio unmuted or not
							publishVideo: true,  	// Whether you want to start publishing with your video enabled or not
							resolution: '320x240',  // The resolution of your video
							frameRate: 30,			// The frame rate of your video
							insertMode: 'APPEND',	// How the video is inserted in the target element 'video-container'
							mirror: false       	// Whether to mirror your local video or not
						});

						this.mainStreamManager = publisher;
						this.publisher = publisher;

						// --- Publish your stream ---

						this.session.publish(this.publisher);
					})
					.catch(error => {
						console.log('z1There was an error connecting to the session:', error.code, error.message);
					});
			});

			window.addEventListener('beforeunload', this.leaveSession)
		},

		leaveSession () {
			// --- Leave the session by calling 'disconnect' method over the Session object ---
			if (this.session) this.session.disconnect();

			this.session = undefined;
			this.mainStreamManager = undefined;
			this.publisher = undefined;
			this.subscribers = [];
			this.OV = undefined;

			window.removeEventListener('beforeunload', this.leaveSession);
		},

		updateMainVideoStreamManager (stream) {
			if (this.mainStreamManager === stream) return;
			this.mainStreamManager = stream;
		},

		/**
		 * --------------------------
		 * SERVER-SIDE RESPONSIBILITY
		 * --------------------------
		 * These methods retrieve the mandatory user token from OpenVidu Server.
		 * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
		 * the API REST, openvidu-java-client or openvidu-node-client):
		 *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
		 *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
		 *   3) The Connection.token must be consumed in Session.connect() method
		 */

		getToken (mySessionId) {
			return this.createSession(mySessionId).then(sessionId => this.createToken(sessionId));
		},

		// See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-openviduapisessions
		createSession (sessionId) {
			return new Promise((resolve, reject) => {
				axios
					.post(`${OPENVIDU_SERVER_URL}/openvidu/api/sessions`, JSON.stringify({
						customSessionId: sessionId,
					}), {
						auth: {
							username: 'OPENVIDUAPP',
							password: OPENVIDU_SERVER_SECRET,
						},
					})
					.then(response => response.data)
					.then(data => resolve(data.id))
					.catch(error => {
						if (error.response.status === 409) {
							console.warn(`z2 No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`);
							resolve(sessionId);
						} else {
							console.warn(`z3 No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`);
							if (window.confirm(`No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "${OPENVIDU_SERVER_URL}"`)) {
								location.assign(`${OPENVIDU_SERVER_URL}/accept-certificate`);
							}
							reject(error.response);
						}
					});
			});
		},

		// See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-openviduapisessionsltsession_idgtconnection
		createToken (sessionId) {
			return new Promise((resolve, reject) => {
				axios
					.post(`${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`, {}, {
						auth: {
							username: 'OPENVIDUAPP',
							password: OPENVIDU_SERVER_SECRET,
						},
					})
					.then(response => response.data)
					.then(data => resolve(data.token))
					.catch(error => reject(error.response));
			});
		},
  }
}
</script>
