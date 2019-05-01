(async function request () {
	const http = new XMLHttpRequest()

	http.onreadystatechange = () =>
		http.readyState == 4 && console.log(http.response)

	http.open('GET', '/server/data.json', true)
	http.send()
})()

const productList = [
	{
		price: 200.00,
		image: '../assets/images/fantasia-01.png',
		promotional_price: '100.00'
	},
	{
		price: 200.00,
		image: '../assets/images/fantasia-02.png',
		promotional_price: '100.00'
	},
	{
		price: 200.00,
		image: '../assets/images/fantasia-03.png',
		promotional_price: '100.00'
	},
]

productList.map((product) => {

	const gallerie = document.querySelector('.gallerie')
	const gallerieItem = document.createElement('li')
	const gallerieImg = document.createElement('img')
	const galleriePrice = document.createElement('p')
	const galleriePriceOrange = document.createElement('b')
	const gallerieButton = document.createElement('button')
	const strike = document.createElement('strike')

	gallerieItem.classList.add('gallerie__item')
	gallerieImg.classList.add('gallerie__img')
	galleriePrice.classList.add('gallerie__price')
	galleriePriceOrange.classList.add('gallerie__price--orange')
	gallerieButton.classList.add('button')
	gallerieButton.classList.add('gallerie__button')

	gallerieImg.setAttribute('src', product.image)

	gallerieButton.innerHTML = 'Mais detalhes'
	strike.innerHTML = product.price
	galleriePriceOrange.innerHTML = product.promotional_price

	galleriePrice.innerHTML += 'de '
	galleriePrice.appendChild(strike)
	galleriePrice.innerHTML += ' por '
	galleriePrice.appendChild(galleriePriceOrange)

	gallerieItem.appendChild(gallerieImg)
	gallerieItem.appendChild(galleriePrice)
	gallerieItem.appendChild(gallerieButton)
	gallerie.appendChild(gallerieItem)
})

//EVENTS

const bannerButton = document.querySelector('.banner__button')

bannerButton.addEventListener('click', () => {
		window.scrollTo(0, 800)
})

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

const detailsButton = document.querySelector('.details__button')

detailsButton.addEventListener('click', () => {
	document.querySelector('.notification').classList.toggle('notification--active')
})

const notificationButtonContinue = document.querySelector('.notification__button--continue')

notificationButtonContinue.addEventListener('click', () => {
	detailsButton.click()
})

const notification = document.querySelector('.notification')

notification.addEventListener('click', () => {
	detailsButton.click()
})

const notificationModal = document.querySelector('.notification__modal')

notificationModal.addEventListener('click', (event) => {
	event.stopPropagation()
})
