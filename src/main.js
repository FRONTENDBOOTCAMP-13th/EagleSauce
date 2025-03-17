import "./style.css"

document.addEventListener('DOMContentLoaded', function() {
	const menuItems = document.querySelectorAll('.menu-pc > ul > li.group');
	const menuBg = document.querySelector('.menu-bg');

	console.log(11);
	
	menuItems.forEach(item => {
		item.addEventListener('mouseenter', function() {
			const submenu = this.querySelector('ul');
			if (submenu) {
				const submenuHeight = submenu.offsetHeight;
				menuBg.style.height = `${submenuHeight + 10 }px`;
			}
		});
		
		item.addEventListener('mouseleave', function() {
			menuBg.style.height = '1px';
		});
	});
});