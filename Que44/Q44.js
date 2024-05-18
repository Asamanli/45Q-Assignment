//rest parameter that accept items arguments representing sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("Enjoy Sandwich");
}
makeSandwich("Chicken", "Cheese", "Mayo");
makeSandwich("butter", "chicken");
makeSandwich("Lettuce", "Butter", "chicken", "chutney", "Ketchup");
//.................OR.................Another code
//rest parameter that accept items arguments representing Burger
function makeBurger() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Burger contain ".concat(items.join(", "), "."));
}
makeBurger("Chicken", "Cheese", "Mayo");
makeBurger("butter", "chicken");
makeBurger("Lettuce", "Butter", "chicken", "chutney", "Ketchup");
