

function changeText() {
   let text = document.body.firstElementChild;
   text.innerHTML = "абзац <b>жирный</b>";
}

let but = document.getElementById("button");
but.addEventListener("click", changeText, {once: true});