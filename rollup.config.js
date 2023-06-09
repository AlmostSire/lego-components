import json from "@rollup/plugin-json";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { name } from "./package.json";

const file = (type) => `dist/${name}.${type}.js`;

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["node_modules", "src/App.vue", "src/main.ts"],
  //include: ["src/main.ts", "src/shims-vue.d.ts"],
};

export default {
  input: "src/index.ts",
  output: {
    file: file("esm"),
    format: "es",
    name,
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfigOverride: overrides,
    }),
    vue(),
    json(),
    css({ output: "bundle.css" }),
  ],
  external: ["vue"],
};
