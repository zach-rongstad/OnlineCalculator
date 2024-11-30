function $(id) {
  return document.getElementById(id);
}

function classReturn(className) {
  return document.getElementsByClassName(className);
}


const A = 4.0;
const APlus = 4.0
const AMinus = 3.7;
const BPlus = 3.3;
const B = 3.0;
const BMinus = 2.7;
const CPlus = 2.3;
const C = 2.0;
const CMinus = 1.7;
const DPlus = 1.3;
const D = 1.0;
const F = 0.0;

$("credits").addEventListener("change", function() {
  let creditForClass = $("credits").value;
  console.log(creditForClass);
  if (creditForClass < 0)
  {
    window.alert("A class is at least worth .5 credits! Try again.");
    $("credits").value = "";
  }
});