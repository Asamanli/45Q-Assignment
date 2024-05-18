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
var TheGreat = Great_magicians(magician_names);
//for list
show_magicians(TheGreat);
