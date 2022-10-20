// const fnWithError = () => {
//   throw new Error("Some error");
// };

// fnWithError();

// console.log("Continue...");

const fnWithError1 = () => {
  throw new Error("Some error");
};

try {
  fnWithError1();
} catch (error) {
  console.error(error);
  console.log(error.message);
}

console.log("Continue...");
