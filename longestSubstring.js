// Sliding Window Approach:
// Initialize two pointers, start and end, both pointing to the start of the string.
// Create an empty set to store unique characters.
// Iterate through the string with the end pointer and check if the current character is already in the set.
// If the character is not in the set, add it and update the maximum length.
// If the character is in the set, remove the character at the start pointer from the set and increment start by 1.
// Repeat the process until the end pointer reaches the end of the string.

// function longestSubstringWithoutDuplicates(str) {
    // let start = 0;
    // let end = 0;
    // let maxLength = 0;
    // let uniqueChars = new Set();

    // while(end < str.length) {
    //     if(!uniqueChars.has(str.charAt(end))) {
    //         uniqueChars.add(str.charAt(end));
    //         maxLength = Math.max(maxLength, end - start + 1);
    //         end++;
    //     }else {
    //         uniqueChars.delete(str.charAt(start));
    //         start++;
    //     }
    // }
    // return maxLength;
    
// }

// Brute Force Approach:
// Generate all possible substrings and check each substring for duplicate characters.
// Keep track of the maximum length encountered.
// function longestSubstring2(s) {
//     let maxLength = 0;
//     for(let i = 0; i < s.length; i++) {
//         let uniqueChars = new Set();
//         let currentLength = 0;
//         for(let j = 0; j < s.length; j++) {
//             if(uniqueChars.has(s.charAt(j))) {
//                 break;
//             }
//             uniqueChars.add(s.charAt(j));
//             currentLength++;
//         }
//       maxLength = Math.max(maxLength, currentLength);
//     }
//     return maxLength;
// }

// 3.Hashmap with Two Pointers Approach:
// Use two pointers, start and end, to represent the current substring without any duplicate characters.
// Use a hashmap to store the last occurrence index of each character.
// If the current character is already in the hashmap, update the start pointer to the next position of the last occurrence of the character.
// Update the last occurrence index of the current character in the hashmap.
// Keep track of the maximum length encountered.

function longestSubstring3(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let charMap = new Map();
    while (end < s.length) {
        if(charMap.has(s.charAt(end))) {
            start = Math.max(start, charMap.get(s.charAt(end)) + 1);
    }
    charMap.set(s.charAt(end), end);
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
}
return maxLength;
   
}


console.log(longestSubstring3("abcabcbb"));
console.log(longestSubstring3("pwwkew"));
console.log(longestSubstring3("bbbbb"));