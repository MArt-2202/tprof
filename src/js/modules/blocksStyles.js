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

	if (document.querySelector('.logo-company') && document.querySelector('.lang')) {
		const logo = document.querySelector('.logo-company'),
			lang = document.querySelector('.lang');

		if (document.querySelector('.inner')) {
			lang.style.left = `${logo.offsetLeft - lang.offsetWidth - 25}px`;
			lang.style.top = '455px';
			lang.classList.add('lang-style-1');
		}
		if (
			document.querySelector('.index') &&
			document.querySelector('.top-section .scroll-to-anchor')
		) {
			const btn = document.querySelector('.top-section .scroll-to-anchor');

			lang.style.left = `${logo.offsetLeft - lang.offsetWidth}px`;
			lang.style.top = `${btn.offsetTop}px`;
			lang.classList.remove('lang-style-1');
		}
		lang.style.opacity = 1;
	}
}
