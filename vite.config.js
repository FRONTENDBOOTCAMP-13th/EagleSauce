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
        ourbrand: 'src/pages/about-ourbrand.html', 
        inquiry: 'src/pages/about-inquiry.html',
        search: 'src/pages/search.html',
        event: 'src/pages/community-event.html',
        recipes: 'src/pages/community-recipes&paring.html',
        napoli: 'src/pages/community-napolimatfia.html',
        review: 'src/pages/community-review.html',
        faq: 'src/pages/community-faq.html',
        qna: 'src/pages/community-qna.html',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});