const calc=()=>{

    let size = document.getElementById('size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        totalValue = document.querySelector('.calc-price'),
        promocode = document.querySelector('.promocode'),
        text ="Для расчета нужно выбрать размер картины и материал картины";
        totalValue.innerHTML = text;

        function calcSum(selectedIndex) {
            return(value);
        }

        size.addEventListener('change', ()=> {
            if (material.options[material.selectedIndex].value == 0) {
                totalValue.innerHTML = text;
            } else {
                totalValue.innerHTML = +size.options.calcSum(selectedIndex) * +material.options[material.selectedIndex].value + +options.options[options.selectedIndex].value;
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