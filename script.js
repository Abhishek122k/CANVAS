/* Iteration 4: Make the Canvas App Functional */
//<!-- Ironman - background, helmet, eyes, face-plate  -->

var buttonbackground=document.getElementById("buttonbackground");
var background=document.getElementById("background");


buttonbackground.oninput=()=>{
  background.style.fill=buttonbackground.value;
}
var buttonhelmet=document.getElementById("buttonhelmet");
var helmet=document.getElementById("helmet");


buttonhelmet.oninput=()=>{
  helmet.style.fill=buttonhelmet.value;
}
var buttoneyes=document.getElementById("buttoneyes");
var eyes=document.getElementById("eyes");


buttoneyes.oninput=()=>{
  eyes.style.fill=buttoneyes.value;
}
var buttonfaceplate=document.getElementById("buttonfaceplate");
var faceplate=document.getElementById("faceplate");


buttonfaceplate.oninput=()=>{
  faceplate.style.fill=buttonfaceplate.value;
}