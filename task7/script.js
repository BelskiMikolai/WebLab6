
thumbs = document.getElementById("thumbs");
current = document.getElementById("largeImg");

thumbs.onclick = function(event) {
    img = event.target.closest("a");
    if (!img) {
        return;
    }
    current.src = img.href;
    return false;
};