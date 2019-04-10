// var booksList = document.getElementById("booksList");
function fillBookList(data) {

  console.log("inside dom" + data);
  let booksList = document.getElementById('booksList').innerHTML = "";

  var len = 0;
  while (len < 10 && len < data.length) {

    let newElement = document.createElement('div');

    newElement.innerText = Object.keys(data[len]);
    document.getElementById('container').appendChild(newElement);
    len++;
  }
}
