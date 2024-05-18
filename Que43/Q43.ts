//Function to show magicians name
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}
//Function to add "great" through .map() it will modify array
function Great_magicians(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}
//Array of magicians name
let magician_names = ["Harry Poter", "Harry Houdini", "David Baline"];
//to make copy of original array through .slice() function
let copy_magician_names = magician_names.slice()
//Copied array modification for the addition of "the Great"
let copy_great_magician = Great_magicians(copy_magician_names);
//Both array work
console.log("Original Array");
show_magicians(magician_names);
console.log("modified Array");
show_magicians(copy_great_magician);
