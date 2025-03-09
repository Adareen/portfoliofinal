
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfoliofinal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfoliofinal"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5490, hash: 'e2e4eba8a87fa8562e1884592499c0ffd0efcca2ea9c7d6331e04eae6a5b67b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1579, hash: 'bbe2c21f30604bd82e10e4d6cf498d52ace4ef1ce84d386202aaaba88411c0f3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18496, hash: '5272e08b1315b45b5be41b158ef47f3e8155ba7984c3afb60c0c6be7dcf9f86c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LAK7BA7D.css': {size: 232012, hash: 'TiCFRPGhqz0', text: () => import('./assets-chunks/styles-LAK7BA7D_css.mjs').then(m => m.default)}
  },
};
