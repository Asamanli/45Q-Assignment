function Car_info(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(Car_info("Toyota", "Corolla", ["color", "black"]));
console.log(Car_info("Suzuki", "Alto", ["color", "white"], ["sunroof", true]));
