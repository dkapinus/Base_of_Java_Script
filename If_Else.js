const value = {
  number: 25,
};

const valuefunctions = (params) => {
  if (value.number >= 25) {
    return console.log(true);
  } else {
    return console.log("Yes");
  }
};
valuefunctions();
