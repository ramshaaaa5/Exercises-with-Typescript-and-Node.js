//Qyestion # 53. Pulling Apart a Nested Object

let developer_skill = {
    languages: ["Javascript", "Typescript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
}

let {languages, frameworks, tools} = developer_skill

console.log(`Languages: ${languages[1]}, Framework: ${frameworks[2]}, Tools: ${tools[0]}`)
