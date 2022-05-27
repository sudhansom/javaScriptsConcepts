function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5));
