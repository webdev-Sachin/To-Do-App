let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    alert("First enter task here");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="fa fa-trash" aria-hidden="true"></i>`;
    text.appendChild(newEle);
    inputs.value = ""; // After enetering value in text , input value shows null
    newEle.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
}
