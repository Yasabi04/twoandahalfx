document.addEventListener('DOMContentLoaded', () => {
    const rotate = document.querySelector('.fa-rotate');
    const flip = document.querySelector('.flip-card .flip-card-inner');
    const toSpin = document.querySelector('.fa-rotate');
    const submitButton = document.querySelector('.submitButton');
    
    rotate.addEventListener('click', () => {
        flip.classList.toggle('flip-rotate');
        toSpin.classList.toggle('active');
    });

    submitButton.addEventListener('click', () => {
        const userInputTopic = document.querySelector('.topics').value;
        const userInputName = document.querySelector('.name').value;
        const userInputMail = document.querySelector('.email').value;
        if(
            userInputTopic !== '' &&
            userInputName !== '' &&
            userInputMail !== ''
        ){
            submitButton.innerHTML = `
                <div class="loader"></div>
            `;
        }
    });
});