// let total = sum(2,3);
// displayDOM(total)

// function sum(x,y){
//     let result = x + y;
//     return result


sum (2,3,displayDOM);

function sum(x,y, myFunc){
    let result = x+y;
    myFunc(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}
