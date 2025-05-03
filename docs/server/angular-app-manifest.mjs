
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/random-name-generator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/random-name-generator"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 525, hash: 'b9c01a8e59980fede5c8011fc23ce7d2213c278ac88a8d00b88e74e3b1f5d43c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1038, hash: '10dcbf3a9ea515249d4b9c68cb4b5e78d4a3c14d026432ce8dea60888fadbdeb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44037, hash: '28bddf23f8345b2f8c7b80a28881811442f0370e1183e48937d4e09de52c9ed1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
