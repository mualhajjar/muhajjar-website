import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Written against the React API. Production builds swap in Preact's
 * React-compatible runtime (about 1/8 the size) because the pages are
 * prerendered and only need light interactivity. Set USE_REACT=1 to
 * build with React itself.
 */
const useReact = process.env.USE_REACT === '1';
const preact = {
  react: 'preact/compat',
  'react-dom/client': 'preact/compat/client',
  'react-dom/server': 'preact/compat/server',
  'react-dom': 'preact/compat',
  'react/jsx-runtime': 'preact/jsx-runtime',
};

export default defineConfig(({ command }) => ({
  plugins: [react()],
  define: { __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()) },
  resolve: { alias: command === 'build' && !useReact ? preact : {} },
  ssr: { noExternal: command === 'build' && !useReact ? true : [] },
  build: {
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    sourcemap: false,
  },
}));
