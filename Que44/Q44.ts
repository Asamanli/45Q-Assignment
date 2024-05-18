//rest parameter that accept items arguments representing sandwich
function makeSandwich(...items: string[]){
    console.log("Making a sandwich with the following items:");
    items.forEach(singleitem => console.log(singleitem));
    console.log("Enjoy Sandwich");
}
makeSandwich("Chicken", "Cheese", "Mayo");
makeSandwich("butter", "chicken");
makeSandwich("Lettuce", "Butter", "chicken", "chutney", "Ketchup");

//.................OR.................Another code

//rest parameter that accept items arguments representing Burger
function makeBurger(...items: string[]){
    console.log(`Burger contain ${items.join(", ")}.`);
}
makeBurger("Chicken", "Cheese", "Mayo");
makeBurger("butter", "chicken");
makeBurger("Lettuce", "Butter", "chicken", "chutney", "Ketchup");
