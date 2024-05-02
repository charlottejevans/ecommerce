

let addQuantityBtn, quantityDisplay, minusQuantityBtn;
let quantityNumber = 0;

    function onInit() {
        addQuantityBtn = document.getElementById('addQuantityBtn');
        quantityDisplay = document.getElementById('quantityNumber');
        minusQuantityBtn = document.getElementById('minusQuantityBtn');

        addQuantityBtn.onclick = () => {
            quantityNumber += 1;
            quantityDisplay.innerHTML = quantityNumber;
        };

        minusQuantityBtn.onclick = () => {
            quantityNumber -= 1;
            quantityDisplay.innerHTML = quantityNumber;

            if (quantityNumber < 0) {
                quantityNumber = 0;
                quantityDisplay.innerHTML = quantityNumber;
            }
        }
    }

    window.onload = onInit;