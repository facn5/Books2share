// var inputField = document.getElementById("search-input");
function hey(value) {
  fetch("search?" + value)
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
    .then((myJson) => {
      // console.log(JSON.stringify(myJson));
      fillBookList(myJson);
    }).catch(err => {
      console.log("Fetch Error :-S", err);
    });
}

function fillBookList(data) {
  let booksList = document.getElementById('booksList').innerHTML = "";

  for (let i in data) {
    console.log("inside dom :" + data[i].book_title);
    console.log("inside dom :" + data[i].amount);
    let newBook = document.createElement('div');
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
    document.getElementById('booksList').appendChild(newBook);

  }
}
// inputField.addEventListener("keyup", function(event) {
//   event.preventDefault();
//
//   if (event.keyCode === 13) {
//     hey(document.getElementById("search-input").value);
//   }
// });
