var inputField = document.getElementById("search-input");

inputField.addEventListener("keyup", function(event) {
  event.preventDefault();

  if (event.keyCode === 13) {
    console.log("test");
  }
});
