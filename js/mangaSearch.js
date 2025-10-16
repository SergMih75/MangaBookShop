function mangaCardData() {
	let mangaCollection = document.querySelectorAll('.book-item')

	mangaCollection.forEach(item => {
		item.addEventListener('click', () => {
			let mangaSearch = item.children[1].children[1].innerHTML

			localStorage.setItem('mangaBookData', mangaSearch)
			location.href = './mangaBookCard.html'
		})
	})

	let mangaAnalogCollection = document.querySelectorAll('.analog-item')

	mangaAnalogCollection.forEach(item => {
		item.addEventListener('click', () => {
			let mangaAnalogSearch = item.children[1].innerHTML

			localStorage.setItem('mangaBookData', mangaAnalogSearch)
			location.href = './mangaBookCard.html'
		})
	})
}
