let Users : string[] = [];
if(Users.length === 0){
    console.log("Your array is empty");
}
else{Users.forEach(oneUser => {
    if(oneUser == "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})}
