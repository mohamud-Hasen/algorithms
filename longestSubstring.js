// Sliding Window Approach:
// Initialize two pointers, start and end, both pointing to the start of the string.
// Create an empty set to store unique characters.
// Iterate through the string with the end pointer and check if the current character is already in the set.
// If the character is not in the set, add it and update the maximum length.
// If the character is in the set, remove the character at the start pointer from the set and increment start by 1.
// Repeat the process until the end pointer reaches the end of the string.

// function longestSubstringWithoutDuplicates(str) {
//     let start = 0;
//     let end = 0;
//     let maxLength = 0;
//     let uniqueChars = new Set();

//     while(end < str.length) {
//         if(!uniqueChars.has(str.charAt(end))) {
//             uniqueChars.add(str.charAt(end));
//             maxLength = Math.max(maxLength, end - start + 1);
//             end++;
//         }else {
//             uniqueChars.delete(str.charAt(start));
//             start++;
//         }
//     }
//     return maxLength;
    
// }

// Brute Force Approach:
// Generate all possible substrings and check each substring for duplicate characters.
// Keep track of the maximum length encountered.
function longestSubstring2(str) {
    let maxLength = 0;
    for(let i = 0; i < str.length; i++) {
        let uniqueChars = new Set();
        let currentLength = 0;
        for(let j = 0; j < str.length; j++) {
            if(uniqueChars.has(str.charAt(j))) {
                break;
            }
            uniqueChars.add(str.charAt(j));
            currentLength++;
        }
      maxLength = Math.max(maxLength, currentLength);
    }
    return maxLength;
}



console.log(longestSubstring2("abcabcbb"));
console.log(longestSubstring2("pwwkew"));
console.log(longestSubstring2("bbbbb"));