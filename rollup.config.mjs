import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/yeying-next.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  onwarn: (warning, warn) => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return
    warn(warning)
  },
  plugins: [
    resolve({browser: true,}),
    commonjs(),
    typescript()
  ]
}

