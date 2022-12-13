const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50],
])

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("socks");
console.log(shoppingCart)

store.set("hat", 40)

store.forEach((value, key) => console.log(`${key} $${value}`));
