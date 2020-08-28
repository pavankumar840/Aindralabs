var students = require('./data')

var secStudent = {
    id: students.length,
        name: "vinod kumar",
        roolNumber: "123456",
        studies : {
            class : 4,
            section : "b"
        } 
}
var newlyAdd = students.push(secStudent);
students.forEach(student => {
    if(newlyAdd-1 === student.id){
        student.name = 'updated name'
    }
})
// var deletedItem = students.splice(newlyAdd-1,newlyAdd-1)

console.log(students);