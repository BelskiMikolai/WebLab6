

let text = document.getElementById("text");
let input = document.getElementById("input");

input.addEventListener('input', function () {
	
   let inText = input.value.trim();
   text.textContent = inText;

});