
let form = document.body.firstElementChild;

function setSum() {
   let num1 = +form.elements['num1'].value;
   let num2 = +form.elements['num2'].value;
   let sum = document.getElementById('sum');

   sum.textContent = "= " + (num1 + num2);
}

let button = form.elements['button'];
button.addEventListener('click', setSum);