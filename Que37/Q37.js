function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the message \"").concat(message, "\" printed on it"));
}
;
make_shirt();
make_shirt("Small");
make_shirt("X-Small", "No way!");
