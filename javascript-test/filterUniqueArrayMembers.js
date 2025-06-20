function unique(arr,) {
    return arr.filter((word, index) => arr.indexOf(word) === index)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O