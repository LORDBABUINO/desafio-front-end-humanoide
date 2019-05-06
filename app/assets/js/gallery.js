import GalleryItem from './gallery-item.js'

class Gallery extends HTMLUListElement {
	constructor() {
		super()
		this.classList.add('gallery')
	}

	attributeChangedCallback(name, oldValue, productList){
		JSON.parse(productList).map((product) => {
			this.appendChild(this._createGalleryItem(product))
		})
	}

	static get observedAttributes() {
		return ['products']
	}

	_createGalleryItem(product) {
		const item = document.createElement('li', { is: 'gallery-item' })
		item.setAttribute('product', JSON.stringify(product))
		return item
	}
}

customElements.define('gallery-carnastore', Gallery, { extends: 'ul' })
export default Gallery
