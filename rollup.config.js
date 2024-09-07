import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
  input: 'src/index.js',          // 入口文件
  output: [
    {
      file: 'dist/yeying-next.umd.js',  // UMD 输出（适合浏览器使用）
      format: 'umd',
      name: 'YeYing',
      sourcemap: true
    }, 
    {
			file: 'dist/yeying-next.min.js',
			format: 'iife',
			name: 'YeYing',
			plugins: [terser()]
		}
  ],
  plugins: [
    json(),
    resolve(),                    // 查找和打包 node_modules 中的模块
    commonjs(),                   // 将 CommonJS 模块转换为 ES6
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      babelHelpers: 'bundled'
    }),
    globals(),
    builtins()
  ]
};

