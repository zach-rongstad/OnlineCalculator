let firstNumber = null;
let secondNumber = null;
let currentOperation = null;
let isEnteringSecond = null;
let timeToClear = false;
const addition = "+";
const subtraction = "-";
const multiplication = "*";
const division = "/";

const allNumbers = document.querySelectorAll('.num');
function $(id) {
  return document.getElementById(id);
}

function clearTextArea() {
  document.getElementById("textBox").value = "";
  firstNumber = null;
  secondNumber = null;
  currentOperation = null;
  isEnteringSecond = false;
  timeToClear = false;
  $("addition").classList.remove("active");
  $("subtraction").classList.remove("active");
  $("multiplication").classList.remove("active");
  $("division").classList.remove("active");
}

$("AC").addEventListener("click", clearTextArea);

function addToTextArea(num) {
  if (timeToClear) {
    let newNum = parseInt(num);
    document.getElementById("textBox").value = "";
    document.getElementById("textBox").value += newNum;
    timeToClear = false;
  }
  else {
    let newNum = parseInt(num);
    document.getElementById("textBox").value += newNum;
  }
}

allNumbers.forEach((element) => {
  element.addEventListener('click', () => addToTextArea(element.value));
});

function dontAddZero(num) {
  let valueBox = document.getElementById("textBox").value;
  if (valueBox == "")
  {
    return;
  }
  else
  {
    if (timeToClear)
    {
      document.getElementById("textBox").value = "";
      document.getElementById("textBox").value += num;
      timeToClear = false;
    }
    else {
      document.getElementById("textBox").value += num;
    }
  }
}


function addDecimal()
{
  const inputElement = document.getElementById("textBox");
  let currentValue = inputElement.value;
  console.log(currentValue);
  if (currentValue === "") {
    currentValue = "0.";
    console.log(currentValue);
  } else if (!currentValue.includes(".")) {
    currentValue += ".";
    console.log(currentValue);
  }

  inputElement.value = currentValue;
  console.log(inputElement.value);
}

$("decimal").addEventListener("click", addDecimal);

function validateInput()
{
  let textInput = document.getElementById("textBox");
  let textInputValue = textInput.value;
  console.log(textInputValue);
  if (isNaN(textInputValue) || textInputValue == " ")
  {
    window.alert("Input must be a number or a decimal!");
    textInputValue = textInputValue.slice(0, -1);
    textInput.value = textInputValue;
  }
}

$("textBox").addEventListener("input", validateInput);

function positiveNegative()
{
  let textInput = document.getElementById("textBox");
  if (textInput.value != "")
  {
    let textValue = parseFloat(textInput.value);
    textInput.value = (textValue * -1);
  }
  
}

$("plusMinus").addEventListener("click", positiveNegative);

function percentage()
{
  let textInput = document.getElementById("textBox");
  if (textInput.value != "")
  {
    let textValue = parseFloat(textInput.value);
    textInput.value = textValue / 100; 
  }
}

$("remainder").addEventListener("click", percentage);

function additionFunction()
{
  let textInput = document.getElementById("textBox");
  let ogNum = parseFloat(textInput.value);
  if (!isNaN(ogNum))
  {
    $("addition").classList.remove("active");
    $("subtraction").classList.remove("active");
    $("multiplication").classList.remove("active");
    $("division").classList.remove("active");
    if (currentOperation == null)
      {
        currentOperation = addition;
        firstNumber = ogNum;
        isEnteringSecond = true;
        timeToClear = true;
      }
      else if (currentOperation == addition)
      {
        firstNumber += ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
      }
      else if (currentOperation == subtraction)
      {
        firstNumber -= ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
        currentOperation = addition;
      }
      else if (currentOperation == multiplication)
      {
        firstNumber = firstNumber * ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
        currentOperation = addition;
      }
      else if (currentOperation == division)
      {
        firstNumber = firstNumber / ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
        currentOperation = addition;
      }
      $("addition").classList.add("active");
  }
  
}

$("addition").addEventListener('click', additionFunction);

function subtractionFunction()
{
  let textInput = document.getElementById("textBox");
  let ogNum = parseFloat(textInput.value);
  if (!isNaN(ogNum))
  {
    $("addition").classList.remove("active");
    $("subtraction").classList.remove("active");
    $("multiplication").classList.remove("active");
    $("division").classList.remove("active");
    if (currentOperation == null)
      {
        currentOperation = subtraction;
        firstNumber = ogNum;
        isEnteringSecond = true;
        timeToClear = true;
      }
      else if (currentOperation == subtraction)
      {
        firstNumber -= ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
      }
      else if (currentOperation == addition)
      {
        firstNumber += ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
        currentOperation = subtraction;
      }
      else if (currentOperation == multiplication)
        {
          firstNumber = firstNumber * ogNum;
          textInput.value = firstNumber;
          isEnteringSecond = true;
          timeToClear = true;
          currentOperation = subtraction;
        }
        else if (currentOperation == division)
        {
          firstNumber = firstNumber / ogNum;
          textInput.value = firstNumber;
          isEnteringSecond = true;
          timeToClear = true;
          currentOperation = subtraction;
        }
        $("subtraction").classList.add("active");
  }
  
}

