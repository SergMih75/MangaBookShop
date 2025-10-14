let catalogBlock = document.querySelector('.catalog-block')

fetch('manga.json')
	.then(response => response.json())
	.then(catalogData => {
		createCatalogCard(catalogData)
	})
	.catch(error => console.error('Ошибка при исполнении запроса: ', error))

function createCatalogCard(catalogData) {

	catalogData.forEach(item => {
		let catalogItem = document.createElement('div')
		catalogItem.classList.add('book-item')
		catalogItem.innerHTML = `
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
		catalogBlock.append(catalogItem)
	})
}
