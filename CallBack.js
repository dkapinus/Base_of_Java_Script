// Callback

// option ONE
function firstFunction() {
  secondFunction(4, 3);
  function secondFunction(a, b) {
    result = a + b;
    return result;
  }
  return console.log(result);
}

firstFunction();

// option TWO
function oneFunction(a, b) {
  sum = a + b;
  return sum;
}

function twoFunction() {
  oneFunction(9, 3);

  return console.log(sum);
}

twoFunction();

// option THREE
function plusStrings(a, b) {
  result = a + b;
  return result;
}

function resultStrings() {
  return console.log(result);
}

resultStrings(plusStrings("Hello ", "World !"));

resultStrings(plusStrings("Hello ", "EveryBody !"));

resultStrings(plusStrings(11, 34));

//option FOUR
function minusStrings(a, b) {
  result = a - b;
  return result;
}

function multyStrings(a, b) {
  result = a * b;
  return result;
}
function resultminusStrings(Callback) {
  Callback(7, 6);
  return console.log(result);
}

resultminusStrings(minusStrings);
resultminusStrings(multyStrings);