$("subtraction").addEventListener('click', subtractionFunction);

function multiplicationFunction()
{
  let textInput = document.getElementById("textBox");
  let ogNum = parseFloat(textInput.value);
  if (!isNaN(ogNum))
  {
    $("addition").classList.remove("active");
    $("subtraction").classList.remove("active");
    $("multiplication").classList.remove("active");
    $("division").classList.remove("active");
    if (currentOperation == null)
      {
        currentOperation = multiplication;
        firstNumber = ogNum;
        isEnteringSecond = true;
        timeToClear = true;
      }
      else if (currentOperation == multiplication)
      {
        firstNumber = firstNumber * ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
      }
      else if (currentOperation == addition)
      {
        firstNumber += ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
        currentOperation = multiplication;
      }
      else if (currentOperation == subtraction)
        {
          firstNumber = firstNumber - ogNum;
          textInput.value = firstNumber;
          isEnteringSecond = true;
          timeToClear = true;
          currentOperation = multiplication;
        }
        else if (currentOperation == division)
        {
          firstNumber = firstNumber / ogNum;
          textInput.value = firstNumber;
          isEnteringSecond = true;
          timeToClear = true;
          currentOperation = multiplication;
        }
        $("multiplication").classList.add("active");
  }
  
}

$("multiplication").addEventListener('click', multiplicationFunction);

function divisionFunction()
{
  let textInput = document.getElementById("textBox");
  let ogNum = parseFloat(textInput.value);
  if (!isNaN(ogNum))
  {
    $("addition").classList.remove("active");
    $("subtraction").classList.remove("active");
    $("multiplication").classList.remove("active");
    $("division").classList.remove("active");
    if (currentOperation == null)
      {
        currentOperation = division;
        firstNumber = ogNum;
        isEnteringSecond = true;
        timeToClear = true;
      }
      else if (currentOperation == division)
      {
        firstNumber = firstNumber / ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
      }
      else if (currentOperation == addition)
      {
        firstNumber += ogNum;
        textInput.value = firstNumber;
        isEnteringSecond = true;
        timeToClear = true;
        currentOperation = division;
      }
      else if (currentOperation == multiplication)
        {
          firstNumber = firstNumber * ogNum;
          textInput.value = firstNumber;
          isEnteringSecond = true;
          timeToClear = true;
          currentOperation = division;
        }
        else if (currentOperation == subtraction)
        {
          firstNumber -= ogNum;
          textInput.value = firstNumber;
          isEnteringSecond = true;
          timeToClear = true;
          currentOperation = division;
        }
        $("division").classList.add("active");
  }
  
}

$("division").addEventListener("click", divisionFunction);

function equalsOperation()
{
  let textInput = document.getElementById("textBox");
  let ogNum = parseFloat(textInput.value);
  $("addition").classList.remove("active");
  $("subtraction").classList.remove("active");
  $("multiplication").classList.remove("active");
  $("division").classList.remove("active");
  if (currentOperation == division)
  {
    firstNumber = firstNumber / ogNum;
  }
  else if (currentOperation == addition)
  {
    firstNumber += ogNum;
  }
  else if (currentOperation == multiplication)
  {
    firstNumber = firstNumber * ogNum;
  }
  else if (currentOperation == subtraction)
  {
    firstNumber -= ogNum;
  }
  else
  {
    firstNumber = textInput.value;
  }

  textInput.value = firstNumber;
  isEnteringSecond = true;
  timeToClear = true;
  currentOperation = null;
}

$("equals").addEventListener('click', equalsOperation);


function multipleTwo()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let newNum = ogNum * ogNum;
    $("textBox").value = newNum;
  }
  
}

$("power2").addEventListener('click', multipleTwo);

function multipleThree()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let newNum = ogNum * ogNum * ogNum;
    $("textBox").value = newNum;
  }
  
}

$("power3").addEventListener('click', multipleThree);

function sine()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let sin = Math.sin(ogNum);
    $("textBox").value = sin;
  }
  
}

$("sin").addEventListener('click', sine);

function cosine()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let cos = Math.cos(ogNum);
    $("textBox").value = cos;
  }
  
}

$("cos").addEventListener('click', cosine);

function tangent()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let tan = Math.tan(ogNum);
    $('textBox').value = tan;
  }
  
}

$('tan').addEventListener('click', tangent);

function cosecant()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let csc = 1 / Math.sin(ogNum);
    $('textBox').value = csc;
  }
  
}

$('cosecant').addEventListener('click', cosecant);

function secant()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let sec = 1 / Math.cos(ogNum);
    $('textBox').value = sec;
  }
  
}

$('secant').addEventListener('click', secant);

function cotangent()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let cot = 1 / Math.tan(ogNum);
    $("textBox").value = cot;
  }
  
}

$("cotangent").addEventListener('click', cotangent);

function log()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let log = Math.log(ogNum) / Math.log(10);
    $("textBox").value = log;
  }
  
}

$("log").addEventListener('click', log);

function ln()
{
  let textInput = $("textBox");
  let ogNum = parseFloat(textInput.value);
  if (textInput.value != "")
  {
    let ln = Math.log(ogNum);
    $("textBox").value = ln;
  }
}

$("ln").addEventListener('click', ln);