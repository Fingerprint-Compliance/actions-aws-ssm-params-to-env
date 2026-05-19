import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const config = {
  input: "index.js",
  output: {
    esModule: true,
    file: "dist/index.js",
    format: "es",
    inlineDynamicImports: true,
    sourcemap: true,
  },
  plugins: [commonjs(), json(), nodeResolve({ preferBuiltins: true })],
};

export default config;
