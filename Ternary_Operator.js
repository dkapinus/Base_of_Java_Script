const value = { value: 77 };

const ternarnyOperator = (params) => {
  return value.value ? console.log("Yes") : console.log("No");
};

ternarnyOperator(value);

// Other Example
let myValue = 11;

console.log(myValue >= 22 ? myValue : -myValue);

myValue = -7;

const res = myValue >= 11 ? myValue : -myValue;
console.log(res);
// Other Example

let vel = 777;
const result = vel <= 55 ? vel * 5 : vel / 7;
console.log(result);
