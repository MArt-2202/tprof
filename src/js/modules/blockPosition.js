// BLOCK POSITION
export default function blockPosition() {
	const bl1 = document.querySelector('.header__bl-2'),
		bl2 = document.querySelector('.header__bl-3'),
		bl3 = document.querySelector('.toggle__content div'),
		bl4 = document.querySelector('.contacts-wrapper'),
		bl5 = document.querySelector('.navigation');

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

	if (window.matchMedia('(min-width: 1091px)').matches) {
		document.body.classList.remove('max-360', 'max-576', 'max-768', 'max-1090');

		if (!document.body.classList.contains('min-1091')) {
			document.body.classList.add('min-1091');

			if (document.querySelector('.min-1091')) {
				if (bl1 && bl5) {
					bl1.prepend(bl5);
				}
				if (bl2 && bl4) {
					bl2.prepend(bl4);
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 1090px)').matches) {
		document.body.classList.remove('min-1091');

		if (!document.body.classList.contains('max-1090')) {
			document.body.classList.add('max-1090');

			if (document.querySelector('.max-1090')) {
				if (document.querySelector('.max-1090')) {
					if (bl3 && bl4) {
						bl3.append(bl4);
					}
					if (bl3 && bl5) {
						bl3.prepend(bl5);
					}
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 768px)').matches) {
		document.body.classList.remove('min-1091', 'min-769');

		if (!document.body.classList.contains('max-768')) {
			document.body.classList.add('max-768');

			if (document.querySelector('.max-768')) {
			}
		}
	}

	if (window.matchMedia('(max-width: 576px)').matches) {
		document.body.classList.remove('min-1091', 'min-769', 'min-577', 'min-361');

		if (!document.body.classList.contains('max-576')) {
			document.body.classList.add('max-576');

			if (document.querySelector('.max-576')) {
			}
		}
	}

	if (window.matchMedia('(max-width: 360px)').matches) {
		document.body.classList.remove('min-1091', 'min-769', 'min-361');

		if (!document.body.classList.contains('max-360')) {
			document.body.classList.add('max-360');

			if (document.querySelector('.max-360')) {
			}
		}
	}
}
