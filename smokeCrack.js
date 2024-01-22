

const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
const selectedChars = [];

const pickRandChar = function(charArray) {
    const len = charArray.length;
    const charIndex = (Math.floor(Math.random() * 36))
    return charArray[charIndex];
}

const container = document.getElementById("charContainer")
for (let i = 0; i < 15; i++){
    var mySpan = document.createElement('span');
    var myChar = pickRandChar(chars);
    mySpan.className = `item`
    mySpan.id = `span${i+1}`
    mySpan.textContent = "" + myChar;
    container.appendChild(mySpan);
    selectedChars.push(myChar)
}

console.log(selectedChars);

// get modal elements
const myModal = document.getElementById("myModal");
const modalMessage = document.getElementById('modalMessage');
const modalRetryBtn = document.getElementById('retryBtn');


// set duration to 5 seconds
const timerDuration = 5;

const updateInterval = 1000;

const widthIncrement = 100 / (timerDuration * 1000 / updateInterval);

let timeRemaining = 5;

const timeIncrement = 1;

//get element
const time = document.getElementById("time");

// initial width
let currentWidth = 100;

const texttimer = document.getElementById("texttimer");

let iterator = 0;

let timerInterval;


document.body.addEventListener("keydown", (event)=> {
    var spanNum = document.getElementById(`span${iterator + 1}`);
    if (myModal.style.display != "block") {
        if (event.key == selectedChars[iterator]){

            if(iterator >= 14) {
                modalMessage.textContent = "CONGRATULATIONS! YOU'RE IN!"
                myModal.style.display = "block";
                clearInterval(timerInterval);
            } 

            // update the timer at the intervals described
            if (iterator === 0){
                    timerInterval = setInterval(() => {
                    currentWidth -= widthIncrement;
                    time.style.width = currentWidth + '%';
        
                    timeRemaining -= timeIncrement;
                    texttimer.textContent = timeRemaining + " seconds";

                    if (currentWidth <= 0) {
                        clearInterval(timerInterval);
                        modalMessage.textContent = "YOU FAILED! (reason: end of timer)"
                        myModal.style.display = "block";
                    }                
                }, updateInterval);
            }

            console.log("correct " + selectedChars[iterator])
            spanNum.style.backgroundColor = "#0FCFDD";
            spanNum.style.boxShadow = "0px 4px 0px rgb(10, 115, 122)"
            iterator++;
            return;
        } else{
            modalMessage.textContent = "YOU FAILED! (reason: wrong keypress)"
            myModal.style.display = "block";
            clearInterval(timerInterval);
        }
    }
    // if you press enter while modal is diplayed, it will refresh the page for another try
    if (myModal.style.display == "block"){
        if (event.key == "Enter") {
            location.reload();
        }
    }
})



modalRetryBtn.addEventListener('click', (event)=> {
    location.reload();
})

document.body.addEventListener('keydown', (event) => {
    
})