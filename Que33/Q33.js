//Ordinal number array 
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using for loop it works as for.each
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var eachNumber = Numbers_1[_i];
    var ordinalend = void 0;
    if (eachNumber === 1) {
        ordinalend = "st";
    }
    else if (eachNumber === 2) {
        ordinalend = "nd";
    }
    else if (eachNumber === 3) {
        ordinalend = "rd";
    }
    else {
        ordinalend = "th";
    }
    console.log("".concat(eachNumber).concat(ordinalend));
}
