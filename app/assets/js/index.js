const gallerieItemList = Array.from(
	document.getElementsByClassName('gallerie__item')
)

gallerieItemList.map((item) => {
	item.addEventListener('mouseenter', () => {
		item.classList.toggle('gallerie__item--hover')
	})
	item.addEventListener('mouseleave', () => {
		item.classList.toggle('gallerie__item--hover')
	})

	const button = item.querySelector('button')
	button.addEventListener('click', () => {
		window.scrollTo(0,0)
	})
})
