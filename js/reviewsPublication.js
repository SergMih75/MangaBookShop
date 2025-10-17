const reviews = document.querySelector('.reviews')

function reviewsPublication() {

	let reviewsItem = document.createElement('article')
	reviewsItem.classList.add('feedback-item')
	reviewsItem.classList.add('feedback-item__manga-card')
	reviewsItem.innerHTML = `
        <div class="photo">
            <img src="#" alt="" />
        </div>
            <div class="item-block">
                <h5 class="feedback-user-name">Имя пользователя</h5>
                <p class="feedback-text">${localStorage.getItem('reviewText')}</p>
                    <div class="feedback-info">
                        <img src="./img/main/look_icon.png" alt="" />
                        <p>27.4k</p>
                        <img src="./img/main/like_icon.png" alt="" />
                        <p>27.4k</p>
                        <img src="./img/main/feedback_icon.png" alt="" />
                        <p>318</p>
                    </div>
            </div>
    `
	reviews.appendChild(reviewsItem)
}
