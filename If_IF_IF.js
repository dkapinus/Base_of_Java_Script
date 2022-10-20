const age = {
  age: 18,
};

const securityAge = (params) => {
  if (age.age > 18) {
    return console.log("Yes");
  }
  if (age.age >= 12 && age.age <= 18) {
    return console.log("Maybe");
  }
  if (age.age < 12) {
    return console.log("No");
  }
};

securityAge();
