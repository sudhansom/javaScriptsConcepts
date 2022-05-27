const multiply = function (x) {
  return function (y) {
    return x * y;
  };
};

const multiplyBy2 = multiply.bind(this, 2);
const multiplyBy9 = multiply(9);
console.log(multiplyBy9(5));
