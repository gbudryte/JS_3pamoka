"use strict";

function timeOfFall(height, g) {
  return Math.sqrt((2 * height) / g);
}

function willTheySurvive(height, parachute_time, g) {
  let result;
  let fallingTime = timeOfFall(height, g);
  if (fallingTime > parachute_time) {
    result = "They will survive";
  } 
  else {
    result = "They won't survive";
  }
  return result;
}

let h = 2000;
let t = 5;
const g = 9.8;

console.log(timeOfFall(h, g));
console.log(willTheySurvive(h, t, g));
