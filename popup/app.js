const popupOpenButton = document.querySelector('.click-btn');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup-btn');

popupOpenButton.addEventListener('click', () => {
    popup.classList.toggle('show');

    popupCloseButton.addEventListener('click', () => {
        popup.classList.remove('show');
    });
});
