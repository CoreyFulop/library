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

function addBookToLibrary() {
    let newTitle = prompt("Enter new book title:");
    let newAuthor = prompt("Enter the author:");
    let newPages = prompt("Enter the number of pages:");
    let newRead = prompt("Have you read this book:");
    let newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
}

const bookCardContainer = document.querySelector(".card-container");

function displayMyLibrary() {
    for (let book of myLibrary) {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCardContainer.appendChild(bookCard);
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

// Some test data
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 99, "No");
const aBook = new Book("A Title", "An Author", 99, "Yes");
const anotherBook = new Book("A SUPER REALLY LONG TITLE GOES HERE", "SOME STUPID AUTHORS NAME IS REALLY LONG", 99999, "Nope");
const myLibrary = [theHobbit, aBook, anotherBook];
displayMyLibrary();