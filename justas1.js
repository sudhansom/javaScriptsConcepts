Array.prototype.contains = function (value) {
  for (let i = 0; i < this.length - 2; i++) {
    const a = this[i] + this[i + 1] + this[i + 2];
    if (a === value) {
      return true;
    }
  }
  return false;
};

let arr = [1, 2, 3];
arr.push(4, 5);

console.log(arr.contains(9));
