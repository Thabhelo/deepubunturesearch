/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
    include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules', 
      'dist', 
      '.idea', 
      '.git', 
      '.cache',
      'tests/**/*.spec.ts', // Exclude Playwright E2E tests
      'playwright.config.ts'
    ],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
}) 