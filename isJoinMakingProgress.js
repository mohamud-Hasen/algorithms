// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday.
// He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday.
//  This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
// example progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

function progress(arry) {
  let days = 0;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] < arry[i + 1]) {
      days = days + 1;
    }
  }
  return days;
}
console.log(progress([3, 4, 1, 2]));
console.log(progress([10, 11, 12, 9, 10]));
console.log(progress([9, 9]));
