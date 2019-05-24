const modalDesign=()=> {

    let buttonDesign = document.querySelectorAll('.button-design'),
        popupDesign = document.querySelector('.popup-design'),
        popupClose = document.querySelectorAll('.popup-close');

    buttonDesign.forEach(buttonDesign => buttonDesign.addEventListener('click', ()=> {
        popupDesign.style.display = 'block';
    }));
    popupClose.forEach(popupClose => popupClose.addEventListener('click', () => {
        popupDesign.style.display = 'none';
    }));
}

module.exports = modalDesign;