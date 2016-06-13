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