function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/* function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
} */

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

