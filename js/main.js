

function numPadInput(inputId, buttonText) {
  let input = document.getElementById(inputId);
  let length = input.value.length;

  if (buttonText == "Delete") {
    input.value = input.value.substring(0, length-1);
    return;
  }
  else if (buttonText == "Clear") {
    input.value = "";
    return;
  }
  else if (buttonText == "Enter") {
    if (length != 4) {
      alert("Must input 4 digits!");
      return;
    } else {
      window.location.replace("pages/homePage.html");
      input.value = "";
      return; 
    }
  }
  else {
    if (length >= 4) {
      return;
    }
    // If the input is for numcopies
    if (inputId =="copy"){
      if (length >= 3) {
        alert("Cannot have more than 999 copies!");
      }
      input.value = input.value + buttonText;
    } else {
      input.value = input.value + "*";
    }
  }
}

function switch_div(show) {  
  document.getElementById("show_"+show).style.display = "block";
  document.getElementById("show_"+((show==1)?2:1)).style.display = "none";
}


    

