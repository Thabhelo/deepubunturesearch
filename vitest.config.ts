/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
    include: ['tests/**/*.test.{ts,tsx}'],
    exclude: [
      'node_modules', 
      'dist', 
      '.next',
      'tests/**/*.spec.ts', // Exclude Playwright E2E tests
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd()),
    },
  },
}) 