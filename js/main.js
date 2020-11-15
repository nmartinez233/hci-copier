


function numPadInput(inputId, buttonText) {
  let input = document.getElementById(inputId);
  let length = input.value.length;

  if (buttonText == "Delete") {
    input.value = input.value.substring(0, length-1);
  }
  else if (buttonText == "Enter") {
    input.value = "";
    return; 
  }
  else {
    if (length >= 4) {
      return;
    }
    input.value = input.value + "*";//input.value + buttonText;
  }
}

