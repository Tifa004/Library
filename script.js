const myLibrary=[];

function books(title, author, pages,isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id=crypto.randomUUID();
    // this.info = function() {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    // };
}
function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new books(title, author, pages, isRead);
    myLibrary.push(newBook);
}
function displayBooks() {
    const tbody=document.getElementById('tableBody')
    tbody.innerHTML="";
    myLibrary.forEach((book)=> { 
        const row = document.createElement("tr");
        row.dataset.id= book.id;
        row.innerHTML=`
        <td style="width:24ch">${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.isRead=="Read"?"✔️":"❌"}</td>
        <td><button class='remove'>Remove</button></td>
        `;
        tbody.appendChild(row);
    })
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Not Read");
addBookToLibrary("1984", "George Orwell", 328, "Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "Not Read");

const dialog=document.querySelector("dialog");
const addBook=document.querySelector(".add")
const close=document.querySelector(".close")
const add=document.querySelector(".adddone")

addBook.addEventListener('click',()=> {
    dialog.showModal();
})

add.addEventListener('click',() =>{
    event.preventDefault();
    const buttons=document.querySelectorAll('.row button')
    const name=document.getElementById('name');
    const author=document.getElementById('author');
    const pages=document.getElementById('pages');
    const read=document.getElementById('read');
    const inputs=[name,author,pages,read];
    if (name.value === '' || author.value === '' || pages.value === '' || read.value === ''){
        buttons.forEach(btn=>btn.remove());
        const warn='Please Fill in all of the Fields';
        const lastRow=document.querySelector('.last');
        const warndiv=document.createElement('span');
        warndiv.textContent=warn;
        warndiv.className='warn';
        lastRow.appendChild(warndiv);
        inputs.forEach(input=> {
            input.addEventListener('focus',() => {
                warndiv.remove()
                buttons.forEach(btn => lastRow.appendChild(btn));
            })
        })
        
    } else{
    addBookToLibrary(name.value,author.value,pages.value,read.value);
    displayBooks();
    dialog.close();
    }
})
close.addEventListener('click',()=>{
    dialog.close();
})

const tbody=document.getElementById('tableBody');


tbody.addEventListener('click',function(e) {
    if (e.target.classList.contains('remove')){
        const row=e.target.closest('tr');
        const bookId = row.dataset.id;
        const index = myLibrary.findIndex(book => book.id === bookId);
        if (index !== -1) {
            myLibrary.splice(index, 1);
        }
        row.remove();    
}
});


displayBooks();