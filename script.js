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
  const buttons = document.querySelectorAll('.row button');
  const lastRow = document.querySelector('.last');

  const clearWarnings = () => {
    const warn = lastRow.querySelector('.warn');
    if (warn) warn.remove();
    buttons.forEach(btn => lastRow.appendChild(btn));
  };

  // Attach clearWarnings every time so warnings always get cleared
  inputs.forEach(input => {
    input.addEventListener('focus', clearWarnings);
  });

  // Validate empty fields
  if (name.value === '' || author.value === '' || pages.value === '' || read.value === '') {
    buttons.forEach(btn => btn.remove());
    const warnDiv = document.createElement('span');
    warnDiv.textContent = 'Please fill in all of the fields';
    warnDiv.className = 'warn';
    lastRow.appendChild(warnDiv);
    return;
  }

  // Validate pages
  const pageCount = Number(pages.value);
  if (!Number.isInteger(pageCount) || pageCount <= 0) {
    buttons.forEach(btn => btn.remove());
    const warnDiv = document.createElement('span');
    warnDiv.textContent = 'Please enter a valid positive whole number for pages.';
    warnDiv.className = 'warn';
    lastRow.appendChild(warnDiv);
    return;
  }

  // Add book
  addBookToLibrary(name.value, author.value, pageCount, read.value);
  displayBooks();
  dialog.close();
  inputs.forEach(input => input.value = '');
});

const tbody = document.getElementById('tableBody');

tbody.addEventListener('click', function (e) {
  const row = e.target.closest('tr');
  const bookId = row?.dataset?.id;
  if (!bookId) return;

  const index = myLibrary.findIndex(book => book.id === bookId);
  const book = myLibrary[index];
  if (!book) return;

  if (e.target.classList.contains('remove')) {
    myLibrary.splice(index, 1);
    row.remove();
  }

  if (e.target.classList.contains('toggle')) {
    book.toggleReadStatus();
    displayBooks();
  }
});

displayBooks();
