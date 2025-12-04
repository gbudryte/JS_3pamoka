"use strict";

function isInputCorrect(a, b) {
  let input_correct;
  if (a < b) {
    input_correct = true;
  } else {
    input_correct = false;
  }
  return input_correct;
}

function pricePaid(a, b, k, n1, n2, n3) {
  let price;
  if (isInputCorrect(a, b)) {
    if (k <= a) {
      price = n1 * k;
      console.log(`We are buying ${n1} pastries`)
    }
    if ((a < k)&(k< b)) {
      price = n2 * k;
      console.log(`We are buying ${n2} pastries`)
    }
    if (k >= b) {
      price = n3 * k;
      console.log(`We are buying ${n3} pastries`)
    }
    return price;
  } 
  else {
    console.log("a should be below b");
  }
}

console.log(pricePaid(1.50, 1.70, 1.30, 3,2,1));