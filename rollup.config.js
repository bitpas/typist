import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/typist.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      plugins: [terser()],
    },
    {
      file: pkg.module,
      format: 'es',
      name: pkg.name,
      plugins: [terser()],
    },
  ],
};
