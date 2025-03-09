
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
    'index.csr.html': {size: 5490, hash: '91c09649c4546d3fe5274ee3360290c0f208f50ccfc2bd92841ba36b1b3fe20b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1579, hash: '7f4d9536b4b31e9751f40eb9006b473435666f4632645b13de5119e5867c0bd7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18474, hash: '0a219c31616e706444c3cc742c118c141ccfa8d5a6c12ff7bcea59e54ba59f23', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LAK7BA7D.css': {size: 232012, hash: 'TiCFRPGhqz0', text: () => import('./assets-chunks/styles-LAK7BA7D_css.mjs').then(m => m.default)}
  },
};
