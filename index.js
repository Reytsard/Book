let library = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
Book.prototype.info = function(){
    if(this.isRead == "true"){
        return `<div class="title">Title: ${this.title}</div>\n<div class="author">Author: ${this.author}</div>\n<div class="pages">Pages: ${this.pages} pages</div>\n<div class="isRead">Has been read</div>\n`;
    }
    return `<div id="title">Title: ${this.title}</div>\n<div id="author">Author: ${this.author}</div>\n<div id="pages">Pages: ${this.pages} pages</div>\n<div id="isRead">Has not been read</div>\n`;
}
function addToLibrary(book){
    library.push(book);
}
let bookShelf = document.querySelector('.bookshelf');



// bookDiv.appendChild(titleDiv);
// bookDiv.appendChild(authorDiv);
// bookDiv.appendChild(pagesDiv);
// bookDiv.appendChild(isReadDiv);


document.querySelector('#submitBookForm').addEventListener('click',() => {
    //gets the values from the input box;
    let title = document.querySelector('#title').value.toString();
    let author = document.querySelector('#author').value.toString();
    let pages = Number.parseInt(document.querySelector('#pages').value);
    let isRead = document.querySelector('#isRead').value;
    //creates a new Object
    let newBook = new Book(title,author,pages,isRead);
    addToLibrary(newBook);
    

    console.log(library);

    //adds a card for the book
    let bookDiv = document.createElement('div');
    bookShelf.appendChild(bookDiv);
    bookDiv.classList.toggle('book');
    bookDiv.innerHTML = newBook.info();


})
















// addBookButton.addEventListener('click',() => {
//     addBookButton.toggleAttribute('disabled');
//     const submitBookForm = addBookForm.querySelector('#submitBookForm');
//         submitBookForm.addEventListener('click', () => {
//         addBookButton.toggleAttribute('disabled');
//         const inputs = addBookForm.querySelectorAll('input');
//         addBookForm.innerHTML="";
//     });
// })
