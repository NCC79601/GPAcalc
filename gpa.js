let courses = [];

function addCourse() {
    let courseName = document.getElementById('courseName').value;
    let credits = document.getElementById('credits').value;
    let grade = document.getElementById('grade').value;

    let course = {courseName, credits, grade};
    courses.push(course);

    let table = document.getElementById('courseTable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = courseName;
    cell2.innerHTML = credits;
    cell3.innerHTML = grade;

    document.getElementById('courseName').value = '';
    document.getElementById('credits').value = '';
    document.getElementById('grade').value = '';
}

function calculateGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < courses.length; i++) {
        totalCredits += parseFloat(courses[i].credits);
        totalPoints += parseFloat(courses[i].credits) * parseFloat(courses[i].grade);
    }

    let gpa = totalPoints / totalCredits;
    document.getElementById('gpa').innerHTML = 'GPA: ' + gpa.toFixed(2);
}