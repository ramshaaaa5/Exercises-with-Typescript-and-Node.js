/*Question # 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects 
containing these items.*/

let book: { title: string;
author: string;
yearPublished: number } = {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    yearPublished: 2007
}
console.log(`Book info: ${book.title} by ${book.author}, published in ${book.yearPublished}`)