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

function addBookToLibrary(book){
    library = library.push(book);
}

const addForm = '<fieldset>\n<div class="titleForBook">\n<label for="title">Title:</label>\n<input type="text" name="title" id="title" placeholder="Title">\n</div>\n<div class="authorForBook">\n<label for="author">Author:</label>\n<input type="text" name="author" id="author" placeholder="Author">\n</div>\n<div class="pagesForBook">\n<label for="pages">Pages:</label>\n<input type="text" name="pages" id="pages" placeholder="pages">\n</div>\n<div class="isReadForBook">\n<label for="isRead">Read?</label>\n<input type="radio" name="isRead" id="isRead" value="true">yes\n<input type="radio" name="isRead" id="isRead" value="false">no\n</div>\n<button type="submit" id="submitBookForm">Add Book</button>\n</fieldset>';

const addBookButton = document.querySelector('#addBook');
const addBookForm = document.querySelector('.addBookForm');
addBookButton.addEventListener('click',() => {
    addBookButton.toggleAttribute('disabled');
    addBookForm.innerHTML = addForm;
    const submitBookForm = addBookForm.querySelector('#submitBookForm');
        submitBookForm.addEventListener('click', () => {
        addBookButton.toggleAttribute('disabled');
        addBookForm.innerHTML="";
    });
})
