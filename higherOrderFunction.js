// find area , circumferences, diameter of:
const radius = [3, 4, 5, 6];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumferences = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

function calculate(radius, logic) {
  const result = [];
  radius.forEach((rad) => {
    result.push(logic(rad));
  });
  return result;
}

console.log(calculate(radius, circumferences));
