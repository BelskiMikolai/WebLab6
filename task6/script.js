

container = document.getElementById("container");

container.addEventListener("click", function (event) {
   button = event.target.closest(".remove-button");
   if (!button || !container.contains(button)) {
      return;
   }
   let pane = event.target.closest(".pane");
   pane.remove();
});