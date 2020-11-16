var numpad = document.getElementById("numpad");
var paperSource = document.getElementById("PaperSource");
var brightness = document.getElementById("brightness");
var next = document.getElementById("Next");
var back = document.getElementById("Back");

function getNumPad() {
  numpad.style.display = "block";
  brightness.style.display="none";
  paperSource.style.display="none";
  next.style.display="none";
  back.style.display="none";
}

function clearNumPad() {
  numpad.style.display = "none";
  brightness.style.display="block";
  paperSource.style.display="block";
  next.style.display="block";
  back.style.display="block";
}