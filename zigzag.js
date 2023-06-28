// var convert = function(s, numRows) {
   
//     if (numRows === 1 || s.length <= numRows) {
//       return s;
//     }
  
//     const result = [];
//     const cycleLen = 2 * numRows - 2;
//     const n = s.length;
  
//     for (let i = 0; i < numRows; i++) {
//       for (let j = 0; j + i < n; j += cycleLen) {
//         result.push(s[j + i]);
//         if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
//           result.push(s[j + cycleLen - i]);
//         }
//       }
//     }
  
//     return result.join('');
  
      
//   };
function convert(s, numRows) {
    // if (numRows === 1 || s.length <= numRows) {
    //   return s;
    // }
  
    // const rows = new Array(numRows).fill('');
    // let currentRow = 0;
    // let direction = -1;
  
    // for (const char of s) {
    //   rows[currentRow] += char;
  
    //   if (currentRow === 0 || currentRow === numRows - 1) {
    //     direction *= -1;
    //   }
  
    //   currentRow += direction;
    // }
  
    // return rows.join('');
        if (numRows === 1 || s.length <= numRows) {
      return s;
    }
  
    const result = [];
    const cycleLen = 2 * numRows - 2;
    const n = s.length;
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j + i < n; j += cycleLen) {
        result.push(s[j + i]);
        if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
          result.push(s[j + cycleLen - i]);
        }
      }
    }
  
    return result.join('');
  }
  
  // Example usage:
  const s = "PAYPALISHIRING";
  const numRows = 3;
  const result = convert(s, numRows);
  console.log(result); // Output: "PAHNAPLSIIGYIR"
  