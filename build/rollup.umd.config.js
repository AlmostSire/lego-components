import baseConfig, { file } from "./rollup.config.js";

export default {
  ...baseConfig,
  output: {
    name: "LogoComponents",
    file: file("umd"),
    format: "umd",
    globals: {
      vue: "Vue",
      "lodash-es": "_",
    },
    exports: "named",
  },
};
