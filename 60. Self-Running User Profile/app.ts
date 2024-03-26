//Question # 60. Self-Running User Profile

let userProfile = (function(){
    let name = "Ramsha"
    let age = 18
    return{
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    }
}) ()

userProfile.displayInfo()
