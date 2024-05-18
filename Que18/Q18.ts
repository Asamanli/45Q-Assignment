//Array of countries (not in alphabetic order).
let places: string[] = ["Newzealand", "Maldives", "NYK", "Australia", "Canada"];
console.log(`The original order of countries to visit array is: ${places}.`);
//to array in alphabetical order without modifying the actual list.
console.log(`The alphabetic order of countries to visit array is: `, [...places].sort());
//array is still in its original order by printing it
console.log("Original order: ", places);
//array in reverse alphabetical order without changing the order of the original list
console.log("The reverse alphabetic order of countries to visit: ", [...places].reverse());
//array is still in its original order by printing it
console.log("Original order: ", places);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse of original list: ", places.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse of reversed original list: ", places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetic order of original list: ", places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse of alphabetic sorted order: ", places.reverse());
