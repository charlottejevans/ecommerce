

let addQuantityBtn, quantityDisplay;
let quantityNumber = 0;

    function onInit() {
        addQuantityBtn = document.getElementById('addQuantity');
        quantityDisplay = document.getElementById('quantityNumber');

        addQuantityBtn.onclick = () => {
            quantityNumber += 1;
            quantityDisplay.innerHTML = quantityNumber;
        };
    }

    window.onload = onInit;