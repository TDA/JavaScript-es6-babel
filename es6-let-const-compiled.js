/**
 * Created by schandramouli on 6/12/16.
 */
'use strict';

// finally, block-scoping

var x = 5;
console.log(x);
var y = 9;

for (var _i = 1; _i < 5; _i++) {
  console.log(_i);
}

// i is undefined outside
//console.log(i);

// look at the same code with var
for (var i = 1; i < 5; i++) {
  console.log(i);
}

// i is defined outside
console.log(i);
console.log(i);

// let is also hoisted, but u cannot use a variable b4 declaration
// this is an error
//console.log(z);
// still an error
var z = 6;

// here its available
console.log(z);

// z is not global
//console.log(window.z);
// but y is, try in a browser
//console.log(window.y);

// to define a constant
var c = 20;
// try changing value, throws error
//c = 25;
// still works regularly, but is a const
console.log(c + 25);
// redeclare, error
//const c = 22;
// cannot declare without define
//const x;

//# sourceMappingURL=es6-let-const-compiled.js.map