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

const sizeRadioList = Array.from(
	document.getElementsByClassName('details__size-radio')
)

sizeRadioList.map((radio) => {
	radio.addEventListener('click', () => {
		const active = document.querySelector('.details__size-radio--active')
		active && active.classList.toggle('details__size-radio--active')
		radio.classList.toggle('details__size-radio--active')
	})
})
