//For palette1 to choose a color and then display that color name

const inputcolor1 = document.getElementById("palette1");
const coloroutput1 = document.getElementById("color1");
//console.log(inputcolor1);

function getcolor1(){
    //console.log("Hello");
    //const selectedcolor = inputcolor1.value;
    coloroutput1.textContent = inputcolor1.value;
}

inputcolor1.addEventListener("input", getcolor1);


//For palette1 to choose a color and then display that color name

const inputcolor2 = document.getElementById("palette2");
const coloroutput2 = document.getElementById("color2");

function getcolor2(){
    coloroutput2.textContent = inputcolor2.value;
}

inputcolor2.addEventListener("input", getcolor2);

// Get all direction buttons
const directionButtons = document.querySelectorAll(".mybuttonatt");
let selectedDirection = "top";

// Add click event to each direction button
directionButtons.forEach(button => {
    button.addEventListener("click", function() {
        selectedDirection = this.textContent.toLowerCase(); // Get direction from button text
    });
});


//Generate button for direction change and update background

function setDirection(){
    const color1 = document.getElementById("color1").textContent;
    const color2 = document.getElementById("color2").textContent;

    document.getElementById('section').style.background = `linear-gradient(to ${selectedDirection}, ${color1}, ${color2})`;
}

// Add event listener to Generate button
const outputbackground = document.getElementById("generatebuttonatt");
outputbackground.addEventListener("click", setDirection)

