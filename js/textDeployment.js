let feedbackText = document.querySelectorAll('.feedback-text')

feedbackText.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('feedback-text__all')
	})
})

let mangaCardDescriptionText = document.querySelector('.description-text')

mangaCardDescriptionText.addEventListener('click', () => {
	mangaCardDescriptionText.classList.toggle('description-text__all')
})
