document.addEventListener('DOMContentLoaded', () => {
    const rotate = document.querySelector('.fa-rotate');
    const formContainer = document.querySelector('.formContainer');
    const welcome = document.querySelector('.bigHeadliner');
    
    rotate.addEventListener('click', () => {
        if(formContainer.classList.contains('flip')) {
            formContainer.classList.remove('flip');
            formContainer.classList.add('reverseFlip');
            welcome.innerHTML = 'Schreib mir eine Mail und ich melde mich bei Dir!';
        } else {
            formContainer.classList.remove('reverseFlip');
            formContainer.classList.add('flip');
            welcome.innerHTML = 'Hi, ich bin Yassin! 👋';
        }
    });
});