for (let i = -10; i < 5; i++) {
  console.log(i);
}

// Other example

const myArray = ["Banana", 2, "Apple", 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Method Cycle FOREACH

myArray.forEach((element, index) => {
  console.log(element, index);
});
