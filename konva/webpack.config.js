const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path")

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "test",
    projectName: "konva",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    externals: ["react", "react-dom"],
  });
};
