'use strict';

import debounce from './modules/debounce';
import blocksStyles from './modules/blocksStyles';
import blockPosition from './modules/blockPosition';
import masketInput from './modules/masketInput';
import tooltip from './modules/tooltip';
import selectStyle from './modules/selectStyle';
import scrollToAnchor from './modules/scrollToAnchor';
import scrollAnimateNodes from './modules/scrollAnimateNodes';
import videoLazyLoad from './modules/videoLazyLoad';
import tableWrapper from './modules/tableWrapper';
import toggleContent from './modules/toggleContent';
import lightbox from './modules/lightbox';

if ('ontouchstart' in document.documentElement) {
	document.body.classList.add('touchdevice');
}

function isMobile(agent) {
	if (agent === void 0) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent);
}

if (isMobile()) {
	document.body.classList.remove('desktop-user-agent');
	document.body.classList.add('mobile-user-agent');
} else {
	document.body.classList.remove('mobile-user-agent');
	document.body.classList.add('desktop-user-agent');
}

document.addEventListener('DOMContentLoaded', () => {
	masketInput();
	selectStyle();
	tooltip({
		wrapper: 'data-tooltip',
		tag: 'span',
		tooltipButton: 'svg',
		addClass: 'visible',
		showEvent: 'mouseenter',
		hideEvent: 'mouseleave',
	});
	scrollToAnchor();
	scrollAnimateNodes({
		node: '.top-section h1 + ul li',
		animatedClass: 'slideInLeft',
	});
	videoLazyLoad();
	tableWrapper();
	toggleContent();

	if (document.querySelector('#add-new-profile')) {
		document.querySelector('#add-new-profile').addEventListener('click', () => {
			if (document.querySelector('.order-form__content.dn')) {
				document.querySelector('.order-form__content.dn').classList.remove('dn');

				tooltip({
					wrapper: 'data-tooltip',
					tag: 'span',
					tooltipButton: 'svg',
					addClass: 'visible',
					showEvent: 'mouseenter',
					hideEvent: 'mouseleave',
				});
			}
		});
	}
	lightbox({
		container: '#product-lightbox',
		selector: '.product-details-slider__item',
		plugins: [lgZoom],
		speed: 500,
		zoom: true,
		download: false,
		mode: 'lg-fade',
	});
	lightbox({
		container: '#certificates-lightbox',
		selector: '.certificates-slider__item',
		plugins: [lgZoom],
		speed: 500,
		zoom: true,
		download: false,
		mode: 'lg-fade',
	});
}); // END READY

window.addEventListener('resize', () => {
	debounce(function () {
		blocksStyles();
		blockPosition();
		tooltip({
			wrapper: 'data-tooltip',
			tag: 'span',
			tooltipButton: 'svg',
			addClass: 'visible',
			showEvent: 'mouseenter',
			hideEvent: 'mouseleave',
		});
	}, 200);
});

window.addEventListener('load', () => {
	debounce(function () {
		blocksStyles();
		blockPosition();
	}, 200);
});

window.addEventListener('scroll', (e) => {
	if (document.querySelector('.index header')) {
		if (scrollY > 10) {
			document.querySelector('.index header').classList.add('header-style');
		} else {
			document.querySelector('.index header').classList.remove('header-style');
		}
	}
});
