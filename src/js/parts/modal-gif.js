const modalGif=()=> {
    let fixedGift = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        popupClose = document.querySelectorAll('.popup-close');

    fixedGift.addEventListener('click', ()=> {
        popupGift.style.display = 'block';
    });
    for (let i = 0; i < popupClose.length; i++) {
        popupClose[i].addEventListener('click', ()=> {
            popupGift.style.display = 'none';
        });
    }
}

module.exports = modalGif;