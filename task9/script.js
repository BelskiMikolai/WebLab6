
let images = document.querySelectorAll(".ufo, .asteroid, .spaceship");
let button = document.getElementById("button");

function rotate() {
    let first = images[0].src;
    for (let i = 0; i < images.length; i++) {
        let src;

        if (i == images.length - 1) {
            src = first;
        } else {
            src = images[i + 1].src;
        }
        images[i].src = src;
    }
}

button.addEventListener("click", function() {setInterval(rotate, 1100)}, {once: true});



