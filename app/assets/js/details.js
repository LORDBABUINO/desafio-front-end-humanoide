class Details extends HTMLDivElement {
	constructor () {
		super()
		this.classList.add('details')
	}

	attributeChangedCallback(name, oldValue, stringProduct){

		const product = JSON.parse(stringProduct)
		const body = document.querySelector('body')
		const banner = document.querySelector('.banner')
		const detailsImage = document.createElement('img')
		const detailsArticle = document.createElement('div')
		const detailsBuyChoice = document.createElement('div')
		const detailsTitle = document.createElement('h2')
		const detailsDescription = document.createElement('p')
		const detailsPrice = document.createElement('p')
		const detailsPriceBold = document.createElement('b')
		const detailsSizeLabel = document.createElement('label')
		const detailsButton = document.createElement('button')
		const strike = document.createElement('strike')

		detailsImage.setAttribute('src', product.image)

		detailsImage.classList.add('details__image')
		detailsArticle.classList.add('details__article')
		detailsBuyChoice.classList.add('details__buy-choice')
		detailsTitle.classList.add('details__title')
		detailsDescription.classList.add('details__description')
		detailsPrice.classList.add('details__price')
		detailsPriceBold.classList.add('details__price--bold')
		detailsSizeLabel.classList.add('details__size-label')
		detailsButton.classList.add('button')
		detailsButton.classList.add('details__button')

		detailsTitle.innerHTML = product.title
		detailsDescription.innerHTML = product.description
		detailsSizeLabel.innerHTML = 'Esolha o tamanho'
		detailsButton.innerHTML = 'Adicionar ao carrinho'

		detailsPriceBold.innerHTML = 'R$ ' + parseFloat(
			product.promotional_price
				? product.promotional_price
				: product.price
		).toFixed(2).replace('.', ',')

		product.price && product.promotional_price && (() => {
			const strike = document.createElement('strike')
			strike.innerHTML = 'R$' + product.price
			detailsPrice.innerHTML += 'de '
			detailsPrice.appendChild(strike)
			detailsPrice.innerHTML += ' por '
		})()

		detailsPrice.appendChild(detailsPriceBold)

		detailsArticle.appendChild(detailsTitle)
		detailsArticle.appendChild(detailsDescription)
		detailsArticle.appendChild(detailsPrice)
		detailsBuyChoice.appendChild(detailsSizeLabel)

		product.sizes.map((size) => {
			const detailsSizeRadio = document.createElement('button')
			detailsSizeRadio.classList.add('button')
			detailsSizeRadio.classList.add('details__size-radio')
			detailsSizeRadio.innerHTML = size
			detailsSizeRadio.addEventListener('click', () => {
				const active = document.querySelector('.details__size-radio--active')
				active && active.classList.toggle('details__size-radio--active')
				detailsSizeRadio.classList.toggle('details__size-radio--active')
			})
			detailsBuyChoice.appendChild(detailsSizeRadio)
		})

		detailsBuyChoice.appendChild(detailsButton)
		this.appendChild(detailsImage)
		this.appendChild(detailsArticle)
		this.appendChild(detailsBuyChoice)

		detailsButton.addEventListener('click', () => {
			document.querySelector('.notification').classList.toggle('notification--active')
		})

		this.addEventListener('resize', () => {
			this.offsetWidth == 980 &&
				document.querySelector('.gallery').classList.toggle('gallery--small')
		})

		this.offsetWidth <= 980 && (
				document.querySelector('.gallery').classList.add('gallery--small')
		)

		document.querySelector('.persuation__text').innerHTML = 'Outras fantasias que vc vai gostar'
	}

	static get observedAttributes() {
		return ['product']
	}
}

customElements.define('details-carnastore', Details, { extends: 'div' })
export default Details
