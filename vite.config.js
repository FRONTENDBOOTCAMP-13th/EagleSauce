import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html', // 기본 index.html
        header: 'src/components/main-header.html',
        banner: 'src/components/main-banner.html',
        bottle: 'src/components/main-bottle.html',
        footer: 'src/components/main-footer.html',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});