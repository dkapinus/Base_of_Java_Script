function resultminusStrings(Callback) {
  Callback(7, 6);
  return console.log(result);
}

resultminusStrings(function (a, b) {
  result = a * b;
  return result;
});
