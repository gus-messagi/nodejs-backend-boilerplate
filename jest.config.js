const path = require('path')

module.exports = {
  modulePathIgnorePatterns: ['./src/test/'],
  testEnvironment: path.join(__dirname, './src/tests/env.js')
}
