// how to avoid mutation

const persOne = {
  name: "Bob",
  age: 22,
};

// option ONE
function myFn(person) {
  const updatepersonOne = Object.assign({}, persOne);
  updatepersonOne.age += 1;
  return updatepersonOne;
}

// option TWO
function myFn1(person) {
  const updatepersonOne = { ...persOne };
  updatepersonOne.age += 2;
  return updatepersonOne;
}

//  just without anythings change
console.log(persOne.age);

// result ONE option
const updateperson = myFn(persOne);
console.log(updateperson.age);

// result TWO option
const updateperson1 = myFn1(persOne);
console.log(updateperson1.age);
