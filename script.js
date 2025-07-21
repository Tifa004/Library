const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead === "Read"; 
        this.id = crypto.randomUUID();
    }
    toggleReadStatus(){
        this.isRead = !this.isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function displayBooks() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = "";
  myLibrary.forEach((book) => {
    const row = document.createElement("tr");
    row.dataset.id = book.id;
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.isRead ? "✔️" : "❌"}</td>
      <td>
        <button class='remove'>Remove</button>
        <button class='toggle'>Toggle&nbsp;Read</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Sample books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Not Read");
addBookToLibrary("1984", "George Orwell", 328, "Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "Not Read");

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add");
const closeBtn = document.querySelector(".close");
const addBtn = document.querySelector(".adddone");

addBookBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});

addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');
  const inputs = [name, author, pages, read];

  // Clear custom messages before validating
  inputs.forEach(input => input.setCustomValidity(""));

  // Validate each input using HTML5 constraint validation
  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity(); // Show built-in browser tooltip
      return; // Stop if any input is invalid
    }
  }

  const pageCount = Number(pages.value);

  addBookToLibrary(name.value, author.value, pageCount, read.value);
  displayBooks();
  dialog.close();

  // Clear input values after submission
  inputs.forEach(input => input.value = '');
});

displayBooks();
