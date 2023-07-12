// const reverse = (x) => {
//     const isNegative = x < 0;
//     let reversed = 0;
//     // convert x to it's absolute value;
//     x = Math.abs(x);

//     while(x !== 0) {
//         const digit = x % 10;
//         x = Math.floor(x / 10);

//         // check overflow/underflow
//         if(reversed > Math.pow(2, 31) / 10 || (reversed === Math.pow(2, -31) / 10 && digit > 7)) {
//             return 0;
//         }
//         //update reversed
//         reversed = reversed * 10 + digit;
//     }
//     if(isNegative){
//         reversed *= -1;
//     }
//     return reversed;
// }


const reverse = (x) => {
    const isNegative = x < 0;
    let reversed = 0;

    // convert x to it's absolute value
    x = Math.abs(x);

    while(x !== 0) {
        const digit = x % 10;
        x = Math.floor(x / 10);

        // check overflow/underflow
        if(reversed > Math.pow(2, 31) / 10 || (reversed === Math.pow(2, -31) / 10 && digit > 7)){
            return 0;
        }
        //update reversed
        reversed = reversed * 10 + digit;
    }
    if(isNegative){
        reversed *= -1
    }
    return reversed;
}


console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(15347585895));