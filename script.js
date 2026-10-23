
function generateTable(message, errorMessage) {
    let p = Array.from(document.getElementsByTagName('p'));
    p.splice(0, 1); // removes the generate table button from the array
    p.forEach(element => {
        element.remove();
    });
    let input = prompt(message).trim();
    while ((isNaN(input) || input == '')) {
        input = window.prompt(errorMessage).trim();
    }
    for (let i = 1; i <= 15; i++) {
        let table = document.createElement('p');
        table.style.textAlign = 'center';
        table.style.fontSize = '200%';
        table.style.fontFamily = 'calibri';
        table.innerHTML = `${input} * ${i} = ${input * i}`;
        document.getElementById('multiplicationTable').appendChild(table);
    }
}
function changeColor(color) { // example
    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(element => {
        element.style.color = color;
    });
}

function randomizeColor() { // example
    const buttons = Array.from(document.getElementsByTagName('button'))
    buttons.forEach(button => {
        const color = `#${Math.floor(Math.random() * 0xFFFFFF).toString().padStart(6, '0')}`; //
        button.style.color = color;
    });

}