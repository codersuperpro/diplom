/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const accordion=()=>{
    let acc = document.getElementById('accordion'),
    accordionHeading = document.querySelectorAll('.accordion-heading'),
    accordionHeadingSpan = document.querySelectorAll('.accordion-heading-span'),
    accordionBlock = document.querySelectorAll('.accordion-block');

    const hideAcc=(a)=> {
        for (let i = a; i < accordionBlock.length; i++) {
            accordionBlock[i].classList.remove('show');
            accordionBlock[i].classList.add('hide');
        }
    }
    hideAcc(0);
    const showAcc=(b)=> {
        if (accordionBlock[b].classList.contains('hide')) {
            accordionBlock[b].classList.remove('hide'); 
            accordionBlock[b].classList.add('show');
        }
    }
    acc.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('accordion-heading-span')) {
            for(let i = 0; i < accordionHeadingSpan.length; i++) {
                 if (target == accordionHeadingSpan[i]) {
                    accordionHeadingSpan[i].style.color = "#d24dca";
                    hideAcc(0);
                    showAcc(i);
                    break;
                }
            }
        }
    }); 

}

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const calc=()=>{

    let size = document.getElementById('size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        totalValue = document.querySelector('.calc-price'),
        promocode = document.querySelector('.promocode'),
        text ="Для расчета нужно выбрать размер картины и материал картины";
        totalValue.innerHTML = text;

        size.addEventListener('change', ()=> {
            if (material.options[material.selectedIndex].value == 0) {
                totalValue.innerHTML = text;
            } else {
                totalValue.innerHTML = +size.options[size.selectedIndex].value * +material.options[material.selectedIndex].value + +options.options[options.selectedIndex].value;
            }
        });
        material.addEventListener('change', ()=> {
            if (size.options[size.selectedIndex].value == 0) {
                totalValue.innerHTML = text;
            } else {
                totalValue.innerHTML = +size.options[size.selectedIndex].value * +material.options[material.selectedIndex].value + +options.options[options.selectedIndex].value;
            }
        });
        options.addEventListener('change', ()=> {
            if (size.options[size.selectedIndex].value == 0 || material.options[material.selectedIndex].value == 0) {
                totalValue.innerHTML = text;
            } else {
                totalValue.innerHTML = +size.options[size.selectedIndex].value * +material.options[material.selectedIndex].value + +options.options[options.selectedIndex].value;
            }
        });
        $('#price').click(function() {
            if (size.options[size.selectedIndex].value == 0 ||  material.options[material.selectedIndex].value == 0) {
                totalValue.innerHTML = text;
            }});
        promocode.addEventListener('change', ()=> {
            if (promocode.value == 'IWANTPOPART') {
                totalValue.innerHTML = (+size.options[size.selectedIndex].value * +material.options[material.selectedIndex].value + +options.options[options.selectedIndex].value)/100*70;
            } else {
                totalValue.innerHTML = +size.options[size.selectedIndex].value * +material.options[material.selectedIndex].value + +options.options[options.selectedIndex].value;
            }
        });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/filtr.js":
/*!*******************************!*\
  !*** ./src/js/parts/filtr.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const filtr=()=>{
    let menu = document.querySelector('.portfolio-menu'),
        portfolioWrapper = document.querySelector('.portfolio-wrapper');

    menu.addEventListener('click', function() {
        console.log(this.value);
        let alls = portfolioWrapper.getElementsByClassName('all');
        for (let i=0; i<alls.length; i++) {
            if (alls[i].classList.contains(this.value)) {
                alls[i].style.display = 'block';
            } else {
                alls[i].style.display = 'none';
            }
        }
    }); 
}

module.exports = filtr;

/***/ }),

/***/ "./src/js/parts/form-modal.js":
/*!************************************!*\
  !*** ./src/js/parts/form-modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const formModal=()=>{
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    // let form = document.querySelectorAll('.form'),
    //     input = document.getElementsByTagName('input'),
        
    //     statusMessage = document.createElement('div');
    //     statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);
                let obj = {};
                formData.forEach((value,key)=> {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                function postData() {
                    return new Promise((resolve, reject)=> {
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve()
                            } else if(request.readyState === 4) {
                                if (request.status == 200 && request.status < 3){
                                    resolve()
                                }
                                else {
                                    reject()
                                }
                            }
                        };
                        request.send(json);        
                    });
                }
                const clearInput=()=> {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                postData(formData)
                    .then(()=> statusMessage.innerHTML = message.loading)
                    .then(()=> statusMessage.innerHTML = message.success)
                    .catch(()=> statusMessage.innerHTML = message.failure)
                    .then(clearInput)
    });
    }
    // sendForm(form);

    $('.phone_form').keydown(function(){
        $(this).val($(this).val().replace(/[^\d]|'+'/g, '').slice(0, 11));
    }).mask("+7 (999) 999-99-99");

}


module.exports = formModal;

/***/ }),

/***/ "./src/js/parts/main-form.js":
/*!***********************************!*\
  !*** ./src/js/parts/main-form.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const mainForm=()=>{

};

module.exports = mainForm;

/***/ }),

/***/ "./src/js/parts/modal-consultation.js":
/*!********************************************!*\
  !*** ./src/js/parts/modal-consultation.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/modal-design.js":
/*!**************************************!*\
  !*** ./src/js/parts/modal-design.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/modal-gif.js":
/*!***********************************!*\
  !*** ./src/js/parts/modal-gif.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const slider=()=> {
    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');

    showSlides(slideIndex);
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }                                
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
    } 
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    prev.addEventListener('click', ()=> {
        plusSlides(-1);
    });
    next.addEventListener('click', ()=> {
        plusSlides(1);
    });

}
module.exports = slider;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let modalConsultation = __webpack_require__(/*! ./parts/modal-consultation.js */ "./src/js/parts/modal-consultation.js"),
        modalDesign = __webpack_require__(/*! ./parts/modal-design.js */ "./src/js/parts/modal-design.js"),
        modalGif = __webpack_require__(/*! ./parts/modal-gif.js */ "./src/js/parts/modal-gif.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
        formModal = __webpack_require__(/*! ./parts/form-modal.js */ "./src/js/parts/form-modal.js"),
        calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        filtr = __webpack_require__(/*! ./parts/filtr.js */ "./src/js/parts/filtr.js"),
        accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
        mainForm = __webpack_require__(/*! ./parts/main-form.js */ "./src/js/parts/main-form.js");


    modalConsultation();
    modalDesign();
    modalGif();
    slider();
    formModal();
    calc();
    filtr();
    accordion();
    mainForm();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map