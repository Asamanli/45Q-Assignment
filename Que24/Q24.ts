let fruit = "apple";
let Fruit = "Apple";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "Orange", "Mango"];

//Test for equality and inequality
console.log("Is apple fruit?");
console.log(fruit == "apple");

console.log("\n Is apple not a fruit?");
console.log(fruit != "apple");

//Tests using the lower case function
console.log("Is Apple is equal to apple after converting to lowercase");
console.log(Fruit.toLowerCase() == "apple");

console.log("\nIs Apple is not equal to apple after converting to lowercase");
console.log(Fruit.toLowerCase() != "apple");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equals to
console.log("\nIs ten isequal to twenty?");
console.log(ten == twenty);
//not equals to
console.log("\nIs ten isequal to twenty?");
console.log(ten != twenty);
//greater than 
console.log("\nIs ten greater than zero?");
console.log(ten>0);
//less than
console.log("\nIs twenty less than 10?");
console.log(twenty < 10);
//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
//Tests using "and" and "or" operators
//using and &&
console.log("\nTwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\nTwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//using or ||
console.log("\nTwenty is equal to 20 or twenty is greater than 50");
console.log(twenty == 20 || twenty > 50);

console.log("\nTwenty is not equal to 20 or twenty is greater than 50");
console.log(twenty != 20 || twenty > 50);
//Test whether an item is in a array
console.log("\nOrange is included in fruits array?");
console.log(fruits.includes("Orange"));
//make tsconfig file (tsc --init) change line 14 (target into es2016) and uncomment line 15 (lib and in square brackets write "es2016","DOM")
//Test whether an item is not in a array
console.log("\nOrange is not included in fruits array?");
console.log(!fruits.includes("Orange"));
