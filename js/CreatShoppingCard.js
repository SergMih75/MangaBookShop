function creatureCard(shopData) {
	let shoppingBlock = document.querySelector('.shopping-block')
	shopData.forEach(function (element) {
		let choppingCard = document.createElement('article')
		choppingCard.classList.add('shopping-item')
		choppingCard.innerHTML = `
            <img src="${element.pic}" alt="">
                <div class="card">
                    <h3 class="card-title">${element.name}</h3>
                    <h4 class="card-price">${element.price}p</h4>
                    <p class="card-description">${element.description}</p>
                </div>
                <button class="card-btn">Купить</button>
	`
		shoppingBlock.append(choppingCard)
	})
}

fetch('shop.json')
	.then(response => response.json())
	.then(shopData => {
		creatureCard(shopData)
	})
	.catch(error => console.error('Ошибка при исполнении запроса: ', error))