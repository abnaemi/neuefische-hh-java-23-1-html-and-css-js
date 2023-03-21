const student: { name: string, id: string } = {name: "Florian", id: "21"}
const students: { name: string, id: string } [] = [student, {name: "Tom", id: "23"},]
console.log(students)


function checkStudent(studentId: string, studentname: string, student: { name: string, id: string }) {
    if (student.id == studentId) {
        //student.name=studentname
        students.push({name: studentname, id: studentId})
    } else {

        console.log("No matching ID")

    }
}


console.log(checkStudent("21","Tom2",student))
console.log(students)