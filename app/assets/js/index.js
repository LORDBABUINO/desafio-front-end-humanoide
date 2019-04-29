const gallerieItemList = Array.from(
	document.getElementsByClassName('gallerie__item')
)

gallerieItemList.map((item, index) => {

	item.addEventListener('mouseenter', () => {
		item.classList.toggle('gallerie__item--hover')
	})

	item.addEventListener('mouseleave', () => {
		item.classList.toggle('gallerie__item--hover')
	})

	item.querySelector('button').addEventListener('click', () => {
		window.scrollTo(0,0)
		document.querySelector('.banner').classList.add('banner--disabled')
		document.querySelector(`.details--${index}`).classList.add('details--enabled')
	})
})
