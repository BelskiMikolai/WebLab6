

function changePr() {
   let pr = document.querySelectorAll(".pr");
   let num = 0;
   for (let text of pr) {
      text.textContent = num;
      num++;
   }
}

let but = document.getElementById("butt");
but.addEventListener("click", changePr, {once: true});