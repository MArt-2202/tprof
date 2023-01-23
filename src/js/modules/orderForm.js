import selectStyle from './selectStyle';

export default function orderForm() {
	if (document.querySelector('#add-new-profile')) {
		document.querySelector('#add-new-profile').addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			if (document.querySelector('.order-form__main .list-7')) {
				const siblingEl = document.querySelector('.order-form__main .list-7');

				fetch('/api/func/to_cart', {
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

						selectStyle();
					})
					.catch((error) => {
						console.error(error);
					});
			}
		});
	}
}
