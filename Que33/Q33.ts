//Ordinal number array 
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using for loop it works as for.each
for(let eachNumber of Numbers){
    let ordinalend: string;
    if(eachNumber === 1){
        ordinalend="st";
    }else if(eachNumber ===2){
        ordinalend="nd";
    }else if(eachNumber ===3){
        ordinalend="rd";
    }else{
        ordinalend="th"
    }
    console.log(`${eachNumber}${ordinalend}`);
}
