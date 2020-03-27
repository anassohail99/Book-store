class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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
  }
  showAlert(message, className) {
    //create div
    const div = document.createElement("div");
    //Add class
    div.className = `alert ${className}`;
    //add textnode
    div.appendChild(document.createTextNode(message));
    //get parent div
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    //insert alert
    container.insertBefore(div, form);
    //time out 3sec
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Event listeners for add books
document.getElementById("book-form").addEventListener("submit", function(e) {
  //getting form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //instanciating book
  const book = new Book(title, author, isbn);

  // instanciating UI
  const ui = new UI();

  //validate
  if (title === "" || author === "" || isbn === "") {
    // error alert
    ui.showAlert("Please fill in all fields", "alert-danger");
  } else {
    // Add books to list
    ui.addBookToList(book);
    //success alert
    ui.showAlert("Book added Successfully", "alert-success");
    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// event listener for delete
document.getElementById("book-list").addEventListener("click", function(e) {
  //instantiating Ui

  ui = new UI();
  ui.deleteBook(e.target);

  // showAlert

  ui.showAlert("Book Removed successfully", "alert-success");
  e.preventDefault();
});
