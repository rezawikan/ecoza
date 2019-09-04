export default {
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  router: {
    // Run the middleware/user-agent.js on every page
    middleware: 'breadcrumbs'
  },
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
      src: process.env.baseUrl+'/js/modernizr.min.js'
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
    '@/plugins/vue-bootstrap',
    {
      src: 'plugins/v-owl-carousel.js',
      ssr: false
    } // Only works on client side
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-fontawesome',
    'vue-scrollto/nuxt',
    'nuxt-i18n'
  ],

  // fontawesome configuration
  fontawesome: {
    component: 'fa',
    imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faEnvelope', 'faPhone', 'faDownload', 'faTimes', 'faSearch', 'faSignOutAlt', 'faUser', 'faShoppingBasket', 'faBars', 'faLock', 'faHeart', 'faArrowUp']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faFacebookF', 'faYoutube', 'faInstagram', 'faTwitter', 'faPinterest']
      }
    ]
  },

  i18n: {
    locales: [{
        name: 'ID',
        code: 'id',
        iso: 'id-ID',
        file: 'id-ID.js'
      },
      {
        name: 'EN',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },
    ],
    seo: true,
    strategy: 'prefix_and_default',
    lazy: true,
    defaultLocale: 'id',
    langDir: 'lang/',
    defaultLocaleRouteNameSuffix: 'default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'ecoza_cookie'
    },
    // By default a store module is registered and kept in sync with the
    // app's i18n current state
    // Set to false to disable
    vuex: {
      // Module namespace
      moduleName: 'i18n',

      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: true,

      // If enabled, current translation messages are synced with nuxt-i18n store module
      syncMessages: true,

      // Mutation to commit to set route parameters translations
      syncRouteParams: true
    },
    parsePages: false,
    pages: {
      'products/index': {
        en: '/products',
        id: '/produk'
      },
      'products/detail/index': {
        en: '/products/detail',
        id: '/produk/detail'
      },
    }
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
