// var inputField = document.getElementById("search-input");
var x = document.getElementById("subsub");
// x.addEventListener
function hey(path, value) {
  fetch(path + value)
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      console.log(response);
      return response.json();
    })

    .then(myJson => {
      fillBookList(myJson);
    })
    .catch(err => {
      console.log("Fetch Error :-S", err);
    });
}
function fillBookList(data) {
  let booksList = (document.getElementById("data").innerHTML = "");

  for (let i in data) {
    console.log("inside dom :" + data[i].book_title);
    console.log("inside dom :" + data[i].amount);
    let newBook = document.createElement("div");
    newBook.id = "test";
    let title = document.createElement("h2");
    title.innerText = data[i].book_title;
    let amount = document.createElement("h3");
    amount.innerText = data[i].amount;
    let btnReserve = document.createElement("input");
    btnReserve.type = "button";
    btnReserve.value = "Reserve";
    btnReserve.onclick = "reserve()";
    let btnReturn = document.createElement("input");
    btnReturn.type = "button";
    btnReturn.value = "Return";
    btnReturn.onclick = "reserve()";

    newBook.appendChild(title);
    newBook.appendChild(amount);
    newBook.appendChild(btnReserve);
    newBook.appendChild(btnReturn);
    document.getElementById("booksList").appendChild(newBook);
  }
}
// inputField.addEventListener("keyup", function(event) {
//   event.preventDefault();
//
//   if (event.keyCode === 13) {
//     hey(document.getElementById("search-input").value);
//   }
// });
// $(".open-popup-link").magnificPopup({
//   type: "inline",
//   midClick: true,
//   mainClass: "mfp-fade"
// });

var outButton = document.querySelector(".click"),
  pop = document.getElementById("click_button");
var main = document.getElementById("window");
var shadow = document.querySelector("body");
var hide = document.getElementById("close");

function simulator_FB() {
  "use strict";
  main.style.display = "block";
}

function simulator_FB_close() {
  "use strict";
  main.style.display = "none";
}
