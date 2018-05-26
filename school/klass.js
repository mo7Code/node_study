let student = require("./student.js")
let teacher = require("./teacher.js")

function add(teacherName,students){
    teacher.add(teacherName)
    students.forEach((item,index) => {
        student.add(item)
    });
}

exports.add = add;
