function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city} is the city of ${country}`);
};
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Lahore");
describe_city("Dehli", "India");
