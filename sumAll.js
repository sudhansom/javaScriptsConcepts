//const sum = (a) => (b) => b ? sum(a + b) : a;

const sum = (a) => {
  return (b) => {
    if (b) {
      return sum(b + a);
    } else return a;
  };
};

console.log(sum(1)());
