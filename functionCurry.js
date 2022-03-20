let multiply = function (x, y) {
  console.log(x * y);
};

const multiplyBy2 = multiply.bind(this, 3);

multiplyBy2(2);
