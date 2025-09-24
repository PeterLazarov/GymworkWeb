import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import graphqlLoader from 'vite-plugin-graphql-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), graphqlLoader()],
  server: {
    proxy: {
      '/graphql': 'http://localhost:3000',
    },
  },
})
