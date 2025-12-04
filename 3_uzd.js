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
  if (7 <= average && average <= 9) {
    numberOfCandy = 2;
  } 
  if (average<7) {
    numberOfCandy = 1;
  }
  return numberOfCandy;
}

let marks_gotten = [10,10,10,8,9]
console.log(willGetCandy(marks_gotten))