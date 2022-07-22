const container = document.querySelector('.grid'); //Make a variable of the container
const output = createElement(container, 'div', '', 'output');
const control = document.querySelectorAll('.control');
const resetBtn = document.querySelector('.reset');
const pen = document.querySelector('.pen');
const eraser = document.querySelector('.eraser');
let pixVal = 10;

//BUTTON OPERATIONS SECTION

control.forEach((button)=>{ //Using forEach method to gain access to the buttons
    button.addEventListener('click', (e)=>{ //event listener with the event parameter
        reset(); //clears initial grid on the container
        pixVal = e.target.textContent; // we use target to gain access  to the button's text content
        return creatGrid(); //we return the creatGrid function to create the specified grid
    });
});

resetBtn.addEventListener('click', reset); //Setting up the reset button

output.addEventListener('mouseover', (e) => {
    //Add the "active" class to only divs with a "box" class
    if (pen.value == "on" && e.target.matches('.box')) {
        e.target.classList.add('active');
    } else if (pen.value == "off") {
        return;
    }
    if (eraser.value =="on" && e.target.matches('.active')) {
        e.target.classList.remove('.active');
    } else if (eraser.value =="off") {
        return;
    }
});

/*output.addEventListener('mouseover', (e)=>{
    if (eraser.value =="on" && e.target.matches('.active')) {
        e.target.classList.remove('.active');
    } else if (eraser.value =="off") {
        return;
    }
});*/
 pen.addEventListener('click', togglePen);
 eraser.addEventListener('click', toggleEraser);
/*****************************/

//FUNCTIONS SECTION

//CREATE ELEMENT FUNCTION
function createElement(parent, eleType, html, eleClass) { //function for creating elements
    const ele = document.createElement(eleType); //variable for element type
    ele.inneHTML = html; //For whatever we want the innerHTML content to be
    ele.classList.add(eleClass); //for creating  the element's class
    return parent.appendChild(ele); //Now the new element can be rendered in the browser through the parent element
}

//FUNCTION FOR CREATING GRID
function creatGrid() {
    let total = pixVal ** 2; // the sqare of pixVal being required to create a grid with equal sides
    for (i=0; i < total; i++) { //we use for loop to create the grids required in the container
        const temp = createElement(output, 'div', '', 'box'); //while utilizing the createElement function
        //the new div is output, while its class is box;
    }
    output.style.setProperty(`grid-template-columns`, `repeat(${pixVal}, 1fr)`); //we use grid template to create the boxes
}

//RESET FUNCTION
function reset() { //we create a function
    while (output.firstChild) { //using the while loop, we remove all content within the container'
        output.removeChild(output.lastChild)
    }
    pixVal = 0;
    creatGrid(); // the clears the the container
}

function togglePen(){
    if(pen.value=="on") {
        pen.value="off";
        pen.textContent = `Pen Off (Click to Turn On)`
    } else if(pen.value=="off") {
        pen.value="on"
        pen.textContent=`Pen On (Click to Turn Off)`
    }
}
function toggleEraser(){
    if(eraser.value=="on") {
        eraser.value=="off";
    } else if(eraser.value=="off") {
        eraser.value="on";
    }
}


/********************************************/



