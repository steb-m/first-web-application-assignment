// Store original colors for the reset feature
const defaultColors = [
    'blueviolet', 'pink', 'red', 'purple', 'lightskyblue',
    'blue', 'magenta', 'cornflowerblue', 'palevioletred', 'crimson'
];

function generateTable(message, errorMessage) {
    let input = prompt(message);
    if (input === null) return; // User canceled
    input = input.trim();

    while (input === '' || isNaN(Number(input))) {
        input = prompt(errorMessage);
        if (input === null) return; // User canceled
        input = input.trim();
    }

    const num = Number(input);
    const container = document.getElementById('multiplicationTable');

    // Remove any previously generated table rows (keeping the start button)
    const existingRows = container.querySelectorAll('.table-row');
    existingRows.forEach(row => row.remove());

    for (let i = 1; i <= 15; i++) {
        const table = document.createElement('p');
        table.className = 'table-row';
        table.style.textAlign = 'center';
        table.style.fontSize = '1.25rem';
        table.style.fontFamily = 'Calibri, sans-serif';
        table.innerHTML = `${num} &times; ${i} = <strong>${num * i}</strong>`;
        container.appendChild(table);
    }
}

function changeColor(color) {
    const buttons = document.querySelectorAll('.btn-item');
    buttons.forEach(button => {
        button.style.color = color;
    });
}

function randomizeColor() {
    const buttons = document.querySelectorAll('.btn-item');
    buttons.forEach(button => {
        const randomHex = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
        button.style.color = randomHex;
    });
}

function toReset() {
    const buttons = document.querySelectorAll('.btn-item');
    buttons.forEach((button, index) => {
        button.style.color = defaultColors[index] || 'black';
    });
}

function handleColorDropdown(selectedOption) {
    if (selectedOption === 'random') {
        randomizeColor();
    } else if (selectedOption === 'reset') {
        toReset();
    } else if (selectedOption) {
        changeColor(selectedOption);
    }
}

function clickHere(button) {
    alert(`You clicked ${button.textContent.trim()}!`);
}