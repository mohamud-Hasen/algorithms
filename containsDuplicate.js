// Given an integer array nums, return true if any value appears at least twice in the array, and return false
// if every element is distinct.
function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const isDuplicate = nums[i] === nums[j];

      if (isDuplicate) {
        return true;
      }
    }
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
