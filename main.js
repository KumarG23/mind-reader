 // variables
 let currentState = 1; // starting state
 let state = 'global'
 let symbols = ['!', '@', '#', '$', '%', '<', '^', '&', '*', '+', '?']
 // symbols for multiples of 9

 const init = () => {
    document.getElementById('nextBtn').addEventListener('click', moveForward);

    document.getElementById('resetBtn').addEventListener('click', reset);

    document.getElementById('prevBtn').addEventListener('click', moveBack);

    setState(currentState);

 }

 function setState() {
    currentState = newState;
    renderView(currentState);

 }

function renderView(state) {
    const viewContainer = document.getElementById('viewContainer')
    let html = '';
}

switch (state) {
    case 1:
        html = `<p>I can read your Mind!</p>`;
        break;
    case 2:
        html = `<p>Pick a number from 01 - 99</p>`;
        break;
    case 3:
        html = `<p>Add both digits together to get a new number</p`;
    case 4:
        html = `<p>Subtract your new number from the original number</p>`;
        break;
    case 5:
        html = `<p>0 - ! 1 - @ 2 - # 3 -$ 4 - % 5 - < 6 - ^ 7 - & 8 - * 9 - ?</p>`;
        break;
    case 6:
    html = `<p>I read your Mind!</p>`
    break;
}




