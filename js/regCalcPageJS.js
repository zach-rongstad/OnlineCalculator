function clearTextArea() {
  document.getElementById("textBox").value = "";
}

function addToTextArea(num) {
  document.getElementById("textBox").value += num;
}

function dontAddZero(num) {
  let valueBox = document.getElementById("textBox").value;
  if (valueBox == "")
  {
    return;
  }
  else
  {
    document.getElementById("textBox").value += num;
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
  if (isNaN(textInputValue))
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
  textInput.value = (textValue * -1);
}

function percentage()
{
  let textInput = document.getElementById("textBox");
  let textValue = parseFloat(textInput.value)
  textInput.value = textValue / 100;
}