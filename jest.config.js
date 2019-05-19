import { defaults } from 'jest-config'

module.exports = {
  preset: 'jest-puppeteer',
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '.cache'],
  verbose: true,
}
