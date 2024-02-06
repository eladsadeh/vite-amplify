import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// console.log('process:', process);
// console.log(loadEnv('development', process.cwd(), ''));
// console.log('process.env:', process.env);
// console.log(MY_PW);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    'process.env.PACKAGE_VERSION': JSON.stringify(
      process.env.npm_package_version
    ),
    BUILD_TIME: JSON.stringify(new Date().toUTCString()),
    'myvars.env.VAR2': JSON.stringify('VALUE2'),
  },
});
