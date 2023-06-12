// function longestPalindromicSubstring(s) {
//     let longest = '';
  
//     for (let i = 0; i < s.length; i++) {
//       for (let j = i; j < s.length; j++) {
//         const substring = s.slice(i, j + 1);
//         if (isPalindrome(substring) && substring.length > longest.length) {
//           longest = substring;
//         }
//       }
//     }
  
//     return longest;
//   }
  
//   function isPalindrome(s) {
//     const reversed = s.split('').reverse().join('');
//     return s === reversed;
//   }
  
//   const input = 'babad';
//   console.log(longestPalindromicSubstring(input));



// 5. Longest Palindromic Substring

// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"



  
function longestPalindromicSubstring(s) {
    let longest = '';
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            let substring = s.slice(i, j + 1);
            if(isPalindrome(substring) && substring.length > longest.length){
                longest = substring;
            }
        }
    }
    return longest;
}
function isPalindrome(s) {
    let reversed = s.split('').reverse().join('');
    return s === reversed;
}
const s = 'cbbd';
console.log(longestPalindromicSubstring(s));



