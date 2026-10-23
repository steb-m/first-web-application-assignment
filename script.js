

function colorChange(color){
    var buttons = Array.from(document.getElememtsByTagName(`button`))
    buttons.array.forEach(element => {
        element.style.color = c;
        
    });
}



function turnRandom(){
    const buttons = Array.from(document.getElementsByTagName(`button`))
    buttons.forEach(button => {
        var color = `#${Math.floor(Math.random() * 0xFFFFFF).toString().padStart(6,`0`)}`; // pad start removes duplicates and the # helps with the hexcode showing
    }
}


function toReset(){

}
