// Specify the target date
const targetDate = new Date("2025-01-01T00:00:00");
let cdays=document.querySelector(".days");
let chours=document.querySelector(".hours");
let cminutes=document.querySelector(".minutes");
let cseconds=document.querySelector(".second");
let differenceContainer=document.querySelector(".timing");
let counter=document.querySelector(".counter span");



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

window.addEventListener("resize",adjustingFontSize)
adjustingFontSize()

// Making rainbow border rotate



