

function changeText() {
   let text = document.body.firstElementChild;
   text.innerHTML = "абзац <b>жирный</b>";
}

let but = document.getElementById("myButton");
but.addEventListener("click", changeText, {once: true});