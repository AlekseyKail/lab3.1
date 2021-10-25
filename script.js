var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var k = canvas.getContext('2d');


canvas.width = 1900;
canvas.height = 900;

c.fillStyle="#000000";
c.fillRect(0,0,canvas.width, canvas.height);

var colorPicker = document.getElementById("bgcolor");
var colorVal;
var buttons = document.querySelectorAll(".colors");
var done = document.getElementById("doIt");

function changebodycolor(){
  colorVal = colorPicker.value;
  document.getElementById("colorContainer").value = colorVal;}

  colorPicker.addEventListener("change",
changebodycolor,false);

var formertSelect = myForm.forme;
var selection = document.getElementById("selection");
var selectedOption = formertSelect.options[formertSelect.selectedIndex];
 // Переключение кисти
function changeOption(){
     
    var selection = document.getElementById("selection");
    var selectedOption = formertSelect.options[formertSelect.selectedIndex];
    
}

formertSelect.addEventListener("change", changeOption);

var paintColors = '#ffffff';
var circleradius = 10;

function razmer() {
  var rng=document.getElementById('ramer'); //rng - это ползунок
  circleradius = rng.value;
}
function drawsq(x,y){
  c.beginPath();

  c.lineTo(x+75, y+50);
  c.lineTo(x+100, y+75);
  c.lineTo(x+100, y+25);
  c.fill();
  c.stroke();
}

function drawsqq(x,y){
  c.beginPath();

  c.lineTo(x+150, y+100);
  c.lineTo(x+200, y+150);
  c.lineTo(x+200, y+50);
  c.fill();
  c.stroke();
}

function drawCircle(x, y){
   c.beginPath();
   c.arc(x, y, circleradius, 0, 2 * Math.PI);
   c.fill();
 }

var mouseDown = false;

changeOption()
//////////////////////////////////////////////////////////

function addMouseListeners1(){
 canvas.addEventListener('mousemove', function(e){
  if(mouseDown){
    console.log(formertSelect.value);
    switch(formertSelect.value){ case "circle":{
    // переключение кисти ???????
     c.fillStyle = colorVal;
     drawCircle(e.clientX, e.clientY);}
    }}
   /////////////////////////////////////////////////
 });
  canvas.addEventListener('mousedown', function(e){
    mouseDown = true;
 });
  canvas.addEventListener('mouseup', function(e){
   mouseDown = false;
 });
  canvas.addEventListener('dblclick', function(e){
   c.fillStyle = 'black';
   c.fillRect(0,0,canvas.width, canvas.height);
 });
}
function addMouseListeners2(){
  canvas.addEventListener('mousemove', function(e){
   if(mouseDown){
     console.log(formertSelect.value);
     switch(formertSelect.value){ case "3r":{ 
       //if(mouseDown){
       k.fillStyle = colorVal;
       drawsq(e.clientX-90, e.clientY-40);
    }}}
    /////////////////////////////////////////////////
  });
   canvas.addEventListener('mousedown', function(e){
     mouseDown = true;
  });
   canvas.addEventListener('mouseup', function(e){
    mouseDown = false;
  });
   canvas.addEventListener('dblclick', function(e){
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width, canvas.height);
  });
 }
 function addMouseListeners3(){
  canvas.addEventListener('mousemove', function(e){
   if(mouseDown){
     console.log(formertSelect.value);
     switch(formertSelect.value){ case "4r":{ 
       //if(mouseDown){
       k.fillStyle = colorVal;
       drawsqq(e.clientX-180, e.clientY-90);
    }}}
    /////////////////////////////////////////////////
  });
   canvas.addEventListener('mousedown', function(e){
     mouseDown = true;
  });
   canvas.addEventListener('mouseup', function(e){
    mouseDown = false;
  });
   canvas.addEventListener('dblclick', function(e){
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width, canvas.height);
  });
 }
addMouseListeners1();
addMouseListeners2();
addMouseListeners3();