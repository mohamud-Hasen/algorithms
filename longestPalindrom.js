function longestPalindromicSubstring(s) {
    let longest = '';
  
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        const substring = s.slice(i, j + 1);
        if (isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;
        }
      }
    }
  
    return longest;
  }
  
  function isPalindrome(s) {
    const reversed = s.split('').reverse().join('');
    return s === reversed;
  }
  
  const input = 'babad';
  console.log(longestPalindromicSubstring(input));


