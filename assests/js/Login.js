let checkBtn = document.getElementById("check")
let container = document.querySelector(".container");
let textInputs  = document.querySelectorAll(".text");
let buttomLogin = document.querySelector(".buttomLogin");
let enlace = document.getElementById("enlace");

checkBtn.addEventListener("change", function() {
  if (checkBtn.checked) {
    container.style.backgroundColor = "#37483F";
    textInputs.forEach(input => {
    input.style.backgroundColor = "#4B5C52";
    input.style.borderColor = "#C5A46D";
    });
    buttomLogin.style.backgroundColor="#C5A46D";
    enlace.style.color="#E3E3E3";
  } else {
    container.style.backgroundColor = "rgb(45, 50, 80)";
    textInputs.forEach(input => {
    input.style.backgroundColor = "#424769";
    input.style.borderColor = "#697b69";
    });
    buttomLogin.style.backgroundColor="#697b68";
    enlace.style.color="#666f79";
  }
});