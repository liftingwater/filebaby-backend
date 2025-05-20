import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'custom',
      customProviderModule: 'c8',
      reportsDirectory: './coverage',
      exclude: ['**/tests/**', '**/node_modules/**'],
    },
  },
})