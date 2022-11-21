var ctoa=document.getElementsByClassName("C toA")
var ctob=document.getElementsByClassName("C toB")
var btoa=document.getElementsByClassName("B toA")
var btoc=document.getElementsByClassName("B toC")
var atob=document.getElementsByClassName("A toB")
var atoc=document.getElementsByClassName("A toC")

var dist1=document.getElementsByClassName("dist1")
var dist2=document.getElementsByClassName("dist2")
var dist3=document.getElementsByClassName("dist3")
var dist4=document.getElementsByClassName("dist4")

const second_line=document.getElementById('second-line')
const first_line=document.getElementById('first-line')

let tableA = 0; 
let tableC = 0;

function action1(){
    first_line.style.backgroundColor='white';
    atob[0].style.display = "none";
    atoc[0].style.display = "none";
    const id=requestAnimationFrame(action1);
    dist3[0].innerHTML = tableC;
    dist4[0].innerHTML = tableC;
    tableC+=2;
    if(tableC==10000000000) cancelAnimationFrame(id)
}

function action2(){
    second_line.style.backgroundColor='white';
    ctoa[0].style.display = "none";
    ctob[0].style.display = "none";
    const id = requestAnimationFrame(action2)
    dist1[0].innerHTML = tableA;
    dist2[0].innerHTML = tableA;
    tableA+=1;
    if(tableA==10000000000) cancelAnimationFrame(id)
}