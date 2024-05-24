let courses = [];

function addCourse() {
    let courseName = document.getElementById('courseName').value;
    let credits = document.getElementById('credits').value;
    let grade = document.getElementById('grade').value;
    let pf = document.getElementById('pf').checked;

    let course = {courseName, credits, grade, pf};
    courses.push(course);

    let table = document.getElementById('courseTable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = courseName;
    cell2.innerHTML = credits;
    cell3.innerHTML = grade;
    cell4.innerHTML = pf ? 'Yes' : 'No';
    cell5.innerHTML = '<button onclick="deleteCourse(this)">Delete</button>';

    document.getElementById('courseName').value = '';
    document.getElementById('credits').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('pf').checked = false;
}

function deleteCourse(btn) {
    let row = btn.parentNode.parentNode;
    let index = row.rowIndex - 1;
    courses.splice(index, 1);
    row.parentNode.removeChild(row);
}

function calculateGPA() {
    let totalCredits = 0;
    let totalPoints = 0;
    let totalCreditsForGPA = 0;

    for (let i = 0; i < courses.length; i++) {
        totalCredits += parseFloat(courses[i].credits);
        if (!courses[i].pf) {
            totalPoints += parseFloat(courses[i].credits) * parseFloat(courses[i].grade);
            totalCreditsForGPA += parseFloat(courses[i].credits);
        }
    }

    let gpa = totalPoints / totalCreditsForGPA;
    document.getElementById('gpa').innerHTML = 'GPA: ' + gpa.toFixed(2);
    document.getElementById('totalCredits').innerHTML = 'Total Credits: ' + totalCredits;
}