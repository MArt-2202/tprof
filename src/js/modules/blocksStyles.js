export default function blockStyles() {
	if (document.querySelector('.top-section')) {
		document.body.classList.add('index');
	} else {
		document.body.classList.add('inner');
	}
}
