type student = {id: string, name:string}
const student = {name: "Florian", id: "21"}
const students: { name: string, id: string } [] = [student, {name: "Tom", id: "23"},]
console.log(students)


function checkStudent(studentId: string, studentName: string, student) {
    if (student.id == studentId) {
        //student.name=studentName
        students.push({name: studentName, id: studentId})
    } else {

        console.log("No matching ID")

    }
}


console.log(checkStudent("21","Tom2",student))
console.log(students)

