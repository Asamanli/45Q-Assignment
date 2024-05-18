function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is the city of ").concat(country));
}
;
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Lahore");
describe_city("Dehli", "India");
