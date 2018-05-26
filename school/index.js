let klass = require("./klass");

klass.add('Scott',['白富美','高富帅']);

exports.add = function (klasses) {
    klasses.forEach((item,index) => {
        let _klass = item;
        let teacheName = item.teacherName;
        let students = item.students;
        klass.add(teacheName,students)
    });
}











