function $(id) {
  return document.getElementById(id);
}

function classReturn(className) {
  return document.getElementsByClassName(className);
}

$("currentGrade").addEventListener("change", function(){
  console.log("yes");
  console.log($("currentGrade").value);
  if ($("currentGrade").value < 0)
  {
    window.alert("Please enter a value above 0 as your current grade!");
    $("currentGrade").value = "";
  }
});

$("finalGradePercentage").addEventListener("change", function() {
  let finalGrade = $("finalGradePercentage").value;
  if (finalGrade < 0)
  {
    window.alert("You're final exam can't be worth less than 0%! I need that professor for my classes.");
    $("finalGradePercentage").value = "";
  }
});

$("desiredGrade").addEventListener("change", function() {
  let desired = $("desiredGrade").value;
  if (desired < 0)
  {
    window.alert("You're desired grade can't be less than 0! Do you want to fail?");
    $("desiredGrade").value = "";
  }
});

$("finalGradeButton").addEventListener("click", function() {
  if ($("desiredGrade").value == "" || $("finalGradePercentage").value == "" || $("currentGrade").value == "")
  {
    window.alert("Please enter all values to get your final grade.");
  }
  else
  {
    let desiredGradePercent = $("desiredGrade").value;
    let finalGradePercent = $("finalGradePercentage").value;
    let currentGradePercent = $("currentGrade").value;
    let needOnFinal = (desiredGradePercent - currentGradePercent * (1 - (finalGradePercent / 100))) / finalGradePercent;
    console.log(needOnFinal * 100);
    window.alert("You'll need a " + needOnFinal.toFixed(2) * 100 + "% on your final to get a " + desiredGradePercent + "% in your class. Good luck!");
  }
});

$("pdfButton").addEventListener("click", () => {
  if ($("desiredGrade").value == "" || $("finalGradePercentage").value == "" || $("currentGrade").value == "")
  {
      window.alert("Please enter all values to get your final grade.");
  }
  else
  {
    let desiredGradePercent = $("desiredGrade").value;
    let finalGradePercent = $("finalGradePercentage").value;
    let currentGradePercent = $("currentGrade").value;
    let needOnFinal = (desiredGradePercent - currentGradePercent * (1 - (finalGradePercent / 100))) / finalGradePercent;
    const blob = new Blob(["You'll need a " + needOnFinal.toFixed(2) * 100 + "% on your final to get a " + desiredGradePercent + "% in your class. Good luck!"], {type: "text/plain"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "finalGrade.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
