//Question 86: Checking for Text Presence
function checktextpresence (str:string) : boolean {
    return str.includes("Javascript")
}

console.log(checktextpresence("I love coding in JavaScript!"));

//Question 87: Extracting a Substring
function extractFirstTenChars(str: string): string {
    return str.substring(0, 10)
}

console.log(extractFirstTenChars("Hello, JavaScript world!"))