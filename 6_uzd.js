"use strict"

function mostBirds(no_of_each){
    let sorted_quantities = no_of_each.sort((a, b) => b - a);
    let biggest_difference = sorted_quantities[0]-sorted_quantities[no_of_each.length-1];
    return console.log(`${sorted_quantities}\nBiggest difference is ${biggest_difference}`);
}

mostBirds([1000, 1500, 1800])
