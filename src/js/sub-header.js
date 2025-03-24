class subHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<header class="fixed top-0 z-1000 w-full font-newbery">
				<p class="text-15 text-white bg-hot-brown text-center py-1.5 h-[37px]">
					<span class="mr-1">[2조 - 이글이글🔥]</span>
					<span class="font-sans max-[400px]:hidden">멋쟁이사자 프론트엔드 13기</span>
				</p>
	
				<!-- Mobile Header -->
				<div class="relative p-4 border-b menu-mobile lg:hidden bg-hot-ivory">
					<ul class="flex justify-between">
						<li>
							<div class="size-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
								</svg>
							</div>
						</li>
						<li>
							<a href="/src/pages/cart.html" aria-label="장바구니바로가기" class="size-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
								</svg>
							</a>
						</li>
					</ul>
					<a href="/src/pages/home.html" aria-label="홈바로가기" class="absolute block w-32 -translate-x-1/2 -translate-y-1/2 transform-none left-1/2 top-1/2">
						<div class="bg-(image:--hot-logo) bg-no-repeat w-[140px] h-[30px] bg-center bg-contain"></div>
					</a>
				</div>
	
				<!-- Mobile Menu -->
				<div class="absolute top-0 -left-[100%] transition-all duration-300 w-full text-white mobile-menu h-dvh overflow-y-scroll bg-hot-brand z-1100 lg:hidden">
					<div class="relative p-4 menu-mobile lg:hidden">
						<ul class="flex justify-between">
							<li>
								<div class="size-5 menu-lists">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
									</svg>
								</div>
							</li>
							<li class="flex items-center gap-3">
								<a href="/src/pages/search.html" aria-label="검색하기" class="size-5">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
									</svg>
								</a>
								<a href="/src/pages/cart.html" aria-label="장바구니바로가기" class="size-5">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
										<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
									</svg>
								</a>
							</li>
						</ul>
						<a href="/src/pages/home.html" aria-label="홈바로가기" class="absolute block w-32 -translate-x-1/2 -translate-y-1/2 transform-none left-1/2 top-1/2">
							<div class="bg-(image:--hot-logo) bg-no-repeat w-[140px] h-[30px] bg-center bg-contain"></div>
						</a>
					</div>
					<ul class="font-semibold border-b text-45">
						<!-- ABOUT -->
						<li class="group border-b border-white px-4 py-6 ">
							<p class="flex justify-between">
								<span>ABOUT</span>
								<span>-</span>
							</p>
							<ul class="py-4 space-y-3 font-normal text-20">
								<li>
									<a aria-label="브랜드살펴보기" href="/src/pages/about-ourbrand.html">OUR BRAND</a>
								</li>
								<li>
									<a aria-label="입점문의하기" href="/src/pages/about-inquiry.html">INQUIRY</a>
								</li>
							</ul>
						</li>
	
						<!-- SHOP -->
						<li class="group border-b border-white px-4 py-6 ">
							<p class="flex justify-between">
								<span>SHOP</span>
								<span>-</span>
							</p>
							<ul class="py-4 space-y-3 font-normal text-20">
								<li>
									<a aria-label="모든상품" href="/src/pages/shop-all_products.html">ALL PRODUCTS</a>
								</li>
								<li>
									<a aria-label="표고러플" href="/src/pages/shop-pyogo.html">PYOGORUFFLE</a>
								</li>
								<li>
									<a aria-label="파마산고추장" href="/src/pages/shop-parmesan.html">PARMESAN GOCHUJANG</a>
								</li>
								<li>
									<a aria-label="XO쉬림프" href="/src/pages/shop-shrimp.html">XO SHRIMP</a>
								</li>
								<li>
									<a aria-label="하랜키트3종세트" href="/src/pages/shop-hotnkit.html">HOTN'THINGS KIT</a>
								</li>
							</ul>
						</li>
	
						<!-- COMMUNITY -->
						<li class="group border-b border-white px-4 py-6 ">
							<p class="flex justify-between">
								<span>COMMUNITY</span>
								<span>-</span>
							</p>
							<ul class="py-4 space-y-3 font-normal text-20">
								<li>
									<a aria-label="이벤트" href="/src/pages/community-event.html">EVENT</a>
								</li>
								<li>
									<a aria-label="레시피와페어링" href="/src/pages/community-recipes_and_paring.html">RECIPES & PARING</a>
								</li>
								<li>
									<a aria-label="나폴리맛피아" href="/src/pages/community-napolimatfia.html">NAPOLI MATFIA</a>
								</li>
								<li>
									<a aria-label="리뷰페이지" href="/src/pages/community-review.html">REVIEW</a>
								</li>
								<li>
									<a aria-label="질의응답" href="/src/pages/community-faq.html">FAQ</a>
								</li>
								<li>
									<a aria-label="Q&A바로가기" href="/src/pages/community-qna.html" target="_blank" rel="noopener noreferrer">1:1 Q&A</a>
								</li>
							</ul>
						</li>

						<!-- 로그인 -->
						<li class="group  px-4 py-6 text-30">
							<a href="/src/pages/join-login.html" aria-label="로그인/회원가입">JOIN/LOGIN</a>
						</li>
					</ul>
				</div>
	
				<!-- Desktop Header -->
				<nav class="relative z-10 hidden px-6 font-bold text-black border-b menu-pc lg:flex lg:justify-between text-16 bg-hot-ivory">
					<ul class="flex">
						<!-- ABOUT -->
						<li class="group">
							<a aria-label="브랜드소개" href="/src/pages/about-ourbrand.html" class="block p-6" tabindex="0">ABOUT</a>
							<ul class="absolute left-0 invisible w-full pb-6 pl-6 font-medium transition-all duration-300 border-b opacity-0 bg-hot-ivory group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
								<li class="px-6 py-1.5 hover:text-hot-main focus-within:text-hot-main transition-all duration-300">
									<a aria-label="브랜드살펴보기" href="/src/pages/about-ourbrand.html">OUR BRAND</a>
								</li>
								<li class="px-6 py-1.5 hover:text-hot-main focus-within:text-hot-main transition-all duration-300">
									<a aria-label="입점문의하기" href="/src/pages/about-inquiry.html">INQUIRY</a>
								</li>
							</ul>
						</li>
	
						<!-- SHOP -->
						<li class="group">
							<a aria-label="제품구매" href="/src/pages/shop-all_products.html" class="block p-6" tabindex="0">SHOP</a>
							<ul class="absolute left-0  invisible w-full pb-6 font-medium transition-all duration-300 border-b opacity-0 pl-30 bg-hot-ivory group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
								<li class="px-6 py-1.5 flex gap-4 items-center">
									<a aria-label="모든상품" href="/src/pages/shop-all_products.html" class="transition-all duration-300 hover:text-hot-main">ALL PRODUCTS</a>
									<p class="font-sans text-14 opacity-20">한 입으로 당신의 매 순간에 특별함을 더해주는 하랜띵스</p>
								</li>
								<li class="px-6 py-1.5 flex gap-4 items-center">
									<a aria-label="표고러플" href="/src/pages/shop-pyogo.html" class="transition-all duration-300 hover:text-hot-main">PYOGORUFFLE</a>
									<p class="font-sans text-14 opacity-20">트러플 풍미와 표고의 감칠맛, 화이트와인식초의 산뜻함이 결합된 고급스러운 매운맛</p>
								</li>
								<li class="px-6 py-1.5 flex gap-4 items-center">
									<a aria-label="파마산고추장" href="/src/pages/shop-parmesan.html" class="transition-all duration-300 hover:text-hot-main">PARMESAN GOCHUJANG</a>
									<p class="font-sans text-14 opacity-20">고추장의 깊고 진한 매콤함에 더한 치즈의 고소하고 짭쪼름한 풍미</p>
								</li>
								<li class="px-6 py-1.5 flex gap-4 items-center">
									<a aria-label="XO쉬림프" href="/src/pages/shop-shrimp.html" class="transition-all duration-300 hover:text-hot-main">XO SHRIMP</a>
									<p class="font-sans text-14 opacity-20">
										청양고추를 넣은 알싸한 간장 베이스에 새우로 감칠맛을
										끌어올린 단짠 매력
									</p>
								</li>
								<li class="px-6 py-1.5 flex gap-4 items-center">
									<a aria-label="하랜키트3종세트" href="/src/pages/shop-hotnkit.html" class="transition-all duration-300 hover:text-hot-main">HOTN'THINGS KIT</a>
									<p class="font-sans text-14 opacity-20">일상에 미슐랭급 풍미를 선사할 하랜띵스의 대표 소스 3종 세트</p>
								</li>
								<li class="px-6 mt-20">
									<p class="font-bold leading-6 font-newbery text-14 opacity-20">
										HOTN'THINGS exists to spread the concept of 'HOT' around the
										world.<br/>This 'HOT' is not only the realm of the taste
										sense, but it is also the realm<br/>of the sixth sense that
										is somehow fun and exciting.<br/>Experience the thrill of
										everyday life created by HOTN'THINGS!
									</p>
								</li>
								<div class="flex gap-4 xl:w-[30vw] 2xl:w-[40vw] absolute top-2 left-[750px]">
									<div class="hidden xl:block object-cover object-center w-[400px] aspect-[5/3] bg-(image:--header-napoli) bg-center bg-contain bg-no-repeat">
									</div>
									<div class="hidden object-cover object-center 2xl:block w-[400px] aspect-[5/3] bg-(image:--header-napoli2) bg-center bg-contain bg-no-repeat">
									</div>
								</div>
							</ul>
						</li>
	
						<!-- COMMUNITY -->
						<li class="group">
							<a aria-label="커뮤니티" href="/src/pages/community-event.html" class="block p-6" tabindex="0">COMMUNITY</a>
							<ul class="absolute left-0 invisible w-full pb-6 font-medium transition-all duration-300 border-b opacity-0 pl-54 bg-hot-ivory group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
								<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
									<a aria-label="이벤트" href="/src/pages/community-event.html">EVENT</a>
								</li>
								<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
									<a aria-label="레시피와페어링" href="/src/pages/community-recipes_and_paring.html">RECIPES & PARING</a>
								</li>
								<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
									<a aria-label="나폴리맛피아" href="/src/pages/community-napolimatfia.html">NAPOLI MATFIA</a>
								</li>
								<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
									<a aria-label="리뷰페이지" href="/src/pages/community-review.html">REVIEW</a>
								</li>
								<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
									<a aria-label="질의응답" href="/src/pages/community-faq.html">FAQ</a>
								</li>
								<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
									<a aria-label="Q&A바로가기" href="/src/pages/community-qna.html" target="_blank" rel="noopener noreferrer">1:1 Q&A</a>
								</li>
							</ul>
						</li>
					</ul>
	
					<ul class="flex">
						<li><a href="/src/pages/search.html" aria-label="검색하기" class="block p-6">SEARCH</a></li>
						<li><a href="/src/pages/cart.html" aria-label="장바구니바로가기" class="block p-6">CART</a></li>
						<li><a href="/src/pages/join-login.html" aria-label="로그인/회원가입" class="block p-6">JOIN/LOGIN</a></li>
					</ul>
	
					<!-- Logo -->
					<a href="/src/pages/home.html" aria-label="홈바로가기" class="absolute inline-flex w-32 mt-3 -translate-x-1/2 transform-none lg:w-56 left-1/2" tabindex="1">
						<div class="bg-(image:--hot-logo) bg-no-repeat w-[220px] h-[45px] bg-center bg-contain"></div>
					</a>
				</nav>
			</header>
		`;



		document.addEventListener('DOMContentLoaded', function() {
			const menuButton = document.querySelector('.menu-mobile .bi-list').closest('div');
			const menuLists = document.querySelector('.menu-lists');
			const mobileMenu = document.querySelector('.mobile-menu');

			menuButton.addEventListener('click', function() {
				mobileMenu.classList.remove('-left-[100%]');
				mobileMenu.classList.add('left-0');
			});
			
			menuLists.addEventListener('click', function() {
				mobileMenu.classList.remove('left-0');
				mobileMenu.classList.add('-left-[100%]');
			});
		});


	}
}

// 웹 컴포넌트 등록
customElements.define('sub-header', subHeader);