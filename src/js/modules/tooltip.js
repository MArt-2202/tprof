export default function tooltip({ wrapper, tag, tooltipButton, addClass, showEvent, hideEvent }) {
	if (document.querySelector(`[${wrapper}]`)) {
		document.querySelectorAll(`[${wrapper}]`).forEach((el) => {
			if (el.hasAttribute(`${wrapper}`) && !el.querySelector(`${tag}`)) {
				const tooltipText = el.getAttribute(`${wrapper}`);

				el.insertAdjacentHTML('afterbegin', `<${tag}>${tooltipText}</${tag}>`);
			}
			if (el.querySelector(`${tag}`) && el.querySelector(`${tooltipButton}`)) {
				const tooltip = el.querySelector(`${tag}`),
					btn = el.querySelector(`${tooltipButton}`);

				tooltip.style.marginTop = `-${tooltip.offsetHeight}px`;

				btn.addEventListener(showEvent, () => {
					tooltip.classList.add(`${addClass}`);
				});
				btn.addEventListener(hideEvent, () => {
					tooltip.classList.remove(`${addClass}`);
				});
			}
		});
	}
}
