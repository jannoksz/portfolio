import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// IMPORTANT: if you're deploying to https://<username>.github.io/<repo-name>/,
// set base to '/<repo-name>/' below (must match your GitHub repo name exactly).
// If you're deploying to a root domain (username.github.io repo itself), use '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
