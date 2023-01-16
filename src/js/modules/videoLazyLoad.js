export default function videoLazyLoad() {
	if (document.querySelector('.video-wrapper')) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.dataset.youtube) {
						entry.target.insertAdjacentHTML(
							'beforeend',
							`
								<iframe src="${entry.target.dataset.youtube}" title="YouTube video player"
								allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
							`
						);
						observer.unobserve(entry.target);
					}
					if (
						entry.isIntersecting &&
						entry.target.dataset.video &&
						entry.target.dataset.poster
					) {
						entry.target.insertAdjacentHTML(
							'beforeend',
							`
								<video muted playsinline poster="${entry.target.dataset.poster}">
									<source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src="${entry.target.dataset.video}">
								</video>
							`
						);
						observer.unobserve(entry.target);
					}
					if (
						(entry.isIntersecting &&
							entry.target.dataset.video &&
							!entry.target.dataset.poster) ||
						entry.target.dataset.poster === ''
					) {
						entry.target.insertAdjacentHTML(
							'beforeend',
							`
								<video muted playsinline>
									<source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src="${entry.target.dataset.video}">
								</video>
							`
						);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '50px',
			}
		);
		document.querySelectorAll('.video-wrapper').forEach((item) => observer.observe(item));
	}
}
