
let progress = document.getElementById("progress");
let lable = document.getElementById("label");
let increase = document.getElementById("increase");

increase.onclick = function() {
   let value = progress.value + 5;
   progress.value = value;
   lable.textContent = value + "%";

   if (value >= 100) {
      lable.textContent += " max";
      increase.remove();
   }   


};