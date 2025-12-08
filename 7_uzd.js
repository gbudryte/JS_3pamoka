"use strict";

function learnMath(a, b, task_type) {
  let x;
  switch (task_type) {
    case 1:
      x = a * b + 3;
      break;
    case 2:
      x = a + b;
      break;
    case 3:
      x = a - b;
      break;
  }
  return x;
}

let test = learnMath(5, 2, 1);
console.log(`x = ${test}`);
