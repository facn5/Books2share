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
      fillBookList(myJson);
    }).catch(err => {
      console.log("Fetch Error :-S", err);
    });
}

function remove(title) {
  console.log(title);
  hey("remove?" + title);
}

function fillBookList(data) {
  let booksList = document.getElementById('data').innerHTML = "";

  for (let i in data) {
    console.log("inside dom :" + data[i].book_title);
    console.log("inside dom :" + data[i].amount);
    let newBook = document.createElement('div');
    newBook.id = "book";
    let title = document.createElement("h2");
    title.id = "bookNum" + i;
    title.innerText = data[i].book_title;
    let year = document.createElement("h2");
    year.innerText = data[i].publish_year;
    let amount = document.createElement("h3");
    amount.innerText = data[i].amount;

    let btns = document.createElement("div");
    btns.id = "btns";
    let btnReserve = document.createElement("input");
    btnReserve.type = "button";
    btnReserve.value = "Reserve";
    btnReserve.onclick = `reserve(bookNum${i})`;
    let btnReturn = document.createElement("input");
    btnReturn.type = "button";
    btnReturn.value = "Return";
    btnReturn.onclick = `return(bookNum${i})`;
    let btnRemove = document.createElement("input");
    btnRemove.type = "button";
    btnRemove.value = "Remove";
    btnRemove.setAttribute("onClick", "remove(bookNum"+i+".innerText)");
    newBook.appendChild(title);
    newBook.appendChild(amount);
    newBook.appendChild(year);

    btns.appendChild(btnReserve);
    btns.appendChild(btnReturn);
    btns.appendChild(btnRemove);

    newBook.appendChild(btns);
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
