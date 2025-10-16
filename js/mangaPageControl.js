const pageControl = document.querySelectorAll('.control-item')
const pageItem = document.querySelectorAll('.page-item')

pageControl.forEach(item => {
	item.addEventListener('click', () => {
		pageControl.forEach(i => {
			i.classList.remove('control-item__active')
		})
		item.classList.add('control-item__active')
		pageItem.forEach(i => {
			i.classList.remove('page-item__active')
			if (item.getAttribute('attr') === i.getAttribute('attr')) {
				i.classList.add('page-item__active')
			}
		})
	})
})

function readBtnControl(readBtn) {
	readBtn.addEventListener('click', () => {
		console.log('cvv')
		pageControl.forEach(item => {
			item.classList.remove('control-item__active')
		})

		pageControl.forEach(item => {
			if (item.getAttribute('attr') === 'chapters') {
				item.classList.add('control-item__active')
				pageItem.forEach(i => {
					i.classList.remove('page-item__active')
					if (item.getAttribute('attr') === i.getAttribute('attr')) {
						i.classList.add('page-item__active')
					}
				})
			}
		})
	})
}
