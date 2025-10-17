const reviewsBtn = document.querySelector('.reviews-btn')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup-close')
const reviewSend = document.querySelector('.popup-reviews-btn__send')
const reviewText = document.querySelector('.reviews-text')

reviewsBtn.addEventListener('click', () => {
    popup.classList.add('popup__active')
})

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup__active')
})

reviewSend.addEventListener('click', () => {
    localStorage.setItem('reviewText',reviewText.value)
    reviewText.value = ''
    popup.classList.remove('popup__active')
    reviewsPublication()
})