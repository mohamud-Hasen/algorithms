// Stack Approach:
// Create an empty stack to store opening parentheses.
// Iterate through the input string.
// If the current character is an opening parenthesis ('(', '{', or '['), push it onto the stack.
// If the current character is a closing parenthesis (')', '}', or ']'), check if the stack is empty or the top of the stack does not match the current closing parenthesis. If either condition is true, return false as the parentheses are not valid.
// If the current closing parenthesis matches the top of the stack, pop the top element from the stack.
// After iterating through the string, check if the stack is empty. If it is empty, return true; otherwise, return false.

function isValidParenthesis(s) {
    const stack = [];
  const open = ['(', '{', '['];
  const close = [')', '}', ']'];
  for(let i = 0; i < s.length; i++) {
    if(open.includes(s[i])) {
        stack.push(s[i]);
    }else if(close.includes(s[i])) {
        const top = stack.pop();
        const correspongingOpen = open[close.indexOf(s[i])];
        if(top !== correspongingOpen){
            return false;
        }
    }
  }
  return stack.length = 0;
}
console.log(isValidParenthesis('(){}[]'));