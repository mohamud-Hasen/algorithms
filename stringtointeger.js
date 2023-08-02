function atoi(s) {
  s = s.trim();
  if (!s) {
    return 0;
  }

  let sign = 1;
  if (s[0] === "+" || s[0] === "-") {
    sign = s[0] === "-" ? -1 : 1;
    s = s.slice(1);
  }

  let result = 0;
  for (let char of s) {
    if (!char.match(/\d/)) {
      break;
    }
    result = result * 10 + parseInt(char);
  }

  result = Math.max(
    Math.min(result * sign, Math.pow(2, 31) - 1),
    -Math.pow(2, 31)
  );

  return result;
}

// Test cases
console.log(atoi("42")); // Output: 42
console.log(atoi("   -42")); // Output: -42
console.log(atoi("4193 with words")); // Output: 4193
console.log(atoi("words and 987")); // Output: 0
