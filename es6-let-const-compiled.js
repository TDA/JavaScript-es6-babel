/**
 * Created by schandramouli on 6/12/16.
 */
'use strict';

// finally, block-scoping

var x = 5;
console.log(x);

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

//# sourceMappingURL=es6-let-const-compiled.js.map