const popupOpenButton = document.querySelector('.click-btn');
const popup = document.querySelector('.popup');
const okey = document.querySelector('.popup-btn');

popupOpenButton.addEventListener('click', () => {
    popup.classList.toggle('show');

    okey.addEventListener('click', () => {
        popup.classList.remove('show');
    });
});
