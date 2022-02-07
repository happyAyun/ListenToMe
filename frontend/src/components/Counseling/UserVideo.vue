<template>
	<div v-if="streamManager" id="user-video" :class="{'part-video-hor': !$store.state.isData, 'part-video-ver': $store.state.isData}">
		<ov-video :stream-manager="streamManager"/>
		<p v-if="!$store.state.isData" class="mb-0 f-normal">{{ clientData }}</p>
	</div>
</template>

<script>
import OvVideo from './OvVideo'

export default {
	name: 'UserVideo',

	components: {
		OvVideo,
	},

	props: {
		streamManager: Object,
	},

	methods: {
		getConnectionData () {
			const { connection } = this.streamManager.stream
			return JSON.parse(connection.data)
		},
	},

	computed: {
		clientData () {
			const { clientData } = this.getConnectionData()
			return clientData;
		},
	},	
}
</script>
