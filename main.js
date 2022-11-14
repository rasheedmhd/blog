window.addEventListener('load', () => {
    const social = document.querySelector('.footer');
    const button = document.querySelector('#social')
    social.style.display = 'none';
    button.addEventListener('click', () => {
        social.style.dispay = true;
    })
})