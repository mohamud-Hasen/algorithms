// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false; // If the lengths are different, they can't be anagrams.
  }
  const charFrequencyS = {}; // Hashmap to store the frequency of characters in string 's'.

  // Populate the hashmap for string 's'.
  for (const char of s) {
    charFrequencyS[char] = (charFrequencyS[char] || 0) + 1;
  }

  // Compare the characters and their frequencies in string 't' with the hashmap for string 's'.
  for (const char of t) {
    if (!charFrequencyS[char]) {
      return false; // If the character in 't' is not found in the hashmap for 's', they are not anagrams.
    }
    charFrequencyS[char]--; // Decrease the frequency of the character found in 't'.
    if (charFrequencyS[char] < 0) {
      return false; // If the frequency becomes negative, it means 't' has more occurrences of the character than 's'.
    }
  }
  return true; // If all characters in 't' are found and their frequencies match with 's', they are anagrams.
}
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
console.log(isAnagram("listen", "silent")); // Output: true
