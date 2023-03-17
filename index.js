let library = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
Book.prototype.info = function(){
    if(this.isRead == true){
        return `${this.title} by ${this.author}, has ${this.pages}, has been read`;
    }
    return `${this.title} by ${this.author}, has ${this.pages}, has not been read`;
}
let bookShelf = document.querySelector('.bookshelf');



// bookDiv.appendChild(titleDiv);
// bookDiv.appendChild(authorDiv);
// bookDiv.appendChild(pagesDiv);
// bookDiv.appendChild(isReadDiv);


document.querySelector('#submitBookForm').addEventListener('click',() => {
    // const newBook = new Book(document.querySelector('#title').value.toString(),
    // document.querySelector('#author').value.toString(),
    // Number.parseInt(document.querySelector('#pages').value),
    // document.querySelector('#isRead').value);
    // console.log(newBook);
    let bookDiv = document.createElement('div');
    let titleDiv = document.createAttribute('div');
    let authorDiv = document.createAttribute('div');
    let pagesDiv = document.createAttribute('div');
    let isReadDiv = document.createAttribute('div');

    bookDiv.classList.toggle('book');
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(isReadDiv);
    bookShelf.appendChild(bookDiv);

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
