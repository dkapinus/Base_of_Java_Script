const myArray = [1, 2, 3];

console.log(myArray);

myArray.forEach((el) => {
  console.log(el * 4);
});

console.log(myArray);

myArray.forEach((el) => {
  console.log((el += 1));
});

console.log(myArray);
