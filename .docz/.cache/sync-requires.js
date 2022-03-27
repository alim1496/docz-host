const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-app-mdx": hot(preferDefault(require("F:\\docz-demo\\src\\App.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("F:\\docz-demo\\.docz\\src\\pages\\404.js")))
}

