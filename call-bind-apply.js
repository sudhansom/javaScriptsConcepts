let name1 = {
  firstName: "sudhan",
  lastName: "poudel",
  age: 40,
};
let name2 = {
  firstName: "resham",
  lastName: "poudel",
  age: 38,
};

let displayName = function () {
  console.log(`${this.firstName} ${this.lastName} of age ${this.age}`);
};

displayName.call(name1);
displayName.call(name2);
