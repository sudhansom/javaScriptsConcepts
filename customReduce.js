Array.prototype.customReduce = function (callback) {
  let initial = 0;
  for (let i = 0; i < this.length; i++) {
    initial = callback(initial, this[i]);
  }
  return initial;
};
const givenArray = [1, 2, 3, 4, 5];

const result = givenArray.customReduce((initial = 0, item) => {
  return item + initial;
});
console.log(result);
