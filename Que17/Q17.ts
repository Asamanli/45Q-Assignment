//creating array of a guest list
let guestlist = ["Hamza", "Hafeez", "Fairoz", "Anas"];
//variable for not available member
let dontcome = guestlist[0];
console.log(dontcome, " is not coming.");
//addition and removal of member from guest list array
guestlist.splice(0,1, "Ahad");
console.log("Hey! We have a bigger table now");
//new value addition at start of index array
guestlist.unshift("Umer");
//new value addition at end of index array
guestlist.push("Murtaza");
//get a middle index of array
let mid: number = Math.floor(guestlist.length/2);
//new value addition at mid of index array
guestlist.splice(mid, 0, "Sadeem");

guestlist.forEach(guestlist => {
    console.log(`Hello ${guestlist}, lets have a fun together at big table`)
});

console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two guests to dinner with me ");
//to remove the guest from array
while(guestlist.length > 2){
    let removeGuest = guestlist.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}

guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to join us`));
//to make list empty
guestlist.pop();
guestlist.pop();
console.log(guestlist);
