export default {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: { '@/(.*)': '<rootDir>/src/$1' },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  testRegex: ['(\\.|/)(spec)\\.ts[x]?$']
}
