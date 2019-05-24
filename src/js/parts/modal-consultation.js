const modalConsultation=()=> {
    let buttonConsultation = document.querySelectorAll('.button-consultation'),
        popupClose = document.querySelectorAll('.popup-close'),
        popupConsultation = document.querySelector('.popup-consultation');

        buttonConsultation.forEach(buttonConsultation => buttonConsultation.addEventListener('click', ()=> {
            popupConsultation.style.display = 'block';
        }));
        popupClose.forEach(popupClose => popupClose.addEventListener('click', ()=> {
            popupConsultation.style.display = 'none';
        }));
}

module.exports = modalConsultation;