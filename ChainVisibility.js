let a = 6;
// global visibility

function chainVisibility() {
  let b = 9;
  a = true;
  return console.log(b);
  //   local visibility
}

chainVisibility();
console.log(a);
