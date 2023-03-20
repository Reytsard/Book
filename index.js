let library = [];

function Book(title, author, pages, isRead, indexNum){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.indexNum = indexNum;
}
Book.prototype.info = function(){
    if(this.isRead == "true"){
        return `<div class="title">Title: ${this.title} </div>\n<div class="author">Author: ${this.author}</div>\n<div class="pages">Pages: ${this.pages} pages</div>\n<div class="isRead"><button class="readButton" type="button" value="1">Has been Read</button></div>\n<button class="deleteButton" type="button" value='${this.indexNum}'>Delete</button>\n`;
    }
    return `<div class="title">Title: ${this.title} </div>\n<div class="author">Author: ${this.author}</div>\n<div class="pages">Pages: ${this.pages} pages</div>\n<div class="isRead"><button class="readButton" type="button" value="1">Has Not been Read</button></div>\n<button class="deleteButton" type="button" value='${this.indexNum}'>Delete</button>\n`;
}
function addToLibrary(book){
    library.push(book);
}
function removeFromLibrary(book){
    let indexOfBook = library.indexOf(book);
    if(indexOfBook == 0){
        library.shift();
    }else if(indexOfBook == library.length - 1){
        library.pop();
    }else{
        //remove the index and get left side and right side
        let leftSide = library.slice(0,indexOfBook);
        let rightSide = library.slice(indexOfBook + 1, library.length);
        library = [];
        leftSide.forEach(digit => library.push(digit));
        rightSide.forEach(digit => library.push(digit));
    }
    
}
function createAddBookForm(){
    //bookform is added to DOM
    let addFormDiv = document.querySelector('.add-Book-Form');
    addFormDiv.innerHTML = addBookForm;

    document.querySelector('#submitBookForm').addEventListener('click',() => {
        //gets the values from the input box;
        let title = document.querySelector('#title').value.toString();
        let author = document.querySelector('#author').value.toString();
        let pages = Number.parseInt(document.querySelector('#pages').value);
        let isRead = document.querySelector('#isRead').value;
    
        //creates a new Object
        let newBook = new Book(title,author,pages,isRead,bookNumber);
        addToLibrary(newBook);
        
    
        //adds a card for the book
        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('id',`bookNum${bookNumber}`);
        bookNumber++;
        bookShelf.appendChild(bookDiv);
        bookDiv.classList.toggle('book');
        //!!add datavalue to the card so we can get it and delete the whole card
        bookDiv.innerHTML = newBook.info();
        let readButton = bookDiv.querySelector(".readButton");
        readButton.addEventListener('click',() => {
            if(readButton.value == '1'){
                readButton.innerHTML = "Has not been Read";
                readButton.setAttribute('value','0'); 
            }else{
                readButton.innerHTML = 'Has been Read';
                readButton.setAttribute('value','1');
            }
        });
        addFormDiv.innerHTML = '';

        let delButton = bookDiv.querySelector('.deleteButton');
        delButton.addEventListener("click", () => {
            const delButtonValue = Number.parseInt(delButton.value);
            const bookDivToBeRemoved = libraryDiv.querySelector(`#bookNum${delButtonValue}`);   
            removeFromLibrary(newBook);
            bookShelf.removeChild(bookDivToBeRemoved);
        }); 
    });
}

//main
const libraryDiv = document.querySelector('.library');
const bookShelf = document.querySelector('.bookshelf');
const addBookForm = '<fieldset>\n<div class="titleForBook">\n<label for="title">Title:</label>\n<input type="text" name="title" id="title" placeholder="Title">\n</div>\n<div class="authorForBook">\n<label for="author">Author:</label>\n<input type="text" name="author" id="author" placeholder="Author">\n</div>\n<div class="pagesForBook">\n<label for="pages">Pages:</label>\n<input type="number" name="pages" id="pages" placeholder="pages">\n</div>\n<div class="isReadForBook">\n<label for="isRead">Read?</label>\n<select name="isRead" id="isRead">\n<option value="true" selected>yes</option>\n<option value="false">no</option>\n</select>\n<button type="submit" id="submitBookForm">Add Book</button></fieldset>\n';
let bookNumber = 0;
document.querySelector('#addBook').addEventListener('click', createAddBookForm);

// can set the id of book to nmumber so when del is pressed we just have to do document.querySelector('#bookDivID') to the value of the delButton; 