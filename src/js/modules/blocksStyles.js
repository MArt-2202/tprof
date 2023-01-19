export default function blockStyles() {
	if (document.querySelector('.top-section')) {
		document.body.classList.add('index');
	} else {
		document.body.classList.add('inner');
	}

	if (document.querySelector('.order-form .list-6')) {
		document.querySelector('.order-form .list-6').addEventListener('input', function (e) {
			const target = e.target;

			if (target.tagName === 'INPUT' && target.classList.contains('order-form__number')) {
				target.value = e.target.value.replace(/\D/g, '');
			}
		});
	}

	if (document.querySelector('header .container') && document.querySelector('.lang')) {
		const logo = document.querySelector('header .container'),
			lang = document.querySelector('.lang');

		if (window.matchMedia('(min-width: 1201px)').matches) {
			if (document.querySelector('.inner')) {
				lang.style.left = `${logo.offsetLeft - lang.offsetWidth - 25}px`;
				lang.style.top = '455px';
				lang.classList.add('lang-style-1');
				lang.style.opacity = 1;
			}
			if (
				document.querySelector('.index') &&
				document.querySelector('.top-section .scroll-to-anchor')
			) {
				const btn = document.querySelector('.top-section .scroll-to-anchor');

				lang.style.left = `${logo.offsetLeft - lang.offsetWidth}px`;
				lang.style.top = `${btn.offsetTop}px`;
				lang.classList.remove('lang-style-1');
				lang.style.opacity = 1;
			}
		}
		if (window.matchMedia('(max-width: 1200px)').matches) {
			if (document.querySelector('.inner')) {
				lang.style.left = '';
				lang.style.top = '';
				lang.classList.remove('lang-style-1');
				lang.style.opacity = '';
			}
			if (
				document.querySelector('.index') &&
				document.querySelector('.top-section .scroll-to-anchor')
			) {
				lang.style.left = '';
				lang.style.top = '';
				lang.classList.remove('lang-style-1');
				lang.style.opacity = '';
			}
		}
	}

	if (
		document.querySelector('.navigation') &&
		document.querySelector('.breadcrumbs') &&
		document.querySelector('.breadcrumbs + h1')
	) {
		const nav = document.querySelector('.navigation'),
			breadcrumbs = document.querySelector('.breadcrumbs'),
			title = document.querySelector('.breadcrumbs + h1');

		if (window.matchMedia('(min-width: 1201px)').matches) {
			breadcrumbs.style.marginLeft = `${nav.offsetLeft}px`;
			breadcrumbs.style.opacity = 1;
			title.style.marginLeft = `${nav.offsetLeft}px`;
			title.style.opacity = 1;
		}
		if (window.matchMedia('(max-width: 1200px)').matches) {
			breadcrumbs.style.marginLeft = '';
			breadcrumbs.style.opacity = '';
			title.style.marginLeft = '';
			title.style.opacity = '';
		}
	}
}
