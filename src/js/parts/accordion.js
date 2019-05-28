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