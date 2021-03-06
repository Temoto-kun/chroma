import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default {
  input: './lib/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  plugins: [
    typescript(),
  ]
}
