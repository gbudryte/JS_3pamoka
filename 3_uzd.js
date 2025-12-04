"use strict";

function willGetCandy(marks) {
  let numberOfCandy;
  let average = 0;
  for (let i = 0; i < marks.length; i++) {
    average += marks[i];
  }
  average = average / marks.length;
  if (average > 9) {
    numberOfCandy = 3;
  }
  if (7 <= average <= 9) {
    numberOfCandy = 2;
  } 
  else {
    numberOfCandy = 1;
  }
  return numberOfCandy;
}

let marks_gotten = [8,9,6,5,10]
console.log(willGetCandy(marks_gotten))