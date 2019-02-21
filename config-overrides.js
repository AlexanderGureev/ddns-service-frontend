const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugin
} = require("customize-cra");

module.exports = override(
  addBabelPlugin(["babel-plugin-styled-components", { displayName: true }]),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "font-family": "Montserrat"
    }
  })
);
