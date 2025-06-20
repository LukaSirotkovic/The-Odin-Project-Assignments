function filterRangeInPlace(array, a, b) {

    for (let i = 0; i < array.length; i++) {
        
        if(array[i] < a || array[i] > b){
            array.splice(i, 1);
            i--
        }
    }
    return array;
}


let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]