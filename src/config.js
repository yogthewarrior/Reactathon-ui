let config = {
	application: 'Reactathon',
	environment: global.NODE_ENV || "development",
	apiBaseUrl: 'http://localhost:5006',
	esriTileUrlTemplate: null,
	useLDAP: false,
	autoUpdates: false

}

switch (global.NODE_ENV) {
	case 'production': {
		const {protocol, hostname, port} = window.location
		config.apiBaseUrl = `${protocol}//${hostname}${port ? `:${port}` : ''}`
		break;
	}
	case 'staging':
		break;
	case 'testing':
		break;
	default: // development
		break;
}

export default config
