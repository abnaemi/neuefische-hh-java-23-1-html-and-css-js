var student = { name: "Florian", id: "21" };
var students = [student, { name: "Tom", id: "23" },];
console.log(students);
function checkStudent(studentId, studentname, student) {
    if (student.id == studentId) {
        //student.name=studentname
        students.push({ name: studentname, id: studentId });
    }
    else {
        console.log("No matching ID");
    }
}
console.log(checkStudent("21", "Tom2", student));
console.log(students)