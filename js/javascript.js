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

const bookCardContainer = document.querySelector(".card-container");

function addBookToLibrary() {
    let newTitle = prompt("Enter new book title:");
    let newAuthor = prompt("Enter the author:");
    let newPages = prompt("Enter the number of pages:");
    let newRead = prompt("Have you read this book:");
    let newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
}

