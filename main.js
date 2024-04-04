
 let currentPage = 0;// starting state
 let symbols = ['!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?','!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?','!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?','!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?','!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?','!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?','!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?','!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?','!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?', '!'] // symbols for multiples of 9
 let yourSymbol = null; // empty variable that will show a random symbol.

 // buttons variables that link to html
 let mainText = document.getElementById('mainText');
 let instructText = document.getElementById('instructText');
 let nextBtn = document.getElementById('nextBtn');
 let prevBtn = document.getElementById('prevBtn');
 let resetBtn = document.getElementById('resetBtn');
 let startBtn = document.getElementById('startBtn');
 let revealBtn = document.getElementById('revealBtn');

 // function to send to next page and change state
 function nextBtnFunc() {
    currentPage++;
    stateChange();
 }
 
 // function to reset game to first page and change state
 function resetBtnFunc() {
    currentPage = 0;
    stateChange();
 }

 // function to go to previous page and change state
 function prevBtnFunc() {
    currentPage--;
    stateChange();
 }



 // click event listeners for each button
 nextBtn.addEventListener('click', nextBtnFunc);
 startBtn.addEventListener('click', nextBtnFunc);
 prevBtn.addEventListener('click', prevBtnFunc);
 resetBtn.addEventListener('click', resetBtnFunc);
 revealBtn.addEventListener('click', nextBtnFunc);


 // function to hide elements from certain pages in switch
 function invisible(element) {
    element.style.visibility = 'hidden';
 }

 // function to show elements on certain pages in switch
function visible(element) {
    element.style.visibility = 'visible'
}

function randomSymbol() {
    let symbolString = "";
    let randomNine = symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = 0; i < symbols.length; i++) {
        if (i % 9 === 0) {
            symbolString += i + " - " + randomNine + "<br>";
        } else {
            let random = symbols[Math.floor(Math.random() * symbols.length)];
            symbolString += i + " - " + random + "<br>";
        }
    }
    yourSymbol = randomNine;
    return symbolString;
}




// state management function
// switch case for each page + elements visible for each
function stateChange(){
switch (currentPage) {
    case 0:
        mainText.innerHTML="I can read your mind!";
        invisible(nextBtn);
        invisible(prevBtn);
        invisible(instructText);
        invisible(resetBtn);
        visible(startBtn);
        invisible(revealBtn);
        break;
    case 1:
        mainText.innerHTML="Pick a number from 01 - 99";
        visible(nextBtn);
        visible(prevBtn);
        visible(instructText);
        instructText.innerHTML="When you have your number click next"
        visible(resetBtn);
        invisible(startBtn);
        invisible(revealBtn);
        break;
    case 2:
        mainText.innerHTML="Add both digits together to get a new number";
        visible(nextBtn);
        visible(prevBtn);
        visible(instructText);
        instructText.innerHTML="Ex. 14 is 1 + 4 = 5 <br> click next to proceed";
        visible(resetBtn);
        invisible(startBtn);
        invisible(revealBtn);
        break;
    case 3:
        mainText.innerHTML="Subtract your new number from the original number";
        visible(nextBtn);
        visible(prevBtn);
        visible(instructText);
        instructText.innerHTML="Ex. 14 - 5 = 9 <br> click next to proceed";
        visible(resetBtn);
        invisible(startBtn);
        invisible(revealBtn);
        break;
    case 4:
        mainText.innerHTML= randomSymbol();
        invisible(nextBtn);
        visible(prevBtn);
        visible(instructText);
        instructText.innerHTML="Find your new number. <br> Note the symbol beside the number"
        visible(resetBtn);
        invisible(startBtn);
        visible(revealBtn);
        break;
    case 5:
        mainText.innerHTML= yourSymbol;
        invisible(nextBtn);
        visible(prevBtn);
        visible(instructText);
        instructText.innerHTML="Your symbol is: <br>" + yourSymbol;
        visible(resetBtn);
        invisible(startBtn);
        invisible(revealBtn);
        break;
}
}

// function that runs when the page loads
function init() {
    resetBtnFunc();
    stateChange();
}