//Stage of life
var age = 21;
//If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("you are a baby.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("you are a toddler");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("you are a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("you are a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("you are an adult");
}
else if (age >= 65) {
    console.log("you are a elder");
}
