import "./style.css"
import { append_header } from '/src/js/header.js';
import { append_footer } from '/src/js/footer.js';


// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
	append_header();
});

// 페이지 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', () => {
  append_footer();
});