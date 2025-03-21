import "./style.css"


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