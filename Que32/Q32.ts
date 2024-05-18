let CurrentUsers: string[] = ["Saman", "Maham", "Mina", "Hira", "Tabiya"];
let NewUsers: string[] = ["Fatima", "Tabiya", "Rohma", "Haya", "Mina"]
NewUsers.forEach(NewUser => {
    let Condition = CurrentUsers.some(CurrentUser => CurrentUser.toLowerCase() === NewUser.toLowerCase());
    if(Condition){
        console.log(`Sorry ${NewUser} is already taken!`);
    } else {
        console.log(`This username ${NewUser} is available.`);
    }
})
