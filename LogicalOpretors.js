//  Logical Operators
// || OR && AND

// || Operator or
let a = true || false;

console.log(a);

// || return first true meaning

// && Operator AND
let b = true && false;

console.log(b);
// && return first false meaning

// Operator ! and !!
let c = !100;
console.log(c);

let d = !!100;
console.log(d);

// a Priority operators
let f = false || true || (true && false);
console.log(f);

let g = (false && false) || true;
console.log(g);
