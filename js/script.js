

let user_icon = document.querySelector('.user-header__icon')
user_icon.addEventListener('click', function (e) {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {
		let user_menu = document.querySelector('.user-header__menu')
		user_menu.classList.remove('_active')
	}
});

let iconMenu = document.querySelector('.icon-menu')
if (iconMenu != null) {
	let body = document.querySelector('body');
	let menuBody = document.querySelector('.menu__body')
	iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle('_activate')
		menuBody.classList.toggle('_active')
	}
	)
}

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
/*
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');

				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper_wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}

	}
}*/

/* let main_slider = new Swiper('.slider-lots__body', {
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 0,
	speed: 800,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
}) */
$(document).ready(function () {
	$('.slider-lots__body').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: $('.control-slider-lots__arrow_next'),
		nextArrow: $('.control-slider-lots__arrow_prev'),
		responsive: [
			{
				breakpoint: 600, // mobile breakpoint
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});
$(document).ready(function () {
	$('.slider-quotes__body').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: $('.slick-next'),
		nextArrow: $('.slick-prev'),
	});
});
