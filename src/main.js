import "./style.css"
import "./js/main-header.js"
import "./js/sub-header.js"
import "./js/footer.js"

// [Index] Mobile - click_event
document.addEventListener('DOMContentLoaded', function() {

  // Get all list items
  const listItems = document.querySelectorAll('.mt-5 li');
  // Get all images in the phone screen div
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