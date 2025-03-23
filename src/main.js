import "./style.css"
import "./js/main-header.js"
import "./js/sub-header.js"
import "./js/footer.js"


class page_head{
	static addHeadElements(){
		const head = document.head;

		
		//파비콘 추가
		const favicon = document.createElement('link');
		favicon.rel = 'icon';
		favicon.href = '/public/assets/images/favicon.png';
		favicon.type = 'image/x-icon';
		head.appendChild(favicon);

		
		//스타일 시트 추가 (preload)
		const preload_stylesheets = [
			'/public/assets/fonts/pretendard/woff2/PretendardVariable.woff2',
			'/public/assets/fonts/newbery/fonnts.com-Newbery_Sans_Pro_ExtraBold.otf',
			'/public/assets/fonts/newbery/fonnts.com-Newbery_Sans_Pro_Bold.otf',
			'/public/assets/fonts/newbery/fonnts.com-Newbery_Sans_Pro_Medium.otf',
			'/public/assets/fonts/newbery/fonnts.com-Newbery_Sans_Pro_Regular.otf',
			'/public/assets/fonts/newbery/fonnts.com-Newbery_Sans_Pro_Light.otf',
			'/public/assets/fonts/newbery/fonnts.com-Newbery_Sans_Pro_ExtraLight.otf',
			'/public/assets/fonts/newbery/fonnts.com-Newbery_Sans_Pro_Thin.otf'
		];
		preload_stylesheets.forEach(sheet => {
			const link = document.createElement('link');
			link.rel = 'preload';
			link.href = sheet;
			link.as = 'font';
			link.crossOrigin = 'anonymous';
			head.appendChild(link);
		});


		//스타일 시트 추가 (stylesheet)
		const stylesheets = [
			'/public/assets/fonts/pretendard/pretendardvariable.css',
			'/public/assets/fonts/newbery/newbery.css',
			'/public/assets/fonts/gastromond/gastromond.css',
			'/public/assets/fonts/adelle/adelle.css'
		];
		stylesheets.forEach(sheet => {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = sheet;
			head.appendChild(link);
		});


		/*
		//data-page 속성에서 경로 가져오기
		const pagePath = document.documentElement.getAttribute('data-page');
		let script_srcs = [];

		if(pagePath === 'main'){
			const main_header_scripts = [
				'/src/js/main-header.js',
				'/src/js/footer.js'
			];
			script_srcs = main_header_scripts.slice();

		}else if(pagePath && pagePath.startsWith('sub')){
			const common_sub_scripts = [
				'/src/js/sub-header.js',
				'/src/js/footer.js'
			];
			script_srcs = common_sub_scripts.slice();

		}else{
			alert("html태그에 data-page='sub'속성을 추가하세요");

			const default_scripts = [
				''
			];
			script_srcs = default_scripts.slice();
		}

		//스크립트 로드 후 헤더와 푸터 표시
		const scriptPromises = script_srcs.map(script_src => {
			return new Promise((resolve) => {
				const script = document.createElement('script');
				script.src = script_src;
				script.async = true; //비동기 로드
				script.onload = resolve; //스크립트 로드 완료 후 resolve
				head.appendChild(script);
			});
		});

		
		//모든 스크립트가 로드된 후 body의 loading클래스 제거
		Promise.all(scriptPromises).then(() => {
			document.body.classList.remove('loading');
		});
		*/

	}
}

//페이지 로드 시 호출
document.addEventListener('DOMContentLoaded', () => {
	//document.body.classList.add('loading');
	page_head.addHeadElements();
});
