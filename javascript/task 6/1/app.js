let addButton = document.querySelector("input[type=button]");

let studentNameTextBox = document.querySelector("input[name=studentName]");
let studentGradeTextBox = document.querySelector("input[name=studentGrade]");
let studentsTable = document.createElement("table");
document.getElementById("studentsTableView").append(studentsTable);


function createTD(value) {
    let tdObject = document.createElement("td");
    tdObject.innerText = value;//studentNameTextBox.value;
    return tdObject;
}

//////array of students
var namess = [];
var gradess = [];


var students = []


addButton.addEventListener("click", display);

// function addStudents (){

// }

function display() {
    // valuess =  trObject.append(tdObject);

    let department = document.querySelector("input[name=Department]:checked").value;

    let trObject = document.createElement("tr");


    trObject.classList.add(department);

    let tdObject = createTD(studentNameTextBox.value.slice(0, 1).toUpperCase() + studentNameTextBox.value.substring(1));
    console.log(tdObject)
    trObject.append(tdObject);
    if (studentNameTextBox.value === null || studentNameTextBox.value === "" || isNaN(studentGradeTextBox.value)) {
        alert("ERROR! Valid name and Grade")
    } else if (namess.includes(studentNameTextBox.value)) {
        alert("ERROR! enter a unique name!")
    } else if (gradess.includes(studentGradeTextBox.value < 0) || gradess.includes(studentGradeTextBox.value > 100)) {
        alert("ERROR! Grade should be between 0 and 100")
    } else {
        namess.push(studentNameTextBox.value);
        gradess.push(studentGradeTextBox.value)

        students.push({
            name: studentNameTextBox.value.slice(0, 1).toUpperCase() + studentNameTextBox.value.substring(1),
            grade: studentGradeTextBox.value,
            department: document.querySelector("input[name=Department]:checked").value
        })

        displayStundetTable(students)
    }

}


function displayStundetTable(studentsArray) {
    let studentsTable = document.createElement("table");

    studentsArray.forEach(studnet => {
        let trObject = document.createElement("tr");


        trObject.classList.add(studnet.department);

        let tdName = createTD(studnet.name);
        let tdGrade = createTD(studnet.grade);



        //delete
        deleteButton = document.createElement("button");
        deleteButton.innerText = "DELETE";

        deleteButton.onclick = function () {
            this.parentElement.parentElement.remove();
            // this.closest("tr").remove()
        }
        trObject.append(tdName);
        trObject.append(tdGrade);
        trObject.append(deleteButton)
        studentsTable.append(trObject);


    });
    document.getElementById("studentsTableView").innerHTML = "";
    document.getElementById("studentsTableView").append(studentsTable);


}

console.log(namess)
console.log(gradess)


//////////////////////////////////////////////////



document.getElementById('sortSelection').addEventListener('change', controlls)
var e = document.getElementById("sortSelection");




function controlls() {

    if (e.options[e.selectedIndex].innerText == "Name") {

        students.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (b.name < a.name) {
                return 1;
            }
            return 0;
        });
        console.log(students)

    } if (e.options[e.selectedIndex].innerText == "Grade") {

        students.sort(function (a, b) {
            if (a.grade > b.grade) {
                return 1;
            }
            if (b.grade > a.grade) {
                return -1;
            }
            return 0;
        });
        console.log(students)
    }
    displayStundetTable(students)




}



document.getElementById('filterSelection').addEventListener('change', sucessStudent)
var s = document.getElementById("filterSelection");

   
function sucessStudent() {
    if (s.options[s.selectedIndex].innerText == "Success"){

    displayStundetTable(students.filter(student => student.grade > 60))
    }
    if (s.options[s.selectedIndex].innerText == "Fail`"){

        displayStundetTable(students.filter(student => student.grade < 60))
        }
}

