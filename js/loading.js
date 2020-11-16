



function changeText(){
  document.getElementById("printstatus").innerHTML = "Done"
  document.getElementById("PauseB").innerHTML = "Return Home"
  document.getElementById("CancelB").innerHTML = "Logout"
}

document.onload = setTimeout(changeText(), 5000);
