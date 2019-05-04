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
				galleryPrice.innerHTML += ' por '
			})()

			galleryPrice.appendChild(galleryPriceOrange)

			galleryItem.appendChild(galleryImg)
			galleryItem.appendChild(galleryPrice)
			galleryItem.appendChild(galleryButton)
			gallery.appendChild(galleryItem)

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

				renderDetails(product)
			})
		})
	}

	const renderDetails = (product) => {
		const body = document.querySelector('body')
		const banner = document.querySelector('.banner')
		const details = document.createElement('section')
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

		details.classList.add('details')
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
		details.appendChild(detailsImage)
		details.appendChild(detailsArticle)
		details.appendChild(detailsBuyChoice)
		body.insertBefore(details, banner)

		detailsButton.addEventListener('click', () => {
			document.querySelector('.notification').classList.toggle('notification--active')
		})

		details.addEventListener('resize', () => {
			details.offsetWidth == 980 &&
				document.querySelector('.gallery').classList.toggle('gallery--small')
		})

		details.offsetWidth <= 980 && (
				document.querySelector('.gallery').classList.add('gallery--small')
		)

		document.querySelector('.persuation__text').innerHTML = 'Outras fantasias que vc vai gostar'
	}


	const http = new XMLHttpRequest()

	http.onreadystatechange = () =>
		http.readyState == 4 && renderGallery(JSON.parse(http.response).products)

	http.open('GET', '/server/data.json', true)
	http.send()
})()
