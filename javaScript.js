let gridSize = 16;
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
    const oneBlockSideLength = Math.sqrt((960 * 960) / (gridSize * gridSize));
    divs.forEach((div) => {
    div.style.width = `${oneBlockSideLength}px`;
    div.style.height = `${oneBlockSideLength}px`;
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    })
})
}


function deleteGrid() {
    const divsToDelete = document.querySelectorAll("div#container > div")
    divsToDelete.forEach((divToDelete) => {
        divToDelete.remove()
    })
}