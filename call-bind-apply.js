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

let displayName = function (city, country) {
  console.log(
    `${this.firstName} ${this.lastName} of age ${this.age} who lives in ${city} , ${country}`
  );
};

displayName.apply(name1, ["Lalim", "Nepal"]);
displayName.apply(name2, ["Kathmandu", "Nepal"]);
