const destructuring = {
  name: "Dima",
  age: 32,
  gender_male: "man",
};

const destructuringfunctions = ({ name, age }) => {
  if (!age) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${age} no comments `;
};

console.log(destructuringfunctions(destructuring));
