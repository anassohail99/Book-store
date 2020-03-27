//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor (Think related to Ui )
function UI() {
  // thing will be added using prototype
}
// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  //creating element
  const row = document.createElement("tr");
  //insert column
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class = "delete">X</a></td>
  `;
  list.appendChild(row);
};

UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};
// Event listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  //getting form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //instanciating book
  const book = new Book(title, author, isbn);

  // instanciating UI
  const ui = new UI();

  // clear fields

  ui.clearFields();

  ui.addBookToList(book);
  e.preventDefault();
});
