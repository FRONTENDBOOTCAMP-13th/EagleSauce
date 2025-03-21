function append_header() {
	const header_template = `
		<!-- header start -->
		<header class="font-newbery relative">
			<p class="text-15 text-white bg-hot-brown text-center py-1.5">
				<span class="font-bold mr-1">[COUPON]</span>
				<span class="font-sans">카카오 채널 추가 시 무료배송 쿠폰 지급</span>
			</p>

			<!-- Mobile Header -->
			<div class="menu-mobile lg:hidden relative bg-hot-ivory p-4">
				<ul class="flex justify-between">
					<li>
						<a href="#void" class="size-5">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
							</svg>
						</a>
					</li>
					<li>
						<a href="#void" class="size-5">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
								<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
							</svg>
						</a>
					</li>
				</ul>
				<a href="#void" class="block w-32 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<img src="/assets/images/logo.png" alt="하랜띵스로고"/>
				</a>
			</div>

			<!-- Mobile Menu -->
			<div class="w-full h-dvh bg-hot-brand absolute top-0 left-0 text-white hidden">
				<div class="menu-mobile lg:hidden relative p-4">
					<ul class="flex justify-between">
						<li>
							<a href="#void" class="size-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
								</svg>
							</a>
						</li>
						<li class="flex items-center gap-3">
							<a href="#void" class="size-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
								</svg>
							</a>
							<a href="#void" class="size-5">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
								</svg>
							</a>
						</li>
					</ul>
					<a href="/src/pages/home.html" class="block w-32 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<img src="/assets/images/logo.png" alt="하랜띵스로고"/>
					</a>
				</div>
				<ul>
					<li class="text-45 font-semibold border-b px-4 py-6">
						<p class="flex justify-between">
							<span>SHOP</span><span>-</span>
						</p>
						<ul class="text-20 font-normal space-y-3 py-4">
							<li>ALL PRODUCTS</li>
							<li>PYOGORUFFLE</li>
							<li>PARMESAN GOCHUJANG</li>
							<li>XO SHRIMP</li>
							<li>HOTN'THINGS KIT</li>
						</ul>
					</li>
					<li class="text-45 font-semibold border-b px-4 py-6">
						<p class="flex justify-between">
							<span>ABOUT</span><span>-</span>
						</p>
						<ul class="text-20 font-normal space-y-3 py-4">
							<li>OUR BRAND</li>
							<li>INQUIRY</li>
						</ul>
					</li>
					<li class="text-45 font-semibold border-b px-4 py-6">
						<p class="flex justify-between">
							<span>COMMNUNITY</span><span>-</span>
						</p>
					</li>
					<li class="text-20 font-semibold px-4 py-6">JOIN/LOGIN</li>
				</ul>
			</div>

			<!-- Desktop Header -->
			<nav class="menu-pc hidden border-b lg:flex lg:justify-between text-black text-16 font-bold bg-hot-ivory px-6 relative z-10">
				<ul class="flex">
					<!-- ABOUT -->
					<li class="group">
						<a href="/src/pages/about-ourbrand.html" class="p-6 block">ABOUT</a>
						<ul class="font-medium pb-6 pl-6 absolute left-0 w-screen bg-hot-ivory invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 border-b">
							<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
								<a href="/src/pages/about-ourbrand.html">OUR BRAND</a>
							</li>
							<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
								<a href="/src/pages/about-inquiry.html">INQUIRY</a>
							</li>
						</ul>
					</li>
					<!-- SHOP -->
					<li class="group">
						<a href="#void" class="p-6 block">SHOP</a>
						<ul class="font-medium pb-6 pl-30 absolute left-0 w-screen invisible opacity-0 bg-hot-ivory transition-all duration-300 group-hover:visible group-hover:opacity-100 border-b">
							<li class="px-6 py-1.5 flex gap-4 items-center">
								<a href="/src/pages/shop-all_products.html" class="hover:text-hot-main transition-all duration-300">ALL PRODUCTS</a>
								<p class="text-14 opacity-20 font-sans">한 입으로 당신의 매 순간에 특별함을 더해주는 하랜띵스</p>
							</li>
							<li class="px-6 py-1.5 flex gap-4 items-center">
								<a href="/src/pages/shop-pyogo.html" class="hover:text-hot-main transition-all duration-300">PYOGORUFFLE</a>
								<p class="text-14 opacity-20 font-sans">트러플 풍미와 표고의 감칠맛, 화이트와인식초의 산뜻함이 결합된 고급스러운 매운맛</p>
							</li>
							<li class="px-6 py-1.5 flex gap-4 items-center">
								<a href="/src/pages/shop-parmesan.html" class="hover:text-hot-main transition-all duration-300">PARMESAN GOCHUJANG</a>
								<p class="text-14 opacity-20 font-sans">고추장의 깊고 진한 매콤함에 더한 치즈의 고소하고 짭쪼름한 풍미</p>
							</li>
							<li class="px-6 py-1.5 flex gap-4 items-center">
								<a href="/src/pages/shop-shrimp.html" class="hover:text-hot-main transition-all duration-300">XO SHRIMP</a>
								<p class="text-14 opacity-20 font-sans">
									청양고추를 넣은 알싸한 간장 베이스에 새우로 감칠맛을
									끌어올린 단짠 매력
								</p>
							</li>
							<li class="px-6 py-1.5 flex gap-4 items-center">
								<a href="/src/pages/shop-hotnkit.html" class="hover:text-hot-main transition-all duration-300">HOTN'THINGS KIT</a>
								<p class="text-14 opacity-20 font-sans">일상에 미슐랭급 풍미를 선사할 하랜띵스의 대표 소스 3종 세트</p>
							</li>
							<li class="mt-20 px-6">
								<p class="font-newbery text-14 font-bold opacity-20 leading-6">
									HOTN'THINGS exists to spread the concept of 'HOT' around the
									world.<br/>This 'HOT' is not only the realm of the taste
									sense, but it is also the realm<br/>of the sixth sense that
									is somehow fun and exciting.<br/>Experience the thrill of
									everyday life created by HOTN'THINGS!
								</p>
							</li>
							<div class="flex gap-4 w-[26vw] xl:w-[30vw] 2xl:w-[24vw] absolute top-2 left-[750px]">
								<img src="/assets/images/napoli-li.jpg" class="object-cover object-center" alt=""/>
								<img src="/assets/images/shop-all2.webp" class="object-cover object-center hidden 2xl:block" alt=""/>
							</div>
						</ul>
					</li>

					<!-- COMMUNITY -->
					<li class="group">
						<a href="/src/pages/community-event.html" class="p-6 block">COMMUNITY</a>
						<ul class="font-medium pb-6 pl-54 absolute left-0 w-screen bg-hot-ivory invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 border-b">
							<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
								<a href="/src/pages/community-event.html">EVENT</a>
							</li>
							<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
								<a href="/src/pages/community-recipes_and_paring.html">RECIPES & PARING</a>
							</li>
							<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
								<a href="/src/pages/community-napolimatfia.html">NAPOLI MATFIA</a>
							</li>
							<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
								<a href="/src/pages/community-review.html">REVIEW</a>
							</li>
							<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
								<a href="/src/pages/community-faq.html">FAQ</a>
							</li>
							<li class="px-6 py-1.5 hover:text-hot-main transition-all duration-300">
								<a href="/src/pages/community-qna.html" target="_blank" rel="noopener noreferrer">1:1 Q&A</a>
							</li>
						</ul>
					</li>
				</ul>

				<ul class="flex">
					<li><a href="./src/pages/search.html" class="p-6 block">SEARCH</a></li>
					<li><a href="./src/pages/cart.html" class="p-6 block">CART</a></li>
					<li><a href="./src/pages/join-login.html" class="p-6 block">JOIN/LOGIN</a></li>
				</ul>

				<!-- Logo -->
				<a href="#void" class="block w-32 lg:w-56 absolute left-1/2 -translate-x-1/2 pt-3">
					<img src="/assets/images/logo.png" alt="하랜띵스로고"/>
				</a>
			</nav>
		</header>
	`;
	
	document.body.insertAdjacentHTML('afterbegin', header_template);
}

export { append_header };
