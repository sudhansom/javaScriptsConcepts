import Backpack from "./Backpack.js";
import Book from "./Book.js";

const myBag = new Backpack("everyday Bag", 30, "black", 10, 11, false);
console.log(myBag);

myBag.toggleLid = true;

myBag.changeStrap(1, 2);

console.log(myBag);

const book = new Book("title", 100, "krishna", "1990-01-01", "2000-01-01", 33);
console.log(book);
