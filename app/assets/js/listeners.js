(function main () {
	const bannerButton = document.querySelector('.banner__button')

	bannerButton.addEventListener('click', () => {
			window.scrollTo(0, 800)
	})

	const galleryItemList = Array.from(
		document.getElementsByClassName('gallery__item')
	)

	galleryItemList.map((item, index) => {

		item.addEventListener('mouseenter', () => {
			item.classList.toggle('gallery__item--hover')
		})

		item.addEventListener('mouseleave', () => {
			item.classList.toggle('gallery__item--hover')
		})

		item.querySelector('button').addEventListener('click', () => {
			window.scrollTo(0,0)
			document.querySelector('.banner').classList.add('banner--disabled')
			document.querySelector('.details--1').classList.add('details--enabled')
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
})()
