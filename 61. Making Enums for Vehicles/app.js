//Question # 61. Making Enums for Vehicles
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["Motorcycle"] = 2] = "Motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Car);
