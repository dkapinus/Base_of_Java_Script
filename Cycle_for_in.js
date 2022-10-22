const myObject = {
  x: 10,
  y: true,
  z: "abc",
};

for (const key in myObject) {
  console.log(key, myObject[key]);
}

// Method FORECH for Object
const youObject = {
  x: 10,
  y: true,
  z: "abc",
};

Object.keys(youObject).forEach((key) => {
  console.log(key, youObject[key]);
});
