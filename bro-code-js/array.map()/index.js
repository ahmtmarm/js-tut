let numb = [1,2,3,4,5];
let squares = numb.map(square)

function square(element){
    return Math.pow(element, 2)
    
}

squares.forEach(element => {
    console.log(element)
})
