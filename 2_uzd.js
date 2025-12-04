"use strict";

function isThereEnoughFrogs(
  single_frog_weight,
  number_of_frogs,
  required_mass
) {
    let message;
    let combined_mass = single_frog_weight * number_of_frogs;
    if (combined_mass > required_mass) {
        message = "We have enough frogs";
    } else {
        message = "We need more frogs!!!";
    }
    return message;
}

let frog_weight = 75;
let how_many_frogs = 50;
let mass_limit = 5000;

console.log(isThereEnoughFrogs(frog_weight, how_many_frogs, mass_limit));
