//an array of arrays

let fruits = ["apples", "orangees", "bananas"];
let vegetables = ["carrots", "onions"];
let meats = ["chicken", "fish"];

let groceryList = [fruits,vegetables,meats];

for(let list of groceryList){
    for(let food of list){
        console.log(food)

    }
}