//toLocaleString( )= returns a string with a language sensitive representation of this

// number.toLocaleString(locale,{options});

//'locale' = specify that language (undefined = default)
//'options' = object with formatting options

let myNum = 123456.789;

// myNum = myNum.toLocaleString("en-US");
myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
console.log(myNum)