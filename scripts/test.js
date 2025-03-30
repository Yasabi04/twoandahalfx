document.addEventListener('DOMContentLoaded', () => {
    const thankyouContainer = document.querySelector('.thankyouContainer');

    if (!thankyouContainer.classList.contains('bounce-in-left')) {
        setTimeout(() => {
            thankyouContainer.classList.add('bounce-in-left');
        }, 200);
    }
});