function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            if (square.style.backgroundColor == false) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }

            let currentOpacity = parseFloat(square.style.opacity) || 0;
            if (currentOpacity < 1) {
                square.style.opacity = currentOpacity + 0.1;
            }
        });

        container.appendChild(square);
    }
}

document.getElementById('resetBtn').addEventListener('click', () => {
    let input = prompt('Enter grid size (1-100):');
    let size = parseInt(input);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Invalid size!');
    }
});

createGrid(16);
