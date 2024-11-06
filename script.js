const library = [];



function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.read = read;
    this.pages = pages;
}

function addBook(book)
{
    library.push(book)
}

const book1 = new Book("harry potter", "J.K Rowling", "Yes", 130);


addBook(book1);


console.log(library);
