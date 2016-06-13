/**
 * Created by schandramouli on 6/12/16.
 */
'use strict';

// finally, block-scoping
let x = 5;
console.log(x);

for(let i = 1; i < 5; i++) {
  console.log(i);
}

// i is undefined outside
//console.log(i);

// look at the same code with var
for(var i = 1; i < 5; i++) {
  console.log(i);
}

// i is defined outside
console.log(i);
console.log(i);

// let is also hoisted, but u cannot use a variable b4 declaration
// this is an error
//console.log(z);
// still an error
let z = 6;

// here its available
console.log(z);