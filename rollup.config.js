const pkg = require('./package.json');

export default {
  input: 'src/typist.js',
  output: {
    file: pkg.main,
    format: 'umd',
    name: pkg.name,
  },
};
