export default function selectStyle() {
	if (document.querySelector('.style-select-wrapper')) {
		document.querySelectorAll('.style-select-wrapper').forEach((el) => {
			if (el.querySelector('select') && el.querySelector('input[type="hidden"]')) {
				const select = el.querySelector('select'),
					input = el.querySelector('input[type="hidden"]');

				new Choices(select, {
					allowHTML: true,
					itemSelectText: '',
					searchEnabled: false,
					shouldSort: false,
					callbackOnInit() {
						el.classList.add('style-select-init');
						input.value = select.querySelectorAll('option')[0].textContent;
					},
				});
				select.addEventListener(
					'choice',
					function (e) {
						input.value = e.detail.choice.label;
					},
					false
				);
			}
		});
	}
}
