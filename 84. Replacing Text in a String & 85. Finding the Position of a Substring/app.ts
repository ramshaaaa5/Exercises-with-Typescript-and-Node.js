//Question 84: Replacing Text in a String
function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
}

console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"))

//Question 85. Finding the Position of a Substring
function findCodePosition(str: string): number {
    return str.indexOf("code")
}

console.log(findCodePosition("Learn to code with JavaScript"))