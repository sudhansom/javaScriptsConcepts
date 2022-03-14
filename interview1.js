Array.prototype.contains = function (value) {
  console.log(value);
  for (let i = 0; i < this.length - 2; i++) {
    if (this[i] + this[i + 1] + this[i + 2] == value) {
      return true;
    }
  }
  return false;
};

const myArray = [1, 2, 3, 4, 5, 9, 7, 9, 9, 10];

console.log(myArray.contains(28)); // 8
