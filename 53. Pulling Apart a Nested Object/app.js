//Qyestion # 53. Pulling Apart a Nested Object
var developer_skill = {
    languages: ["Javascript", "Typescript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
var languages = developer_skill.languages, frameworks = developer_skill.frameworks, tools = developer_skill.tools;
console.log("Languages: ".concat(languages[1], ", Framework: ").concat(frameworks[2], ", Tools: ").concat(tools[0]));
