function make_shirt(size: string = "Large", message: string = "I love typescript"){
    console.log(`Creating a ${size} shirt with the message "${message}" printed on it`);
};
make_shirt();
make_shirt("Small");
make_shirt("X-Small", "No way!");
