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

				if (document.querySelector('.desktop-user-agent')) {
					if (tooltip.offsetWidth < document.querySelector(`[${wrapper}]`).offsetLeft) {
						tooltip.classList.remove('position-left');
						tooltip.classList.add('position-right');
					}
					if (
						tooltip.offsetWidth + tooltip.offsetLeft >
						document.querySelector(`[${wrapper}]`).offsetWidth
					) {
						tooltip.classList.add('width-full');
					} else {
						tooltip.classList.remove('position-right');
						tooltip.classList.add('position-left');
					}
				}
				if (document.querySelector('.mobile-user-agent')) {
					tooltip.classList.remove('position-left', 'position-right');
				}

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
