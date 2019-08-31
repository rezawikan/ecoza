export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{
				rel: 'icon',
				type: 'image/x-icon',
				href: 'favicon.ico'
			},
			{
				rel: 'icon',
				type: 'image/png',
				href: 'favicon.png'
			},
			{
				rel: 'apple-touch-icon',
				href: 'touch-icon-iphone.png'
			},
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: 'touch-icon-ipad.png'
			},
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: 'touch-icon-iphone-retina.png'
			},
			{
				rel: 'apple-touch-icon',
				sizes: '167x167',
				href: 'touch-icon-ipad-retina.png'
			},
		],
		script: [{
			src: 'js/modernizr.min.js'
		}]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#fff'
	},
	/*
	 ** Global CSS
	 */
	css: [

	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'@/plugins/vue-bootstrap'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/eslint-module',
		'nuxt-fontawesome',
		'vue-scrollto/nuxt'
	],

	// fontawesome configuration
	fontawesome: {
		component: 'fa',
		imports: [{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['faEnvelope', 'faPhone', 'faDownload', 'faTimes', 'faSearch', 'faSignOutAlt', 'faUser', 'faShoppingBasket', 'faBars', 'faLock']
			},
			{
				set: '@fortawesome/free-brands-svg-icons',
				icons: ['faFacebookF', 'faYoutube', 'faInstagram', 'faTwitter', 'faPinterest']
			}
		]
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {}
	}
}
