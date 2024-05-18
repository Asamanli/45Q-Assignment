var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Array of countries (not in alphabetic order).
var places = ["Newzealand", "Maldives", "NYK", "Australia", "Canada"];
console.log("The original order of countries to visit array is: ".concat(places, "."));
//to array in alphabetical order without modifying the actual list.
console.log("The alphabetic order of countries to visit array is: ", __spreadArray([], places, true).sort());
//array is still in its original order by printing it
console.log("Original order: ", places);
//array in reverse alphabetical order without changing the order of the original list
console.log("The reverse alphabetic order of countries to visit: ", __spreadArray([], places, true).reverse());
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
