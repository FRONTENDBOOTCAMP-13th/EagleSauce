document.addEventListener('DOMContentLoaded', () => {
	//modal close - 배경 클릭 시 닫기
	window.modal_close = function() {
		document.getElementById('modal_wrap').style.display = 'none';
		document.querySelector("body").classList.remove("modal");
	}

	//modal close - 버튼 클릭 시 닫기
	document.getElementById('modal_wrap').addEventListener('click', (event) => {
		if (event.target === document.getElementById('modal_wrap')) {
			modal_close();
		}
	});
});