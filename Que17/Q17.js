//creating array of a guest list
var guestlist = ["Hamza", "Hafeez", "Fairoz", "Anas"];
//variable for not available member
var dontcome = guestlist[0];
console.log(dontcome, " is not coming.");
//addition and removal of member from guest list array
guestlist.splice(0, 1, "Ahad");
console.log("Hey! We have a bigger table now");
//new value addition at start of index array
guestlist.unshift("Umer");
//new value addition at end of index array
guestlist.push("Murtaza");
//get a middle index of array
var mid = Math.floor(guestlist.length / 2);
//new value addition at mid of index array
guestlist.splice(mid, 0, "Sadeem");
guestlist.forEach(function (guestlist) {
    console.log("Hello ".concat(guestlist, ", lets have a fun together at big table"));
});
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two guests to dinner with me ");
//to remove the guest from array
while (guestlist.length > 2) {
    var removeGuest = guestlist.pop();
    console.log("Sorry, ".concat(removeGuest, ", I can't invite you to dinner."));
}
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to join us")); });
//to make list empty
guestlist.pop();
guestlist.pop();
console.log(guestlist);
