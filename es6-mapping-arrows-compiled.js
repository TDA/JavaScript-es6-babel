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
// print evens
console.log([1, 2, 3, 4].filter(function (n) {
  return n % 2 == 0;
}));
// print odds
console.log([1, 2, 3, 4].filter(function (n) {
  return n % 2 == 1;
}));

var evens = [1, 2, 3, 4];
var nums = evens.map(function (v, i) {
  return v + i;
});
console.log(nums);

console.log(nums);

console.log("Hoping this works");

//# sourceMappingURL=es6-mapping-arrows-compiled.js.map