//Question # 54. Making Flexible Object Keys
function create_object_with_dynamic_key(key, value) {
    var dynamic_object = {};
    dynamic_object[key] = value;
    return dynamic_object;
}
var userPreference = create_object_with_dynamic_key("theme", "dark");
console.log(userPreference);
