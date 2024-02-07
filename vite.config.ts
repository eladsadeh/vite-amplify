import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log(process.env);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'MY_',
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    'import.meta.env.BUILD_TIME': JSON.stringify(new Date().toUTCString()),
    'process.env.PACKAGE_VERSION': JSON.stringify(
      process.env.npm_package_version
    ),
    'import.meta.env.DEFINE_VAR_META': JSON.stringify('SOMETHING'),
  },
});
