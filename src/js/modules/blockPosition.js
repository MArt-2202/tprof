// BLOCK POSITION
export default function blockPosition() {
	const bl1 = document.querySelector('.header__bl-2'),
		bl2 = document.querySelector('.header__bl-3'),
		bl3 = document.querySelector('.toggle__content div'),
		bl4 = document.querySelector('.header__contacts-wrapper'),
		bl5 = document.querySelector('.navigation'),
		bl6 = document.querySelector('.lang'),
		bl7 = document.querySelector('main'),
		bl8 = document.querySelector('.logo-mico'),
		bl9 = document.querySelector('.footer__logo-company'),
		bl10 = document.querySelector('.copyright');

	if (window.matchMedia('(min-width: 361px)').matches) {
		document.body.classList.remove('max-360');

		if (!document.body.classList.contains('min-361')) {
			document.body.classList.add('min-361');

			if (document.querySelector('.min-361')) {
			}
		}
	}

	if (window.matchMedia('(min-width: 577px)').matches) {
		document.body.classList.remove('max-360', 'max-576');

		if (!document.body.classList.contains('min-577')) {
			document.body.classList.add('min-577');

			if (document.querySelector('.min-577')) {
			}
		}
	}

	if (window.matchMedia('(min-width: 769px)').matches) {
		document.body.classList.remove('max-360', 'max-576', 'max-768');

		if (!document.body.classList.contains('min-769')) {
			document.body.classList.add('min-769');

			if (document.querySelector('.min-769')) {
			}
		}
	}

	if (window.matchMedia('(min-width: 1201px)').matches) {
		document.body.classList.remove('max-360', 'max-576', 'max-768', 'max-1200');

		if (!document.body.classList.contains('min-1201')) {
			document.body.classList.add('min-1201');

			if (document.querySelector('.min-1201')) {
				if (bl6 && bl7) {
					bl7.prepend(bl6);
				}
				if (bl1 && bl5) {
					bl1.prepend(bl5);
				}
				if (bl2 && bl4) {
					bl2.prepend(bl4);
				}
				if (bl9 && bl10) {
					bl9.after(bl10);
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 1200px)').matches) {
		document.body.classList.remove('min-1201');

		if (!document.body.classList.contains('max-1200')) {
			document.body.classList.add('max-1200');

			if (document.querySelector('.max-1200')) {
				if (document.querySelector('.max-1200')) {
					if (bl3 && bl6) {
						bl3.prepend(bl6);
					}
					if (bl3 && bl4) {
						bl3.append(bl4);
					}
					if (bl5 && bl6) {
						bl6.after(bl5);
					}
					if (!bl6) {
						if (bl3 && bl5) {
							bl3.prepend(bl5);
						}
					}
					if (bl8 && bl10) {
						bl8.after(bl10);
					}
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 768px)').matches) {
		document.body.classList.remove('min-1201', 'min-769');

		if (!document.body.classList.contains('max-768')) {
			document.body.classList.add('max-768');

			if (document.querySelector('.max-768')) {
			}
		}
	}

	if (window.matchMedia('(max-width: 576px)').matches) {
		document.body.classList.remove('min-1201', 'min-769', 'min-577', 'min-361');

		if (!document.body.classList.contains('max-576')) {
			document.body.classList.add('max-576');

			if (document.querySelector('.max-576')) {
			}
		}
	}

	if (window.matchMedia('(max-width: 360px)').matches) {
		document.body.classList.remove('min-1201', 'min-769', 'min-361');

		if (!document.body.classList.contains('max-360')) {
			document.body.classList.add('max-360');

			if (document.querySelector('.max-360')) {
			}
		}
	}
}
