(async function main () {

	const renderGallery = (productList) => {

		productList.map((product) => {

			const gallery = document.querySelector('.gallery')
			const galleryItem = document.createElement('li')
			const galleryImg = document.createElement('img')
			const galleryPrice = document.createElement('p')
			const galleryPriceOrange = document.createElement('b')
			const galleryButton = document.createElement('button')

			galleryItem.classList.add('gallery__item')
			galleryImg.classList.add('gallery__img')
			galleryPrice.classList.add('gallery__price')
			galleryPriceOrange.classList.add('gallery__price--orange')
			galleryButton.classList.add('button')
			galleryButton.classList.add('gallery__button')

			galleryImg.setAttribute('src', product.image)

			galleryButton.innerHTML = 'Mais detalhes'
			galleryPriceOrange.innerHTML = 'R$' + (
				product.promotional_price
					? product.promotional_price
					: product.price
			)

			product.price && product.promotional_price && (() => {
				const strike = document.createElement('strike')
				strike.innerHTML = 'R$' + product.price
				galleryPrice.innerHTML += 'de '
				galleryPrice.appendChild(strike)
				galleryPrice.innerHTML += ' '
			})()

			galleryPrice.innerHTML += 'por '
			galleryPrice.appendChild(galleryPriceOrange)

			galleryItem.appendChild(galleryImg)
			galleryItem.appendChild(galleryPrice)
			galleryItem.appendChild(galleryButton)
			gallery.appendChild(galleryItem)

			galleryItem.addEventListener('mouseenter', () => {
				galleryItem.classList.toggle('gallery__item--hover')
			})

			galleryItem.addEventListener('mouseleave', () => {
				galleryItem.classList.toggle('gallery__item--hover')
			})

			galleryItem.querySelector('button').addEventListener('click', () => {
				window.scrollTo(0,0)
				document.querySelector('.banner').classList.add('banner--disabled')
				document.querySelector('.details--1').classList.add('details--enabled')
			})
		})
	}

	const http = new XMLHttpRequest()

	http.onreadystatechange = () =>
		http.readyState == 4 && renderGallery(JSON.parse(http.response).products)

	http.open('GET', '/server/data.json', true)
	http.send()
})()
