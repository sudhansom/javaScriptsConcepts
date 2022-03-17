Array.prototype.customReduce = function (callback) {
  let initial = 0;
  for (let i = 0; i < this.length; i++) {
    initial = callback(initial, this[i]);
  }
  return initial;
};
const givenArray = [1, 2, 3, 4, 5, 6, 7];

const result = givenArray.customReduce((initial = 0, item) => {
  return item + initial;
});
console.log(result);

/* 
    Array.prototype.customReduce = function () {
  let initial = 0;
  for (let i = 0; i < this.length; i++) {
    initial = initial + this[i];
  }
  return initial;
};
const givenArray = [1, 2, 3, 4, 5, 6, 7];

const result = givenArray.customReduce();
console.log(result);
*/
