function mangaCardData() {
	let mangaCollection = document.querySelectorAll('.book-item')

	mangaCollection.forEach(item => {
		item.addEventListener('click', () => {
			let mangaSearch = item.children[1].children[1].innerHTML

			fetch('manga.json')
				.then(response => response.json())
				.then(catalogData => {
					createMangaCard(catalogData, mangaSearch)
				})
				.catch(error => console.error('Ошибка при исполнении запроса: ', error))
		})
	})
}

function createMangaCard(catalogData, mangaSearch) {
	catalogData.forEach(item => {
		if (item.name === mangaSearch) {
			console.log(mangaSearch)
			console.log(item)

			let catalogToManga = document.getElementById('render')
			if (catalogToManga != null) {
				catalogToManga.remove()
			}

			let genresToManga = document.querySelector('.genres-title')
			if (genresToManga != null) {
				document.querySelector('.genres-title').remove()
				document.querySelector('.genres-block').remove()
				document.querySelector('.genre-description').remove()
				document.querySelector('.genre-collection').remove()
				document.querySelector('.genre-collection').remove()
			}
		}
	})
}
