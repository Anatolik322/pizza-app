console.log("hello");
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let testBtn =document.getElementsByTagName('button');
let ul= document.getElementById('orderList');


 
let btn1= document.querySelector("#btn1");
btn1.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza1'
    ul.appendChild(li);
  
} ;
let btn2= document.querySelector("#btn2");
btn2.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza2'
    ul.appendChild(li);
} ;
let btn3= document.querySelector("#btn3");
btn3.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza3'
    ul.appendChild(li);
} ;
let btn4= document.querySelector("#btn4");
btn4.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza4'
    ul.appendChild(li);
} ;
let btn5= document.querySelector("#btn5");
btn5.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza5'
    ul.appendChild(li);
} ;
let btn6= document.querySelector("#btn6");
btn6.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza6'
    ul.appendChild(li);
} ;
let btn7= document.querySelector("#btn7");
btn7.onclick= function(){
    let li = document.createElement('li');
    li.textContent='pizza7'
    ul.appendChild(li);
} ;





