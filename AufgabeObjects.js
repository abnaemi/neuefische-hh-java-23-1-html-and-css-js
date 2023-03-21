var student = { name: "Florian", id: "21" };
var studentTwo = { name: "Tom", id: "23" };
var students = [student, studentTwo,];
console.log(students);
function checkStudent(studentId, studentName, student) {
    if (student.id == studentId) {
        //student.name=studentName
        students.push({ name: studentName, id: studentId });
    }
    else {
        console.log("No matching ID");
    }
}
console.log(checkStudent("21", "Tom2", student));
console.log(students);
