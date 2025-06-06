import path from 'node:path';
import fs from 'node:fs';
import react from '@vitejs/plugin-react';
import { createLogger, defineConfig } from 'vite';

// Add .nojekyll file generator
const noJekyllPlugin = {
  name: 'no-jekyll',
  closeBundle() {
    fs.writeFileSync('docs/.nojekyll', '');
  }
};

console.warn = () => {};

const logger = createLogger()
const loggerError = logger.error

logger.error = (msg, options) => {
  if (options?.error?.toString().includes('CssSyntaxError: [postcss]')) {
    return;
  }
  loggerError(msg, options);
}

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/teste-chico/'
    : '/',
  customLogger: logger,
  plugins: [
    react(),
    noJekyllPlugin
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      external: [
        '@babel/parser',
        '@babel/traverse',
        '@babel/generator',
        '@babel/types'
      ]
    }
  }
});
