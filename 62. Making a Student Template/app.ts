//Question # 62. Making a Student Template

interface Student {
    name: string
    age: number
    courses: string[]
}

let student: Student = {
    name: "Alice",
    age: 22,
    courses: ["Math", "Science", "History"]
}

console.log(student);
