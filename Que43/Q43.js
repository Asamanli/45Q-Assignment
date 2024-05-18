//Function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to add "great" through .map() it will modify array
function Great_magicians(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Array of magicians name
var magician_names = ["Harry Poter", "Harry Houdini", "David Baline"];
//to make copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
//Copied array modification for the addition of "the Great"
var copy_great_magician = Great_magicians(copy_magician_names);
//Both array work
console.log("Original Array");
show_magicians(magician_names);
console.log("modified Array");
show_magicians(copy_great_magician);
