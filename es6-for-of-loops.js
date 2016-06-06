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