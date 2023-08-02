// var twoSum = function(nums, target) {
//     const previousValues = {};
//     for (let i = 0; i < nums.length; i++) {
//         const currentNumber = nums[i];
//        const neededValues = target - currentNumber;
//        const index2 = previousValues[neededValues];
//        if (index2 != null) {
//         return [index2, i];
//        }else {
//         previousValues[currentNumber] = i;
//        }
//     }
//     return [];
// }

// function twoSum(nums, target) {
//     let numObj = {};
//       for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (numObj[complement] !== undefined) {
//           return [numObj[complement], i];
//         }
//         numObj[nums[i]] = i;
//       }
//     }

//brute force approach

// function twoSum(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return[];
// }

// #2 by using hashMap method
function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
}
// function twoSum(nums, target) {
//     for(let i = 0; i <nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// }

const nums = [2, 7, 11, 15];
const target = 9;
// const nums = [3,2,4];
// const target = 6
const result = twoSum(nums, target);
console.log(twoSum(nums, target));
