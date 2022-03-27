// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-app-mdx": () => import("./../../../../src/App.mdx" /* webpackChunkName: "component---src-app-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

