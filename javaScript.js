let gridSize = 16;
createDivs(16);

const gridCreateButton = document.querySelector("#gridCreate");
gridCreateButton.addEventListener("click", () => {
    let gridSize = prompt("Enter your desired grid size")
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
        const columnDiv = document.createElement("div");
        columnDiv.setAttribute("class", "columnDiv")
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "manyDiv");
            columnDiv.appendChild(div);
        }
        container.appendChild(columnDiv);
    }
    addDivAttributes()
    return
}


function addDivAttributes() {
    const divs = document.querySelectorAll(".manyDiv");
    divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.setAttribute("style", "background-color: pink;")
    })
    div.addEventListener("mouseout", () => {
        div.setAttribute("style", "background-color: white;")
    })
})
}


function deleteGrid() {
    const divsToDelete = document.querySelectorAll("div#container > div")
    divsToDelete.forEach((divToDelete) => {
        divToDelete.remove()
    })
}