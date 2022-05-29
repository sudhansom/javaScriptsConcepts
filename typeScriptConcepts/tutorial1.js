const findLast = (arr) => {
  return arr[arr.length - 1];
};

const last = findLast([1, 2, 3, 4]);
const lastString = findLast(["a", "b", "c"]);

console.log(last);
console.log(lastString);
