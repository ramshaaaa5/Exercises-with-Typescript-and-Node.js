// Question # 46. Enhanced Laptop Object
var laptop = {
    make: "dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.year));
    }
};
laptop.describe();
