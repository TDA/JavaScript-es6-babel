/**
 * Created by schandramouli on 6/5/16.
 */

var array = [1, 2, 3, 4, 5, 6];

for (var index in array) {
  // iterates over the keys
  console.log("key, value:", index, array[index]);
}

// problem is here, the values are actually strings not numbers
for (index in array) {
  // iterates over the keys
  console.log("key shift is :", index + array[index]);
}

// so use for-in only for objects and their properties
// (usually with a hasProperty check)

// cool new looping structure, for-of
for (var value of array) {
  console.log("value:", value);
}

// if you want both keys and values, use the .entries() method of arrays
for (var [key, val] of array.entries()) {
  console.log("key, value:", key, val);
}

// in simpler terms, its the equivalent of the for-in in Python,
// and for (s:s) in Java
