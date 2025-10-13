let feedbackText = document.querySelectorAll('.feedback-text')

feedbackText.forEach(item =>{
    item.addEventListener('click',()=>{
        console.log(item);
        item.classList.toggle('feedback-text__all');
    })
})