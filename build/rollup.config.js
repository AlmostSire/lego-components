import json from "@rollup/plugin-json";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { name } from "../package.json";

const file = (type) => `dist/${name}.${type}.js`;

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"],
};

export { name, file };

export default {
  input: "src/index.ts",
  plugins: [
    nodeResolve(),
    typescript({
      tsconfigOverride: overrides,
    }),
    vue(),
    json(),
    css({ output: "index.css" }),
  ],
  external: ["vue", "lodash-es"],
};
