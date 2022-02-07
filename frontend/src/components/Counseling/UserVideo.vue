<template>
	<div v-if="streamManager" style="width: 32vw">
		<ov-video :stream-manager="streamManager"/>
		<p class="mb-0">{{ clientData }}</p>
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
