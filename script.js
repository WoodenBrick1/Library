
const libraryMain = document.getElementById("library");

const library = [];



function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBook(book)
{
    library.push(book)
}

const book1 = new Book("Harry Potter", "J.K Rowling", 130, true);
const book2 = new Book("1984", "George Orweel", 203, true);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false)
const book4 = new Book("To Kill a Mockingbird", "Harper Lee", 285, false)


addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);

function displayBooks()
{

    for (let book of library)
    {
        const {title, author, pages, read} = book;
        console.log(book);
        libraryMain.innerHTML += 
        `<div class="book">
        <div class="stripes">
            <div class="stripe"></div>
            <div class="stripe"></div>   
        </div>

        <div class="info">
            <div class="name"><p>Name:</p>${title}</div>
            <div class="author"><p>Author:</p>${author}</div>
            <div class="pages"><p>Pages:</p>${pages}</div>
            <div class="read"><p>Read?:</p>${read ? "Yes" : "No"}</div>
        </div>
    </div>`;
    }
    
}

displayBooks();