module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | infx512-coursework',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'INFX512 Spring 2018 Coursework' }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
      },
      {
        rel: 'stylesheet', href: '/css/prism.css'
      },
      {
        rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i'
      }
    ],
    script: [
      {
        src: '/js/prism.js',
      }
    ]
  },
  /*
  ** Load global CSS
  */
  css: ['@/assets/css/main.css'],
  /*
  ** This option is given directly to the vue-router Router constructor
  */
  router: {
    base: (process.env.DEPLOY_ENV === 'GH_PAGES') ? '/coursework/' : '',
    linkActiveClass: 'is-active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
