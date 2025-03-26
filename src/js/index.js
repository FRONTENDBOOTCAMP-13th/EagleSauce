// [Index] Mobile - click_event
document.addEventListener('DOMContentLoaded', function() {
  const mobileBtns = document.querySelectorAll('.mobile-btn-group button');
  const mobileImgs = document.querySelectorAll('.mobile-img img');

  // 기본적으로 첫 번째 버튼과 이미지 활성화
  mobileBtns[0].classList.add('bg-hot-brand');
  mobileBtns[0].classList.remove('bg-black');
  mobileBtns[0].setAttribute('aria-pressed', 'true');

  mobileBtns.forEach(button => {
    button.addEventListener('click', function() {
      // 모든 버튼 비활성화 및 aria-pressed false
      mobileBtns.forEach(btn => {
        btn.classList.remove('bg-hot-brand');
        btn.classList.add('bg-black');
        btn.setAttribute('aria-pressed', 'false');
      });

      // 현재 버튼 활성화 및 aria-pressed true
      this.classList.add('bg-hot-brand');
      this.classList.remove('bg-black');
      this.setAttribute('aria-pressed', 'true');

      // 모든 이미지 숨기기
      mobileImgs.forEach(img => img.classList.add('hidden'));

      // 해당 이미지만 표시
      const imageIndex = parseInt(this.getAttribute('data-mobile')) - 1;
      if (mobileImgs[imageIndex]) mobileImgs[imageIndex].classList.remove('hidden');

    });
  });
});

// [Index] PC - click_event
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-group button');
  const images = document.querySelectorAll('.overflow-y-auto img');
  const scrollContainer = document.querySelector('.overflow-y-auto');
  
  // 기본적으로 첫 번째 버튼과 이미지 활성화
  buttons[0].classList.add('bg-hot-brand');
  buttons[0].classList.remove('bg-black');
  buttons[0].setAttribute('aria-pressed', 'true');  // 첫 번째 버튼 선택된 상태로 설정

  // 각 버튼에 클릭 이벤트 추가
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // 모든 버튼 비활성화 및 aria-pressed 상태를 false로 설정
      buttons.forEach(btn => {
        btn.classList.remove('bg-hot-brand');
        btn.classList.add('bg-black');
        btn.setAttribute('aria-pressed', 'false');  
      });
      
      // 현재 버튼 활성화 및 aria-pressed 상태를 true로 설정
      this.classList.add('bg-hot-brand');
      this.classList.remove('bg-black');
      this.setAttribute('aria-pressed', 'true');  
      
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
