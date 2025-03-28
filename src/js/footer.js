class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <footer class="bg-hot-gray200 px-3 text-white text-xs font-medium leading-normal lg:px-[58px]">
          <div class="w-full mx-auto py-[37px] flex flex-col items-center text-center lg:max-w-[1920px] lg:items-start lg:py-10 lg:pb-[33px] lg:text-left">
      
            <div class="w-[100px] lg:w-[150px]">
              <a href="/src/pages/home.html" class="inline-block text-0" rel="noopener noreferrer" aria-label="홈으로바로가기">
                <span class="inline-block w-[100px] h-[20px] lg:w-[150px] lg:h-[30px] bg-[image:var(--hot-logo)] bg-no-repeat bg-contain"></span>
              </a>
            </div>
      
            <div class="my-[19px] mb-[25px] lg:my-[15px]">
              <p>채팅상담 운영 <span class="mx-1" aria-hidden='true'>|</span> 1522-1874</p>
              <p>Mon-Fri 10:00 - 17:00 (Lunch: pm 12:20 - 13:30)</p>
              <p>Sat &amp; Sun, Holiday off</p>
            </div>
      
            <ul class="flex mb-[25px] lg:mb-[15px] lg:text-15">
              <li class="whitespace-nowrap after:content-['ㅣ'] after:inline-block after:px-[10px] last:after:hidden">
                <a href="/src/pages/about-inquiry.html" aria-label="제휴 파트너 문의" class="inline-block">제휴 파트너 문의</a>
              </li>
              <li class="whitespace-nowrap after:content-['ㅣ'] after:inline-block after:px-[10px] last:after:hidden">
                <a href="/src/pages/community-qna.html" aria-label="채팅상담" target="_blank" rel="noopener noreferrer" class="inline-block">채팅상담</a>
              </li>
              <li class="whitespace-nowrap after:content-['ㅣ'] after:inline-block after:px-[10px] last:after:hidden">
                <a href="/src/pages/community-faq.html" class="inline-block" aria-label="도움말">도움말</a>
              </li>
              <li class="whitespace-nowrap after:content-['ㅣ'] after:inline-block after:px-[10px] last:after:hidden">
                <a href="/src/pages/about-ourbrand.html" class="inline-block" aria-label="브랜드 소개">브랜드 소개</a>
              </li>
            </ul>
      
            <address class="text-hot-gray500 text-10 leading-[1.8] not-italic lg:text-11 lg:leading-[1.4]">
              (주)멋쟁이사자처럼 ㅣ 대표자명 나성영 ㅣ 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층<br>
              사업자등록번호 264-88-01106 | 통신판매업 신고번호 2022-서울종로-1534<br>
              개인정보보호책임자 : 멋쟁이사자처럼 ㅣ <a href="#" aria-label="이용약관">이용약관</a> ㅣ <a href="#" aria-label="개인정보처리방침">개인정보처리방침</a>
            </address>
          </div>
        </footer>
		`;
	}
}

// 웹 컴포넌트 등록
customElements.define('common-footer', Footer);