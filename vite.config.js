import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [],
      rehypePlugins: [],
    })
  ],
  // Resolve markdown files
  resolve: {
    extensions: ['.md', '.mdx', '.jsx', '.js']
  }
})