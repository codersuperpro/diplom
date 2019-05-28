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