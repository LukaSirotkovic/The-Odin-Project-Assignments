function filterRange(array, a, b) {
    return array.filter((number) => number >= a && number <= b)
}

let array = [5, 3, 8, 1];

let filtered = filterRange(array, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(array); // 5,3,8,1 (not modified)