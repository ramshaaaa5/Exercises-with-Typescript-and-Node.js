//Question # 54. Making Flexible Object Keys

function create_object_with_dynamic_key(key: string, value: string) {
    let dynamic_object = {}
    dynamic_object[key] = value
    return dynamic_object
}

let userPreference = create_object_with_dynamic_key("theme", "dark")

console.log(userPreference);


