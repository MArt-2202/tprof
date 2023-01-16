export default function scrollToAnchor() {
	if (document.querySelector('.scroll-to-anchor')) {
		document.addEventListener('click', function (e) {
			const link = e.target.closest('.scroll-to-anchor');

			if (link) {
				e.preventDefault();
				scrollToTarget(link.hash);
			}
		});

		if (location.hash !== '') {
			scrollToTarget(location.hash);
		}

		function scrollToTarget(id) {
			if (document.querySelector(id) !== null) {
				const target = document.querySelector(id),
					targetStyles = window.getComputedStyle(target);

				if (target !== null) {
					let pos = target.offsetTop;

					if (
						parseInt(targetStyles.paddingTop) === 0 &&
						target.classList.contains('style-1')
					) {
						pos = target.offsetTop - 94;

						window.scrollTo({
							top: pos,
							behavior: 'smooth',
						});
					} else {
						window.scrollTo({
							top: pos,
							behavior: 'smooth',
						});
					}
				}
			}
		}
	}
}
