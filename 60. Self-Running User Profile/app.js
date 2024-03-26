//Question # 60. Self-Running User Profile
var userProfile = (function () {
    var name = "Ramsha";
    var age = 18;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
