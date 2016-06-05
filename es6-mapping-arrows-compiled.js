"use strict";

/**
 * Created by schandramouli on 6/4/16.
 */

console.log([1, 2, 3].map(function (n) {
  return n + 1;
}));
console.log([1, 2, 3].map(function (n) {
  return n * n;
}));

var evens = [1, 2, 3, 4];
var nums = evens.map(function (v, i) {
  return v + i;
});
console.log(nums);

console.log(nums);

//# sourceMappingURL=es6-mapping-arrows-compiled.js.map