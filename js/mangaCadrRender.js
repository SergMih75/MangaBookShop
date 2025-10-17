const controlManga = document.querySelector('.book-card')
const dataManga = document.querySelector('.data-manga')
const analogBlock = document.querySelector('.analog-block')

fetch('manga.json')
	.then(response => response.json())
	.then(catalogData => {
		createMangaCard(catalogData)
	})
	.catch(error => console.error('Ошибка при исполнении запроса: ', error))

function createMangaCard(catalogData) {
	catalogData.forEach(item => {
		let Search = localStorage.getItem('mangaBookData')
		if (item.name === Search) {
			createAnalogBlock(catalogData, item)
			let mangaPic = document.createElement('div')
			mangaPic.classList.add('control-manga')
			mangaPic.innerHTML = `

                <img  src="${item.pic}" alt="">
				<button class="control-manga-btn  read-btn">Читать</button>
                <button class="control-manga-btn  control-manga-btn__slim">В закладки</button>
                <button class="control-manga-btn  control-manga-btn__slim  control-manga-btn__dark">Пожаловаться</button>
            `
			controlManga.insertBefore(mangaPic, dataManga)

			const readBtn = document.querySelector('.read-btn')
			readBtnControl(readBtn)

			let mangaTitle = document.querySelector('.data-manga-title')
			mangaTitle.innerHTML = `${item.name}`

			let mangaDescription = document.querySelector('.description-text')
			mangaDescription.innerHTML = `${item.description}`

			let information = document.querySelector('.information')
			information.innerHTML = `
				<h4 class="information-title">О тайтле</h4>
                <p class="information-key">Жанры: <span class="information-meaning  information-meaning__mod1">${item.genre1}</span><span class="information-meaning  information-meaning__mod1">${item.genre2}</span><span class="information-meaning  information-meaning__mod1">${item.genre3}</span><span class="information-meaning  information-meaning__mod1">${item.genre4}</span></p>

                <p class="information-key">Категория: <span class="information-meaning  information-meaning__mod2">${item.type}</span></p>

                <p class="information-key">Год выпуска: <span class="information-meaning  information-meaning__mod2">${item.year}</span></p>

                <p class="information-key">Возрастная рекомендация: <span class="information-meaning  information-meaning__mod3">${item.age}</span></p>

                <p class="information-key">Издательство: <span class="information-meaning">${item.izd}</span></p>

                <p class="information-key">Журналы: <span class="information-meaning">${item.magazine}</span></p>

                <p class="information-key">Переводчики: <span class="information-meaning  information-meaning__mod2">${item.transcrip}</span></p>

                <p class="information-key">Рейтинг: <span class="information-meaning">${item.renting}</span></p>

                <p class="information-key">В продаже: <span class="information-meaning  information-meaning__mod2">${item.status}</span></p>
			`
		}
	})
}

function createAnalogBlock(catalogData, item) {
	catalogData.forEach(i => {
		if (
			(i.genre1 === item.genre1 && i.genre2 === item.genre2) ||
			(i.genre3 === item.genre3 && i.genre2 === item.genre2) ||
			(i.genre1 === item.genre1 && i.genre3 === item.genre3)
		) {
			let analogItem = document.createElement('div')
			analogItem.classList.add('analog-item')
			analogItem.innerHTML = `
			<img src="${i.pic}" alt="">
            <h4>${i.name}</h4>
			`
			analogBlock.append(analogItem)
		}
	})
	mangaCardData()
}