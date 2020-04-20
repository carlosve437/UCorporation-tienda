/**
 * App Constants
*/

export default {
   AppLogo: require('../assets/images/header-logo.png'),         // App logo
   rtlLayout: false,                                             // RTL Layout
   adminLayout: false,                                           // Admin Layout
	navCollapsed: false,                                          // Sidebar Nav Layout
   algoliaConfig: {                                              // Algolia configuration
      appId: 'latency',
      apiKey: '3d9875e51fbd20c7754e65422f7ce5e1',
      indexName: 'bestbuy'
   },
   // Default locale
   locale: {
      locale: 'es',
      name: 'Spanish',
      icon: 'es',
   },
   // Footer about description
   AboutUs: 'Somos una Empresa distribuidora de equipos tecnológicos.',
   // Copyright text
   CopyrightText: '© All Rights Reversed | U Store Corporation '
}