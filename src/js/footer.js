function append_footer() {
  //footer추가 후후 </body></html>는 브라우저가 자동으로 처리함
	const footer_template = `
		<footer class="bg-hot-gray200 px-3 text-white text-xs font-medium leading-normal lg:px-[58px]">
      <div class="w-full mx-auto py-[37px] flex flex-col items-center text-center lg:max-w-[1920px] lg:items-start lg:py-10 lg:pb-[33px] lg:text-left">

        <div class="w-[100px] lg:w-[150px]">
          <a href="/" class="">
            <img src="/public/assets/images/logo.png" alt="HOTN'THINGS" />
          </a>
        </div>

        <div class="my-[19px] mb-[25px] lg:my-[15px]">
          <p>채팅상담 운영 | 1522-1874</p>
          <p>Mon-Fri 10:00 - 17:00 (Lunch: pm 12:20 - 13:30)</p>
          <p>Sat &amp; Sun, Holiday off</p>
        </div>

        <ul class="flex mb-[25px] lg:mb-[15px] lg:text-15">
          <li class="whitespace-nowrap after:content-['ㅣ'] after:inline-block after:px-[10px] last:after:hidden">
            <a href="" class="inline-block">제휴 파트너 문의</a>
          </li>
          <li class="whitespace-nowrap after:content-['ㅣ'] after:inline-block after:px-[10px] last:after:hidden">
            <a href="" class="inline-block">채팅상담</a>
          </li>
          <li class="whitespace-nowrap after:content-['ㅣ'] after:inline-block after:px-[10px] last:after:hidden">
            <a href="" class="inline-block">도움말</a>
          </li>
          <li class="whitespace-nowrap after:content-['ㅣ'] after:inline-block after:px-[10px] last:after:hidden">
            <a href="" class="inline-block">브랜드 소개</a>
          </li>
        </ul>

        <div class="text-[#777] text-10 leading-[1.8] lg:text-11 lg:leading-[1.365]">
          (주)티엠스마일ㅣ대표자명 이준호ㅣ04779 202호 서울특별시 성동구 상원1길 5 (성수동1가)<br>
          사업자등록번호 172-87-01834 | 통신판매업 신고번호 2024-서울성동-1329<br>
          개인정보보호책임자 : 김수민ㅣ <a href="/member/agreement.html">이용약관</a> ㅣ <a href="/member/privacy.html">개인정보처리방침</a>
        </div>
      </div>
    </footer>
	`;
	
	document.body.insertAdjacentHTML('beforeend', footer_template);
}

export { append_footer };
