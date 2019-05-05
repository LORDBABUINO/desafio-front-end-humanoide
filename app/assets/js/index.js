import Gallery from './gallery.js'

(async function main () {

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
