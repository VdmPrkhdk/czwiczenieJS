let currentColor = 0;
let targetColor = null;
let colejnyNo = 0;

function makeColor(){
  currentColor=Number(document.getElementById("poleTextowe").value);
  const element=document.getElementById("colorBox");
  element.style.backgroundColor=`rgb(${currentColor}%,${currentColor}%,${currentColor}%)`;
}

function makeRandomColor(){
  targetColor = Math.floor(Math.random()*100)+1;
  document.getElementById("poleTextowe2").value= targetColor;
 const element=document.getElementById("colorBox2");
  element.style.backgroundColor=`rgb(${targetColor}%,${targetColor}%,${targetColor}%)`;
}

function adjustColor(step){
  currentColor += step;
  if(currentColor<0)currentColor=0;
  if (currentColor>100)currentColor=100;
  document.getElementById("poleTextowe").value=currentColor;
  const element=document.getElementById("colorBox");
  element.style.backgroundColor=`rgb(${currentColor}%,${currentColor}%,${currentColor}%)`;

}
// function getValidInput(inputId) {
// const input = document.getElementById("poleTextowe").value;
// return input.value === "" ? null : Numder(input.value);
// }
function addAttempt(){
  if(targetColor=== null){
    alert("First click: Make random color");
    return;
  }
  colejnyNo +=1;
const tbody = document.getElementById("calcResult");
const tr = document.createElement("tr");
const tdNo = document.createElement("td");
tdNo.innerHTML = attemptNo;
const tdRandom = document.createElement("td");
tdRandom.innerHTML = targetColor;
const tdChosen = document.createElement("td");
tdChosen.innerHTML = currentColor;
const tdErr = document.createElement("td");
tdErr.innerHTML =  calcError(currentColor, targetColor);
tr.appendChild(tdNo);
tr.appendChild(tdRandom);
tr.appendChild(tdChosen);
tr.appendChild(tdErr);
tbody.appendChild(tr);
}
function calcError (chosen, random){
  
if(random === 0)
  return chosen === 0 ? "0.00" : "∞";

return (Math.abs(chosen-random)/random).toFixed(2);
}
function clearTable(){
  const tbody = document.getElementById("calcResult");
  while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  }
  colejnyNo = 0;
}

