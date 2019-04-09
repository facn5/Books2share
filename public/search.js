var inputField = document.getElementById("search-input");
function hey(value) {
  fetch("search?" + value)
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response.json().then(data => {
        console.log(url);
      });
    })
    .catch(err => {
      console.log("Fetch Error :-S", err);
    });
}

inputField.addEventListener("keyup", function(event) {
  event.preventDefault();

  if (event.keyCode === 13) {
    hey(document.getElementById("search-input").value);
  }
});
