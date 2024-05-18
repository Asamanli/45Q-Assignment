var Users = [];
if (Users.length === 0) {
    console.log("Your array is empty");
}
else {
    Users.forEach(function (oneUser) {
        if (oneUser == "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
