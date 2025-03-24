import "./style.css"
import "./js/main-header.js"
import "./js/sub-header.js"
import "./js/footer.js"

// [Index] Mobile - click_event
document.addEventListener('DOMContentLoaded', function() {

  const listItems = document.querySelectorAll('.mt-5 li');
  const images = document.querySelectorAll('.absolute.left-\\[28\\%\\] img');
  
  listItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      images.forEach(img => {
        img.classList.add('hidden');
        img.classList.remove('block');
      });
      
      if (index < images.length) {
        images[index].classList.remove('hidden');
        images[index].classList.add('block');
      }
      
      listItems.forEach(li => {
        const span = li.querySelector('span');
        span.classList.remove('bg-hot-brand');
        span.classList.add('bg-black/90');
      });
      
      const span = item.querySelector('span');
      span.classList.remove('bg-black/90');
      span.classList.add('bg-hot-brand');
    });
  });
  
  if (images.length > 0) {
    images[0].classList.remove('hidden');
    images[0].classList.add('block');
    
    const firstSpan = listItems[0].querySelector('span');
    firstSpan.classList.remove('bg-black/90');
    firstSpan.classList.add('bg-hot-brand');
  }
});

// [Index] PC - click_event
document.addEventListener('DOMContentLoaded', function() {
  // 모든 버튼과 이미지 요소 가져오기
  const buttons = document.querySelectorAll('.btn-group button');
  const images = document.querySelectorAll('.overflow-y-auto img');
  const scrollContainer = document.querySelector('.overflow-y-auto');
  
  // 기본적으로 첫 번째 버튼과 이미지 활성화
  buttons[0].classList.add('bg-hot-brand');
  buttons[0].classList.remove('bg-black');
  
  // 각 버튼에 클릭 이벤트 추가
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // 모든 버튼 비활성화
      buttons.forEach(btn => {
        btn.classList.remove('bg-hot-brand');
        btn.classList.add('bg-black');
      });
      
      // 현재 버튼 활성화
      this.classList.add('bg-hot-brand');
      this.classList.remove('bg-black');
      
      // 모든 이미지 숨기기
      images.forEach(img => {
        img.classList.add('hidden');
      });
      
      // 버튼 데이터에 맞는 이미지 표시
      const imageIndex = parseInt(this.getAttribute('data-pc')) - 1;
      if (images[imageIndex]) {
        images[imageIndex].classList.remove('hidden');
      }
      
      // 스크롤 위치 초기화 (맨 위로)
      if (scrollContainer) {
        scrollContainer.scrollTop = 0;
      }
    });
  });
});

// [Common] Header - Menu mobile
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

// [commnunity-review] - review
var swiper = new Swiper("#event-review", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000, 
    disableOnInteraction: false, 
  },
  speed: 3000
});
