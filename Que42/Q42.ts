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
let TheGreat = Great_magicians(magician_names);
//for list
show_magicians(TheGreat);
