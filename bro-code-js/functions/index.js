//function = define code once, and use it many times.
//           To perform some code, call the function name.

let userName = "Bro";
let age = 21;

function happyBirthday(){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday dear", userName);
    console.log("You are", age, "years old!");
}

happyBirthday();