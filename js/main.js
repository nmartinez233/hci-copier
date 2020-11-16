


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

function switch_div(show) {  
  document.getElementById("show_"+show).style.display = "block";
  document.getElementById("show_"+((show==1)?2:1)).style.display = "none";
}
