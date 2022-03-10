console.log("two ways of product:");

function outerFunction(a) {
  function innerFunction(b) {
    const result = a * b;
    return result;
  }
  return innerFunction;
}

const result = outerFunction(7)(8);
console.log(result);
