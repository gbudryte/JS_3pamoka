"use strict";

function bestClass(means) {
  let best_mean = Math.max(...means);
  let differences = new Array(3);
  let j = 0;

  for (let i = 0; i < means.length; i++) {
    let difference = best_mean - means[i];
    if (difference != 0) {
      differences[j] = difference;
      j++;
    }
  }
  return [best_mean, differences];
}

let best_class_stats = bestClass([7, 8.5, 9, 6]);

console.log(
  `Best mean mark is ${best_class_stats[0]} \nOther classes are behind by ${best_class_stats[1]} points`
);
