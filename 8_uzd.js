"use strict";

function findMultipleOfThree(a, b, c) {
  let answer;
  let givenNumbers = [a, b, c];
  for (let i of givenNumbers) {
    let remainder = i % 3;
    if (remainder == 0) {
      answer = i;
      break;
    }
  }
  if (answer === undefined || answer === null) {
    answer = "No multiple of 3 here";
  }

  return answer;
}

let multiple = findMultipleOfThree(1,2,5);

console.log(multiple);
