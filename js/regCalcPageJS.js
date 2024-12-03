let firstNumber = null;
let secondNumber = null;
let currentOperation = null;
let isEnteringSecond = null;
let timeToClear = false;
const addition = "+";
const subtraction = "-";
const multiplication = "*";
const division = "/";
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

function addToTextArea(num) {
  if (timeToClear) {
    document.getElementById("textBox").value = "";
    document.getElementById("textBox").value += num;
    timeToClear = false;
  }
  else {
    document.getElementById("textBox").value += num;
  }
}

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

function positiveNegative()
{
  let textInput = document.getElementById("textBox");
  let textValue = parseFloat(textInput.value)
  console.log(!isNaN(textValue));
  if (!isNaN(textValue))
  {
    textInput.value = (textValue * -1);
  }
}

function percentage()
{
  let textInput = document.getElementById("textBox");
  let textValue = parseFloat(textInput.value)
  if (!isNaN(textValue))
  {
    textInput.value = textValue / 100;
  }
}

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