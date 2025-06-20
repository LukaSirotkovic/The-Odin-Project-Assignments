function camelize(string) {

    return string.split("-").
        map((word, index) => {
            index == 0 ? word : word = word[0].toUpperCase() + word.slice(1).toLowerCase()
        })
        .join("");

}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

console.log(camelize("background-color") == 'backgroundColor',
    camelize("list-style-image") == 'listStyleImage',
    camelize("-webkit-transition") == 'WebkitTransition',)
