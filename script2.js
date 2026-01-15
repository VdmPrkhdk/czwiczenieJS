let currentColor=0;
let targetColor=0;

function makeColor(){
  currentColor=Number(document.getElementById("poleTextowe").value);
  element=document.getElementById("colorBox");
  element.style.backgroundColor=`rgb(${currentColor}%,${currentColor}%,${currentColor}%)`;
}

function makeRandomColor(){
  const randomNumber = Math.floor(Math.random()*100)+1;
  document.getElementById("poleTextowe2").value= randomNumber;
  color= document.getElementById("poleTextowe2").value;
  element=document.getElementById("colorBox2");
  element.style.backgroundColor=`rgb(${color}%,${color}%,${color}%)`;
}

function adjustColor(step){
  currentColor += step;
  if(currentColor<0)currentColor=0;
  if (currentColor>100)currentColor=100;
  document.getElementById("poleTextowe").value=currentColor;
  const element=document.getElementById("colorBox");
  element.style.backgroundColor=`rgb(${currentColor}%,${currentColor}%,${currentColor}%)`;

}