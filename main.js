window.addEventListener('load', () => {
    const social = document.querySelector('.footer');
    const button = document.getElementById('social')
    social.style.display = 'none';
    button.addEventListener('onclick', () => {
        social.style.dispay = 'list';
    })
});