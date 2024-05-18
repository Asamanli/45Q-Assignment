var invite = ["Maham", "Mina", "Fatima"];
invite.forEach(function (invite) {
    console.log("Hey ".concat(invite, ", I would like to invite you in my birthday celebration on coming sunday"));
});
var replace = "Mina";
console.log("".concat(replace, " is not joining us."));
var newinvite = "Tabiya";
invite[invite.indexOf(replace)] = newinvite;
invite.forEach(function (invite) {
    console.log("".concat(invite, ", would you like to join us?"));
});
