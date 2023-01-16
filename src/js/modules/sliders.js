import Swiper, { Navigation } from 'swiper';
export default function sliders() {
	if (
		document.querySelector('.certificates-slider') &&
		document.querySelector('.certificates-slider .swiper-wrapper').children.length &&
		document.querySelector('.certificates-slider__btn--prev') &&
		document.querySelector('.certificates-slider__btn--next')
	) {
		new Swiper('.certificates-slider', {
			modules: [Navigation],
			on: {
				init() {
					if (document.querySelector('.certificates-wrapper')) {
						document.querySelector('.certificates-wrapper').classList.remove('style-2');
					}
				},
			},
			loop: true,
			slidesPerView: 3,
			spaceBetween: 24,
			forceToAxis: true,
			navigation: {
				prevEl: '.certificates-slider__btn--prev',
				nextEl: '.certificates-slider__btn--next',
			},
			breakpoints: {
				1230: { slidesPerView: 3, spaceBetween: 24 },
				1024: { slidesPerView: 3, spaceBetween: 24 },
				768: { slidesPerView: 3, spaceBetween: 24 },
				576: { slidesPerView: 2, spaceBetween: 20 },
				300: { slidesPerView: 1, spaceBetween: 15 },
			},
		});
	}

	if (
		document.querySelector('.product-details-slider') &&
		document.querySelector('.product-details-slider .swiper-wrapper').children.length
	) {
		new Swiper('.product-details-slider', {
			modules: [Navigation],
			on: {
				init() {
					if (document.querySelector('.product-details-slider-wrapper')) {
						document
							.querySelector('.product-details-slider-wrapper')
							.classList.remove('style-2');
					}
				},
			},
			loop: true,
			navigation: {
				prevEl: '.product-details-slider__btn--prev',
				nextEl: '.product-details-slider__btn--next',
			},
		});
	}
}
