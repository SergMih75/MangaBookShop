// Формирование общего списка жанров

const table = document.querySelector('.table')
let genres = document.createElement('div')
genres.classList.add('genres-block')
genres.innerHTML = `
<div class="genres-item">
                    <img src="./img/genres/romantic.png" alt="">
                    <a href="#" class="genres-btn">Романтика</a>
                </div>

                <div class="genres-item">
                    <img src="./img/genres/ection.png" alt="">
                    <a href="#" class="genres-btn">Экшен</a>
                </div>

                <div class="genres-item">
                    <img src="./img/genres/schcool.png" alt="">
                    <a href="#" class="genres-btn">Школа</a>
                </div>

                <div class="genres-item">
                    <img src="./img/genres/vampirs.png" alt="">
                    <a href="#" class="genres-btn">Вампиры</a>
                </div>

                <div class="genres-item">
                    <img src="./img/genres/detectiv.png" alt="">
                    <a href="#" class="genres-btn">Детектив</a>
                </div>

                <div class="genres-item">
                    <img src="./img/genres/drams.png" alt="">
                    <a href="#" class="genres-btn">Драма</a>
                </div>

                <div class="genres-item">
                    <img src="./img/genres/art.png" alt="">
                    <a href="#" class="genres-btn">Арт</a>
                </div>

                <div class="genres-item">
                    <img src="./img/genres/dodzinsi.png" alt="">
                    <a href="#" class="genres-btn">Додзинси</a>
                </div>

                <div class="genres-item">
                    <img src="./img/genres/fantasi.png" alt="">
                    <a href="#" class="genres-btn">Фэнтези</a>
                </div>
`
table.appendChild(genres)

// Выбор определённого жанра

const genreBtn = document.querySelectorAll('.genres-btn')
const genresTitle = document.querySelector('.genres-title')

genreBtn.forEach(item => {
	item.addEventListener('click', () => {
		genresTitle.innerHTML = item.innerHTML

		fetch('genre.json')
			.then(response => response.json())
			.then(genreData => {
				creatureGenreCard(genreData)
			})
			.catch(error => console.error('Ошибка при исполнении запроса: ', error))
	})
})

function creatureGenreCard(genreData) {
	genreData.forEach(item => {
		if (item.genre == genresTitle.innerHTML) {
			genres.remove()

			let genre = document.createElement('p')
			genre.classList.add('genre-description')
			genre.innerHTML = `${item.description}`
			table.appendChild(genre)
			let genreCollection = document.createElement('div')
			genreCollection.classList.add('genre-collection')
			table.appendChild(genreCollection)
		}
	})
	getBookData()
}

function getBookData() {
	fetch('manga.json')
		.then(response => response.json())
		.then(mangaData => {
			creatureMangaCard(mangaData)
		})
		.catch(error => console.error('Ошибка при исполнении запроса: ', error))
}

function creatureMangaCard(mangaData) {
	let genreCollection = document.createElement('div')
	genreCollection.classList.add('genre-collection')
	table.appendChild(genreCollection)

	mangaData.forEach(item => {
		if (
			item.genre1 == genresTitle.innerHTML ||
			item.genre2 == genresTitle.innerHTML ||
			item.genre3 == genresTitle.innerHTML ||
			item.genre4 == genresTitle.innerHTML
		) {
			console.log(item)
			let genreItem = document.createElement('div')
			genreItem.classList.add('book-item')
			genreItem.innerHTML = `
            <img class="manga-pic" src="${item.pic}" alt="">
                        <div class="book-data">
                            <p class="manga-type">${item.type}</p>
                            <h3 class="manga-name">${item.name}</h3>
                            <div class="book-subdata">
                                <p class="manga-genre">${item.genre1}</p>
                                <p class="manga-genre">${item.genre2}</p>
                                <p class="manga-genre">${item.genre3}</p>
                                <p class="manga-genre">${item.genre4}</p>
                                <p class="manga-renting">${item.renting}</p>
                                <p class="manga-look">${item.look}</p>
                            </div>
                        </div>
            `
			genreCollection.appendChild(genreItem)
		}
	})
}
