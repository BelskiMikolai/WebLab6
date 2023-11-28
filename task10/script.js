
let but = document.getElementById("button");

but.addEventListener("click", () => {
   let sails = document.getElementById("sails");
   let container = document.getElementById("container");
   container.classList.add("container-move");
   sails.classList.add("sails");
   but.classList.add("button-move");
   but.textContent = "Поплыли!";

}, {once: true});