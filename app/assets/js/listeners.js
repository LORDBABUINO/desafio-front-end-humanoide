(function main () {
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
})()
