var CurrentUsers = ["Saman", "Maham", "Mina", "Hira", "Tabiya"];
var NewUsers = ["Fatima", "Tabiya", "Rohma", "Haya", "Mina"];
NewUsers.forEach(function (NewUser) {
    var Condition = CurrentUsers.some(function (CurrentUser) { return CurrentUser.toLowerCase() === NewUser.toLowerCase(); });
    if (Condition) {
        console.log("Sorry ".concat(NewUser, " is already taken!"));
    }
    else {
        console.log("This username ".concat(NewUser, " is available."));
    }
});
