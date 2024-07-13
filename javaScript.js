let gridSize = 16;
const sideLengthInPx = 960;
createDivs(16);

const gridCreateButton = document.querySelector("#gridCreate");
gridCreateButton.addEventListener("click", () => {
    gridSize = prompt("Enter your desired grid size")
    if (gridSize > 1 && gridSize < 101) {
        createDivs(gridSize)
    }
    else {
        alert("enter realizable grid")
    }
})


function createDivs(size) {
    deleteGrid()
    const container = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "manyDiv");
            container.appendChild(div);
        }
    }
    addDivAttributes()
    return
}


function addDivAttributes() {
    const divs = document.querySelectorAll(".manyDiv");
    const oneBlockSideLength = Math.sqrt((sideLengthInPx * sideLengthInPx) / (gridSize * gridSize));
    divs.forEach((div) => {
    div.style.width = `${oneBlockSideLength}px`;
    div.style.height = `${oneBlockSideLength}px`;
    div.style.backgroundColor = "white";
    div.addEventListener("mouseover", () => {
    changeSquareColor(div)
    })
})
}


function deleteGrid() {
    const divsToDelete = document.querySelectorAll("div#container > div")
    divsToDelete.forEach((divToDelete) => {
        divToDelete.remove()
    })
}

function changeSquareColor(div) {
    if (div.style.backgroundColor === "white") {
        let rgb = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        div.style.backgroundColor = rgb;
        div.style.opacity = 0.1;
    }
    else {
        let opacity = div.style.opacity;
        let newOpacity = 0.1 + +opacity;
        div.style.opacity = newOpacity;
    }
}