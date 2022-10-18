const myArray = [1, true, "Vika"];

console.log(myArray);

let myArray2 = new Array(1, true, "Vika");

console.log(myArray2);
myArray2[3] = 777;
console.log(myArray2[0]);
console.log(myArray2);

// Method Push
// add element the end array
myArray2.push("Morty");
console.log(myArray2);
// Method Pop
// delete element the end array
myArray2.pop();
console.log(myArray2);
// Method Unshift
// add element in start of array
myArray2.unshift(false);
console.log(myArray2);
// Method Shift
// delete element in start of array
myArray2.shift();
console.log(myArray2);
