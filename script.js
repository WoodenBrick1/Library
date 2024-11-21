
const libraryMain = document.getElementById("library");

const form = document.getElementById("new-book")




const library = [];

let countID = 0; 


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
    countID = 0;
    libraryMain.innerHTML = "";
    for (let book of library)
    {
        
        book.id = countID;

        countID++;


        libraryMain.innerHTML += "";
        const {title, author, pages, read} = book;
        libraryMain.innerHTML += 
        `<div class="book" id=${book.id}>
        <div class="stripes">
            <div class="stripe"></div>
            <div class="stripe"></div>   
        </div>

        <div class="info">
            <div class="name"><p>Name:</p>${title}</div>
            <div class="author"><p>Author:</p>${author}</div>
            <div class="pages"><p>Pages:</p>${pages}</div>
            <div class="read"><p>Read?:</p><p class="readText">${read ? "Yes" : "No"}</p> <button class="btn change">Change</button></div>
        </div>

        <button class="delete btn">Delete Book</button>
    </div>`;

        
        
    }
    addNew();
    changeButtons();
    deleteButtons()
    console.log(library);
    
}


// Change the Reading state
function changeButtons()
{
    const buttons = Array.from(document.getElementsByClassName("change"));
    buttons.forEach((button, index) => button.addEventListener('click', () => 
    {
        for (let book of library)
        {
            if(book.id == index)
            {
                book.read = !(book.read);

                document.getElementById(index)
                .querySelector(".info")
                .lastElementChild.
                    querySelector(".readText").textContent = book.read ? "Yes" : "No";
            }
        }
    }
    ));
}

function deleteButtons()
{
    const buttons = Array.from(document.getElementsByClassName("delete"));
    buttons.forEach((button, index) => button.addEventListener('click', () => 
    {
        for (let book of library)
        {
            if(book.id == index)
            {

                document.getElementById(index).remove();
                library.splice(index, 1);
            }
        }
    }
    ));
}
// Add a new book
function addNew(){
    libraryMain.innerHTML += 
    
    `<div id="new" class="book">

    
            <div class="stripes">
                <div class="stripe"></div>
                <div class="stripe"></div>   
            </div>
            
            <button id="new-button" class="btn">New Button</button>
            <div class="info" id="new-book">
            
                <p>Name:<input type="text" id="name" required></p>
                <p>Author:<input type="text" id="author" required></p>
                <p>Pages:<input type="text" id="pages" required></p>
                <p>Read?:<input type="checkbox" id="read"></p>
    
                <button id="add-book" class="btn" >Add Book</button>
            </div>`;

    const addBtn = document.querySelector("#add-book");
    addBtn.addEventListener("click", () =>
    {
        
       
        
        const title = document.getElementById("name").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const read = document.querySelector("#read").checked;

        const book = new Book(title, author, pages, read);

        addBook(book);

        displayBooks();
        console.log(title);
    })

    const inputs = document.getElementById("new-book");

    inputs.style.display = "none";
    const newButton = document.getElementById("new-button");

    newButton.addEventListener("click", () =>
    {
        inputs.style.display = "flex";

        newButton.style.display = "none";
    })
}





document.addEventListener("DOMContentLoaded", () => displayBooks());
