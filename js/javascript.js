"use strict";

// const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function deleteBook(e) {
    let deleteTarget = e.target.getAttribute("data-card");
    myLibrary.splice(deleteTarget, 1);
    displayMyLibrary();
}

const bookCardContainer = document.querySelector(".card-container");

function displayMyLibrary() {
    bookCardContainer.textContent = "";
    for (let book of myLibrary) {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCardContainer.appendChild(bookCard);
        let closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.setAttribute("data-card", `${myLibrary.indexOf(book)}`);
        closeButton.textContent = "Delete";
        closeButton.addEventListener("click", deleteBook);
        bookCard.appendChild(closeButton);
        let titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");
        titleContainer.textContent = book.title;
        bookCard.appendChild(titleContainer);
        let authorContainer = document.createElement("div");
        authorContainer.classList.add("author-container");
        authorContainer.textContent = book.author;
        bookCard.appendChild(authorContainer);
        let pagesLabelContainer = document.createElement("div");
        pagesLabelContainer.classList.add("pages-label-container");
        pagesLabelContainer.textContent = "Pages:";
        bookCard.appendChild(pagesLabelContainer);
        let pagesContainer = document.createElement("div");
        pagesContainer.classList.add("pages-container");
        pagesContainer.textContent = book.pages;
        bookCard.appendChild(pagesContainer);
        let readLabelContainer = document.createElement("div");
        readLabelContainer.classList.add("read-label-container");
        readLabelContainer.textContent = "Read:";
        bookCard.appendChild(readLabelContainer);
        let readContainer = document.createElement("div");
        readContainer.classList.add("read-container");
        readContainer.textContent = book.read;
        bookCard.appendChild(readContainer);
    }
}

const newBookButton = document.getElementById("showNewBookDialog");
const newBookDialog = document.getElementById("newBookDialog");
const createBtn = newBookDialog.querySelector("#createBtn");

// "NEW BOOK" button opens the <dialog> modally
newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
});

// Prevent the "Create" button from the default behaviour of submitting the form
createBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Do not submit form
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newPages = document.getElementById("pages").value;
    let newRead = document.querySelector("input[name='read']:checked").value;
    let newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
    displayMyLibrary();
    newBookDialog.close();
});

// Some test data
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 99, "No");
const aBook = new Book("A Title", "An Author", 99, "Yes");
const anotherBook = new Book("A SUPER REALLY LONG TITLE GOES HERE AAAAAAAAAAAAAAAAAAAAAAAAA", "SOME STUPID AUTHORS NAME IS REALLY LONG", 99999, "Nope");
const myLibrary = [theHobbit, aBook, anotherBook];
displayMyLibrary();