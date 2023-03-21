var student1 = { name: "Florian", id: "1" };
var student2 = { name: "Matthias", id: "2" };
var studentss = [student1, student2];
console.log(studentss);
function update(students, id, name) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students[i].name = name;
        }
    }
    return students;
}
console.log(update(studentss, "1", "Max"));
console.log(studentss);
console.log(student1);
function checkStudents(student) {
    if (student.id == "1") {
        return { id: "1", name: "Fritz" };
    }
    return student;
}
function replace(students, id, name) {
    return students.map(checkStudents);
}
console.log(replace(studentss, "1", "Fritz"));
console.log(studentss);
console.log(student1);
//funktions-name Parameter:(variabel-name : type,      variabel-name: type,variabel-name: type): RückgabeType            { Body }
function replaceArrow(students, id, name) {
    return students.map(function (student) {
        if (student.id == id) {
            return { id: id, name: name };
        }
        return student;
    });
}
