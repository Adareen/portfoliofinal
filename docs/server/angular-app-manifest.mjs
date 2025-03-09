
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
    'index.csr.html': {size: 5490, hash: '6a9473453605dfc9fddf956371692f580493b9fbbf06dbb99106a8f2bc338656', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1579, hash: '6800388a5ae0760a866f6e1908197c78e07294642033384bfca6e79345cdb7cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18458, hash: 'cece78b584f92b214f680c5e60bc55097b6d387a2fa353520e9eb7b005370273', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LAK7BA7D.css': {size: 232012, hash: 'TiCFRPGhqz0', text: () => import('./assets-chunks/styles-LAK7BA7D_css.mjs').then(m => m.default)}
  },
};
