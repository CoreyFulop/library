"use strict";

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

Book.prototype.toggleRead = function () {
    switch (this.read) {
        case "Yes":
            this.read = "No";
            break;
        case "No":
            this.read = "Yes";
            break;
        default:
            break;
    }
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
        let readToggleButton = document.createElement("button");
        readToggleButton.textContent = "Toggle read";
        readToggleButton.classList.add("read-toggle-button");
        readToggleButton.setAttribute("data-card", `${myLibrary.indexOf(book)}`);
        readToggleButton.addEventListener("click", toggleReadState);
        bookCard.appendChild(readToggleButton);
    }
}

function toggleReadState(e) {
    let toggleTarget = e.target.getAttribute("data-card");
    myLibrary[toggleTarget].toggleRead();
    displayMyLibrary();
}

const newBookButton = document.getElementById("showNewBookDialog");
const newBookDialog = document.getElementById("newBookDialog");
const createBtn = newBookDialog.querySelector("#createBtn");
const cancelBtn = newBookDialog.querySelector("#createBtn");

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
    let titleField = document.getElementById("title");
    titleField.value = "";
    let authorField = document.getElementById("author");
    authorField.value = "";
    let pagesField = document.getElementById("pages");
    pagesField.value = "";
});

cancelBtn.addEventListener("click", () => {
    let titleField = document.getElementById("title");
    titleField.value = "";
    let authorField = document.getElementById("author");
    authorField.value = "";
    let pagesField = document.getElementById("pages");
    pagesField.value = "";
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 310, "No");
myLibrary.push(theHobbit);
displayMyLibrary();