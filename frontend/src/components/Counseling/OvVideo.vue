<template>
	<video
		id="ov-video"
		:class="{'part-video-hor': !$store.state.isData, 'part-video-ver': $store.state.isData}"
		autoplay muted
	/>
</template>

<script>
// import * as faceapi from 'face-api.js'

export default {
	name: 'OvVideo',

  data: function () {
    return {
      
    }
  },

	props: {
		streamManager: Object,
	},

  methods:{

	},

	mounted () {
		this.streamManager.addVideoElement(this.$el);
	},
}
</script>
