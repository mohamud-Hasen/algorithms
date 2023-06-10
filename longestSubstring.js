

// function long(s){
//    let start = 0;
//    let end = 0;
//    let uniqueChars = new Set();
//    let maxLength = 0;

//    while(end < s.length){
//     if(!uniqueChars.has(s.charAt(end))){
//         uniqueChars.add(s.charAt(end));
//         maxLength = Math.max(maxLength, end - start + 1);
//         end++;
//     }else{
//         uniqueChars.delete(s.charAt(start));
//         start++;
//     }
//    }
//    return maxLength;
// }

// function long(s){
//     let start = 0;
//     let end = 0;
//     let charMap = new Map();
//     let maxLength = 0;
//     while(end < s.length){
//         if(charMap.has(s.charAt(end))){
//             start = Math.max(start, charMap.get(s.charAt(end)) + 1)
        
//         }
//         charMap.set(s.charAt(end), end);
//         maxLength = Math.max(maxLength, end - start + 1)
//         end++;
//     }
//     return maxLength;
// }


// function long(s){
//     let start = 0;
//     let end = 0;
//     let charMap = new Map();
//     let maxLength = 0;
//     while(end < s.length){
//         if(charMap.has(s.charAt(end))){
//             start = Math.max(start, charMap.get(s.charAt(end)) + 1)
//         }
//         charMap.set(s.charAt(end), end);
//         maxLength = Math.max(maxLength, end - start + 1);
//         end++;
//     }
//     return maxLength;
// }
function long(s){
    let start = 0;
    let end = 0;
    let charMap = new Set();
    let maxLength = 0;

    while(end < s.length){
        if(!charMap.has(s.charAt(end))){
            charMap.add(s.charAt(end));
            maxLength = Math.max(maxLength, end - start + 1);
            end++;
        }else{
            charMap.delete(s.charAt(start));
            start++;
        }
    }
    return maxLength;
}






console.log(long("abcabcbb"));
console.log(long("bbbbb"));
console.log(long("pwwkew"));
