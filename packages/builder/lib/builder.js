#!/usr/bin/env node

/*
 * @Author: Klien
 * @Date: 2021-07-10 13:32:21
 * @LastEditTime: 2021-07-10 13:46:24
 * @LastEditors: Klien
 */
const rollup = require("rollup");
const path = require("path");
const resolve = require("@rollup/plugin-node-resolve").default;
const babel = require("@rollup/plugin-babel").default;
const postcss = require("rollup-plugin-postcss");

const currentWorkingPath = process.cwd();

const { src, name } = require(path.join(currentWorkingPath, "package.json"));

const fileName = name.replace("@uuklein/", "");

const inputPath = path.join(currentWorkingPath, src);

const inputOptions = {
  input: inputPath,
  external: ["react"],
  plugins: [
    resolve(),
    postcss({
      modules: true,
    }),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
};
const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: "cjs",
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: "esm",
  },
  {
    file: `dist/${fileName}.umd.js`,
    format: "umd",
    name: `${fileName}`,
  },
];

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
