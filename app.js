consta hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
consta mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
consta menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
consta header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
