import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'


export default defineConfig({
  plugins: [react()],
  base: "/reactapptest/" 
})

/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/reactapptest/"   //  must match repo name
})*/