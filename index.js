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