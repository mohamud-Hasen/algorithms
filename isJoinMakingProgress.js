function progress(array) {
    let days = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < array[i + 1]) {
            days = days + 1;
        }
        else{

        }
    }
    return days;
}
console.log(progress([3,4,1,2]));
console.log(progress([10,11,12,9,10]));
console.log(progress([9,9]));