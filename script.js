const menuActive = document.querySelector('.menu_active');
const burgerBtN = document.querySelector('.burger_menu');

function toggleMenu() {
	menuActive.classList.toggle('hidden');
}

burgerBtN.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
