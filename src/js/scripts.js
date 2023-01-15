'use strict';

import debounce from './modules/debounce';
import sliders from './modules/sliders';
import blocksStyles from './modules/blocksStyles';
import blockPosition from './modules/blockPosition';
import masketInput from './modules/masketInput';
import tooltip from './modules/tooltip';
import selectStyle from './modules/selectStyle';
import tableWrapper from './modules/tableWrapper';
import toggleContent from './modules/toggleContent';

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
	sliders();
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
}); // END READY

window.addEventListener('resize', () => {
	debounce(function () {
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
