
const container = document.querySelector(".container");

function createGrid(size){
    const containerWidth = container.clientWidth;
    const squareSize = containerWidth / size;
    for(let i=0;i<size*size;i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        container.appendChild(square);
        square.dataset.opacity = 0;

    square.addEventListener("mouseenter", function (event) {

        const square = event.target;

        let opacity = Number(square.dataset.opacity);

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        opacity += 0.1;
        if (opacity > 1) opacity = 1;

        square.dataset.opacity = opacity;

        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        square.style.opacity = opacity;

        });
    }

}
createGrid(16);

const resizeBtn = document.querySelector("#resizeBtn");

resizeBtn.addEventListener("click", function() {
    let userInput =prompt("Enter number of squares per side (max 100)");
    let size = Number(userInput);
if (size > 100 || size <= 0 || isNaN(size)) {
        alert("Please enter a number between 1 and 100.");
        return;
    }   
    container.innerHTML = "";
    createGrid(size);

});