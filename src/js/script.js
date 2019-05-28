window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let modalConsultation = require('./parts/modal-consultation.js'),
        modalDesign = require('./parts/modal-design.js'),
        modalGif = require('./parts/modal-gif.js'),
        slider = require('./parts/slider.js'),
        formModal = require('./parts/form-modal.js'),
        calc = require('./parts/calc.js'),
        filtr = require('./parts/filtr.js'),
        accordion = require('./parts/accordion.js');


    modalConsultation();
    modalDesign();
    modalGif();
    slider();
    formModal();
    calc();
    filtr();
    accordion();

});