document.addEventListener('DOMContentLoaded', () => {
    const rotate = document.querySelector('.fa-rotate');
    const formContainer = document.querySelector('.formContainer');
    const welcome = document.querySelector('.bigHeadliner');
    const me = document.querySelector('.textAboutMe');

    me.style.visibility = 'hidden';
    
    rotate.addEventListener('click', () => {
        if(formContainer.classList.contains('flip')) {
            formContainer.classList.remove('flip');
            formContainer.classList.add('reverseFlip');
            welcome.innerHTML = 'Schreib mir eine Mail und ich melde mich bei Dir!';
            me.style.visibility = 'hidden';  // Zeigen beim Zurückdrehen
        } else {
            formContainer.classList.remove('reverseFlip');
            formContainer.classList.add('flip');
            welcome.innerHTML = 'Hi, ich bin Yassin! 👋';
            me.innerHTML = `
                <p>Ich bin 20 Jahre alt, komme aus Köln und studiere Medieninformatik!</p>
                <ul>
                    <li class = "listObjects">3 Semester Tutor für Mathe 1 & 2</li>
                    <li class = "listObjects">Momentan im 5. Semester an der TH Köln</li>
                    <li class = "listObjects">Abi im Jahr 2022 mit Schwerpunkt Mathemathik</li>
                </ul>
            `;
            setTimeout(() => {
                me.style.visibility = 'visible';  // Zeigen beim Hindrehen
            }, 200)
        }
    });
});