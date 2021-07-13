// Script
// import html2canvas from 'html2canvas';
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sizeChange=document.getElementById("size");
var clear=document.getElementById("clearScr");
var color=document.getElementById("color");
var screenshot=document.getElementById("screenshot");
var background=document.getElementById("background");
background.value="#ffffff"
// background.backgroundColor="red";
let x=500;
let y=300;
let size=5;
let isPressed=false
// console.log("mitansjh")



canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    console.log(isPressed)
    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    console.log(isPressed)
    y = undefined;
});

canvas.addEventListener("mousemove" ,(e)=>{
    
    console.log("lsfnslfgn092048")
    if(isPressed)
    {
        let x2=e.offsetX
        let y2=e.offsetY
        console.log("lsfnslfgn")
        paintCircle(x2,y2);
        paintLine(x,y,x2,y2);

        console.log("lsdnflsnglsfn")
        x = x2;
        y = y2;
    }
})
function paintCircle(x,y)
{
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle=color
    ctx.fill();
}
function paintLine(x1,y1,x2,y2)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}
sizeChange.addEventListener('change' ,(e)=>{

    
    size=e.target.value;   
    if(size>70)
    {
        size=70
    }
    else if(size<5)
    {
        size=5
    }
    // console.log(size);
})
background.addEventListener('change',(e)=>{
    canvas.style.backgroundColor=e.target.value
})

color.addEventListener('change',(e)=>{
    color=e.target.value
})
clear.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.backgroundColor='White'
    background.value="#ffffff"
})



screenshot.addEventListener('click',()=>{
   screenshotFxn()
})
function screenshotFxn() {
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png");
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = "canvas-image.png";
        a.click();
        document.body.removeChild(a);
    }
}
