let invite : string[] = ["Maham", "Mina", "Fatima"];

invite.forEach(invite => {
    console.log(`Hey ${invite}, I would like to invite you in my birthday celebration on coming sunday`);
});

let replace = "Mina";
console.log(`${replace} is not joining us.`);

let newinvite = "Tabiya";
invite [invite.indexOf(replace)] = newinvite ;

invite.forEach(invite => {
    console.log(`${invite}, would you like to join us?`);
});
