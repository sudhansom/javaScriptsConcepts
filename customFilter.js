Array.prototype.customFilter = function (callback) {
  let myArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      myArray.push(this[i]);
    }
  }
  return myArray;
};
const givenArray = [1, 2, 3, 4, 5, 6];

const result = givenArray.customFilter((item) => {
  return item % 2 == 0;
});
console.log(result);
