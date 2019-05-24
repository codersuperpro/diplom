const calc=()=>{

    let size = document.getElementById('size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        totalValue = document.querySelector('.calc-price'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
        let text ="Для расчета нужно выбрать размер картины и материал картины";

        size.addEventListener('change', function() {
            if (material.value == "Выберите материал картины") {
                totalValue.innerHTML = text;
            } else {
                totalValue.innerHTML = this.options[this.selectedIndex].value * this.options[this.selectedIndex].value;
            }
        });
        material.addEventListener('change', function() {
            if (size.value == "Выберите размер картины") {
                totalValue.innerHTML = text;
            } else {
                totalValue.innerHTML = this.options[this.selectedIndex].value * this.options[this.selectedIndex].value;
            }
        });

};

module.exports = calc;