import selectStyle from './selectStyle';
import tooltip from './tooltip';

export default function orderForm() {
	if (document.querySelector('.order-form')) {
		const orderForm = document.querySelector('.order-form'),
			sendData = {},
			formData = new FormData();

		if (document.querySelector('#order-form__submit')) {
			const orderFormSubmit = document.querySelector('#order-form__submit');

			orderFormSubmit.addEventListener('click', function () {
				if (orderForm.querySelector('[required]')) {
					orderForm.classList.add('has-required');
				}
			});
		}

		orderForm.addEventListener('click', function (e) {
			const target = e.target;

			if (
				target.closest('.order-form__delete-item') &&
				target.closest('.order-form__delete-item').closest('.order-form__content')
			) {
				const url = '/api/func/delete_tovar',
					id = target.closest('.order-form__delete-item').getAttribute('data-id');

				sendData.id = id;
				formData.append('json', JSON.stringify(sendData));

				fetch(url, {
					method: 'POST',
					body: formData,
				})
					// .then((response) => {
					// 	return response.json();
					// })
					.then(() => {
						target
							.closest('.order-form__delete-item')
							.closest('.order-form__content')
							.remove();
					})
					.catch((error) => {
						console.error(error);
					});
			}
		});

		if (document.querySelector('#add-new-profile')) {
			document.querySelector('#add-new-profile').addEventListener('click', function (e) {
				e.preventDefault();
				e.stopPropagation();

				if (document.querySelector('.order-form__main .list-7')) {
					const siblingEl = document.querySelector('.order-form__main .list-7'),
						url = '/api/func/to_cart';

					fetch(url, {
						method: 'POST',
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
						},
					})
						.then((response) => {
							return response.json();
						})
						.then((data) => {
							siblingEl.insertAdjacentHTML(
								'beforebegin',
								`
							<div>${data.html}</div>
						`
							);
							tooltip({
								wrapper: 'data-tooltip',
								tag: 'span',
								tooltipButton: 'svg',
								addClass: 'visible',
								showEvent: 'mouseenter',
								hideEvent: 'mouseleave',
							});
							selectStyle();
						})
						.catch((error) => {
							console.error(error);
						});
				}
			});
		}
	}
}
