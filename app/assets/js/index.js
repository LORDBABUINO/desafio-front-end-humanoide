import Gallery from './gallery.js'

(async function main () {

	const bannerButton = document.querySelector('.banner__button')

	bannerButton.addEventListener('click', () => {
			window.scrollTo(0, 800)
	})

	const notificationButtonContinue = document.querySelector('.notification__button--continue')

	notificationButtonContinue.addEventListener('click', () => {
		document.querySelector('.notification').classList.toggle('notification--active')
	})

	const notification = document.querySelector('.notification')

	notification.addEventListener('click', () => {
		document.querySelector('.notification').classList.toggle('notification--active')
	})

	const notificationModal = document.querySelector('.notification__modal')

	notificationModal.addEventListener('click', (event) => {
		event.stopPropagation()
	})

	const http = new XMLHttpRequest()

	http.onreadystatechange = () =>
		http.readyState == 4 && (() => {
			const body = document.querySelector('body')
			const productList = JSON.stringify(JSON.parse(http.response).products)
			const gallery = document.createElement('ul', { is: 'gallery-carnastore' })
			const contact = document.querySelector('.contact')
			gallery.setAttribute('products', productList)
			body.insertBefore(gallery, contact)
		})()

	http.open('GET', '/server/data.json', true)
	http.send()
})()
