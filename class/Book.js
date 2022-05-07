class Book {
  constructor(title, pages, firstName, dob, publish, soldOut) {
    this.title = title;
    this.pages = pages;
    this.writer = {
      firstName: firstName,
      dob: dob,
    };
    this.publish = publish;
    this.soldOut = soldOut;
  }
  changeSoldOut(soldOut) {
    this.soldOut = soldOut;
  }

  bookAge() {
    let now = new Date();
    let totalTime = (now = publish);
    let days = Math.floor(totalTime / (1000 * 3600 * 24));
    return days;
  }
}

export default Book;
