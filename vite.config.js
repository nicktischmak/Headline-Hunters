import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      // Alias `global` to ensure compatibility
      global: 'rollup-plugin-node-builtins/global',
    },
  },

})
