import Details from './details.js'
class Gallery extends HTMLUListElement {
	constructor() {
		super()
		this.classList.add('gallery')
	}

	attributeChangedCallback(name, oldValue, productList){
		JSON.parse(productList).map((product) => {

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
				galleryPrice.innerHTML += ' por '
			})()

			galleryPrice.appendChild(galleryPriceOrange)

			galleryItem.appendChild(galleryImg)
			galleryItem.appendChild(galleryPrice)
			galleryItem.appendChild(galleryButton)
			this.appendChild(galleryItem)

			galleryItem.addEventListener('mouseenter', () => {
				window.innerWidth > 980 && (
					galleryItem.classList.add('gallery__item--hover')
				)
			})

			galleryItem.addEventListener('mouseleave', () => {
				window.innerWidth > 980 && (
					galleryItem.classList.remove('gallery__item--hover')
				)
			})

			galleryItem.querySelector('button').addEventListener('click', () => {
				const details = document.querySelector('.details')
				window.scrollTo(0,0)
				document.querySelector('.banner').classList.add('banner--disabled')
				details && (details.parentElement.removeChild(details))

				this.renderDetails(product)
			})
		})
	}

	static get observedAttributes() {
		return ['products']
	}

	renderDetails(product) {
		const body = document.querySelector('body')
		const persuation = document.querySelector('.persuation')
		const details = document.createElement('div', { is: 'details-carnastore' })
		details.setAttribute('product', JSON.stringify(product))
		body.insertBefore(details, persuation)
	}
}

customElements.define('gallery-carnastore', Gallery, { extends: 'ul' })
export default Gallery
