Array.prototype.customMap = function (callback) {
  let myArray = [];
  for (let i = 0; i < this.length; i++) {
    myArray.push(callback(this[i], i, this));
  }
  return myArray;
};
const givenArray = [1, 2, 3, 4, 5];

const result = givenArray.customMap((item) => {
  return item * 3;
});
console.log(result);
