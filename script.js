// Specify the target date
const targetDate = new Date("2025-01-01T00:00:00");
let cdays=document.querySelector(".days");
let chours=document.querySelector(".hours");
let cminutes=document.querySelector(".minutes");
let cseconds=document.querySelector(".second");
let differenceContainer=document.querySelector(".timing");
let counter=document.querySelector(".counter span");
let preview_btn=document.querySelector(".preview-btn");
let goBackBtn=document.querySelector(".go-back")
let preview_screen=document.querySelector(".preview-screen");

// Function to calculate the time difference
function updateCountdown() {
  const now = new Date(); // Current date and time
  const difference = targetDate - now; // Difference in milliseconds

  if (difference > 0) {
    // Convert the difference to days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Log or update UI
    counter.innerHTML=`${days}<span>days</span>:${hours}:${minutes}:${seconds}`
    

    // console.log(
    //   `Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    // );
  } else {
    counter.innerHTML="The target date has passed!"
    clearInterval(countdownInterval); // Stop the interval
    preview_screen.classList.add("hidden")
  }
}

function adjustingFontSize(){
    let counter=document.querySelector(".counter span");
    let w=counter.getBoundingClientRect().width
    let initial=parseFloat(window.getComputedStyle(counter).fontSize)
    if (w<window.innerWidth/2){
        counter.style.fontSize='4rem';
        
    }else{
        while(w>=window.innerWidth/2){
            initial-=1;
            counter.style.fontSize=`${initial}px`;
            w=counter.getBoundingClientRect().width
            
            if (initial<1){
                break;
            }
        }
    }
}


// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

window.addEventListener("resize",adjustingFontSize);
adjustingFontSize();

preview_btn.addEventListener("click",function(){
    
    preview_screen.classList.toggle("hidden")
  })
  
  goBackBtn.addEventListener("click",function(){
    preview_screen.classList.toggle("hidden")
  })
  






// Creativity corner


const radius_input=document.querySelector(".radius");
const color_input=document.querySelector(".color");
// console.log(color_input.value,radius_input.value)

const canvas=document.getElementById("MyCanvas");


const ctx=canvas.getContext('2d');
console.log(ctx);
const reset_btn=document.querySelector(".reset")



function resizeCanvas() {
  const canvas = document.getElementById('MyCanvas');
  const ctx = canvas.getContext('2d');

  // Get the container dimensions
  const containerWidth = canvas.parentElement.offsetWidth;
  const containerHeight = canvas.parentElement.offsetHeight;

  // Adjust canvas resolution and CSS dimensions
  canvas.width = containerWidth * devicePixelRatio;
  canvas.height = containerHeight * devicePixelRatio;
  canvas.style.width = `${containerWidth}px`;
  canvas.style.height = `${containerHeight}px`;

  // Scale the drawing context
  ctx.scale(devicePixelRatio, devicePixelRatio);
}

// Call on load and resize
window.addEventListener('resize', resizeCanvas);






let isDraging=false
// document.addEventListener("click",function(e){
//   console.log(e)
//   const rect = e.target.getBoundingClientRect();
//   console.log(e.target==canvas,rect.x,rect.y,e.x,e.y,e.clientX,e.clientY)
//     let radius=radius_input.value;
//     let color=color_input.value
//     // ctx.beginPath()
//     ctx.fillStyle=`${color}`;
//     ctx.beginPath();
//     // ctx.arc()
//     ctx.arc(e.offsetX,e.offsetY,radius,0,2*Math.PI)
//     // console.log(ctx.arc(e.x,e.y,radius,0,2*Math.PI))
//     ctx.fill();
//     // ctx.ellipse()
    
// })


reset_btn.addEventListener("click",function(){
  ctx.reset();
  resizeCanvas()
})



canvas.addEventListener("mousedown",function(e){
  console.log(e)
  const rect = e.target.getBoundingClientRect();
  console.log(rect.x,rect.y,e.x,e.y,e.clientX,e.clientY)
    let radius=radius_input.value;
    let color=color_input.value
    // ctx.beginPath()
    ctx.fillStyle=`${color}`;
    ctx.beginPath();
    // ctx.arc()
    ctx.arc(e.offsetX,e.offsetY,radius,0,2*Math.PI)
    // console.log(ctx.arc(e.x,e.y,radius,0,2*Math.PI))
    ctx.fill();
    // ctx.ellipse()
    if(e.target==canvas){
    isDraging=true
  }else{
    isDraging=false
  }
})

canvas.addEventListener("mousemove",function(e){
  if(isDraging){
  console.log(e)
  const rect = e.target.getBoundingClientRect();
  console.log(e.target==canvas,rect.x,rect.y,e.x,e.y,e.clientX,e.clientY)
    let radius=radius_input.value;
    let color=color_input.value
    // ctx.beginPath()
    ctx.fillStyle=`${color}`;
    ctx.beginPath();
    // ctx.arc()
    ctx.arc(e.offsetX,e.offsetY,radius,0,2*Math.PI)
    // console.log(ctx.arc(e.x,e.y,radius,0,2*Math.PI))
    ctx.fill();
    // ctx.ellipse()
  }
})

canvas.addEventListener("mouseup",function(){
  isDraging=false
})


resizeCanvas();
