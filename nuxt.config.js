export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ucarde',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  axios: {
		baseURL: 'http://127.0.0.1/api',
		proxyHeaders: false
	},

	auth: {
		strategies: {
			local: {
				token: {
					property: 'token',
				},

				user: {
					property: 'user',
					autoFetch: true
				},

				endpoints: {
					login: { url: 'auth/login', method: 'post' },
          logout: { url: 'auth/logout', method: 'post' },
					user: { url: 'user', method: 'get' }
				}
			}
		},

		redirect: {
      login: '/auth/login',
      logout: 'dashboard',
      home: 'dashboard'
		}
	},

	router: {
		middleware: ['auth'],
	},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vueComponentUpload", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
		'@nuxtjs/auth-next',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
