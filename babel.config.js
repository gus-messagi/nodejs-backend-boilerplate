module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@tests': '.src/__tests__',
        '@server': './src/server',
        '@config-test': './src/tests',
        '@data': './src/data'
      }
    }]
  ]
}
