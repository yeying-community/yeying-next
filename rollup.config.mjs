import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/my-sdk.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/my-sdk.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  onwarn: (warning, warn) => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  },
  plugins: [
    resolve(), // 提供解析 node_modules 中模块的能力
    commonjs(), // 转换 CommonJS 模块为 ES6
    typescript() // 编译 TypeScript
  ]
};

