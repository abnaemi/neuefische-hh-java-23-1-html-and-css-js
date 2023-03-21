var student = { name: "Florian", Id: 21 };
var students = [student, { name: "Tom", Id: 23 },];
console.log(students);
function updateName(studentId, newName, student) {
    if (studentId === void 0) { studentId = 21; }
    if (newName === void 0) { newName = "Florian2"; }
    if (student.Id == studentId) {
        student.name = newName;
        console.log(students);
    }
}
