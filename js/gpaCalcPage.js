function $(id) {
  return document.getElementById(id);
}


let totalClasses = [];
let totalCredits = 0;
let totalGradePoints = 0;


function calculateGPA() {
  if (totalCredits === 0) {
    $("gpa").textContent = "0.00";
    return;
  }
  let gpa = totalGradePoints / totalCredits;
  $("gpa").textContent = gpa.toFixed(2);
}


let currClass = 1;
$("addClass").addEventListener("click", function () {
  let newClass = "class" + ++currClass;
  let newGrade = "grade" + currClass;
  let newCredits = "credits" + currClass;

  let originalClass = document.querySelector('.class1');
  let clonedClass = originalClass.cloneNode(true);


  clonedClass.className = newClass;
  let gradeDropdown = clonedClass.querySelector('select');
  gradeDropdown.className = newGrade;
  gradeDropdown.id = newGrade;

  let creditsInput = clonedClass.querySelector('input[type="number"]');
  creditsInput.className = newCredits;
  creditsInput.id = newCredits;

  gradeDropdown.selectedIndex = 0;
  creditsInput.value = '';

  document.querySelector('.semester1').appendChild(clonedClass);

  addEventListenersToClass(gradeDropdown, creditsInput);
});

function addEventListenersToClass(gradeDropdown, creditsInput) {
  gradeDropdown.addEventListener("change", function () {
    updateClassGPA(gradeDropdown, creditsInput);
  });

  creditsInput.addEventListener("change", function () {
    if (creditsInput.value < 0.5) {
      window.alert("A class can't be worth less than 0.5 credits! Please re-enter the credits!");
      creditsInput.value = '';
      return;
    }
    updateClassGPA(gradeDropdown, creditsInput);
  });
}

function updateClassGPA(gradeDropdown, creditsInput) {
  let gradeValue = parseFloat(gradeDropdown.value) || 0;
  let creditValue = parseFloat(creditsInput.value) || 0;

  let classIndex = totalClasses.findIndex(c => c.id === gradeDropdown.id);
  if (classIndex === -1) {
    totalClasses.push({
      id: gradeDropdown.id,
      grade: gradeValue,
      credits: creditValue
    });
    totalGradePoints += gradeValue * creditValue;
    totalCredits += creditValue;
  } else {
    let existingClass = totalClasses[classIndex];
    totalGradePoints -= existingClass.grade * existingClass.credits;
    totalCredits -= existingClass.credits;

    existingClass.grade = gradeValue;
    existingClass.credits = creditValue;
    totalGradePoints += gradeValue * creditValue;
    totalCredits += creditValue;
  }

  calculateGPA();
}

addEventListenersToClass($("grade1"), $("credits1"));