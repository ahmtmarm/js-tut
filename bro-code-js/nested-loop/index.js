//nested loop = a loop inside of another loop


let symbol = window.prompt("enter a symbol to use")
let rows = window.prompt("Enter of rows");
let columns = window.prompt("Enter of columns");

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
}