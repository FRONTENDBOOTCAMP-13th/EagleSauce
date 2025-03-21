import "./style.css"
import { append_header } from '/src/js/header.js';
import { append_footer } from '/src/js/footer.js';


//header, footer 추가 (페이지 로드 시 실행)
document.addEventListener('DOMContentLoaded', () => {
	const current_page = window.location.pathname;
	const excluded_pages = [
		'/',
		'/src/pages/community-qna.html', 
	];

	if(!excluded_pages.includes(current_page)){
		append_header();
		append_footer();
	}
});


//photo frame slide
var mainSwiper = new Swiper("#photo_frame_sld", {
	spaceBetween: 0,
	centeredSlides: true,
	loop: true,
	effect: "fade",
	navigation: {
		nextEl: ".sld_btn[data-type='next']",
		prevEl: ".sld_btn[data-type='prev']",
	},
});