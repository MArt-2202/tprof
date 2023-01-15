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
}
