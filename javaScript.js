let gridSize = 16;
createDivs(16);

const gridCreateButton = document.querySelector("#gridCreate");
gridCreateButton.addEventListener("click", () => {
    let gridSize = prompt("Enter your desired grid size")
    if (gridSize > 1 || gridSize < 101) {
        createDivs(gridSize)
    }
    else {
        alert("enter realizable grid")
    }
})


function addDivAttributes() {
    const divs = document.querySelectorAll(".manydiv");
    divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.setAttribute("style", "background-color: pink;")
    })
    div.addEventListener("mouseout", () => {
        div.setAttribute("style", "background-color: white;")
    })
})
}


function createDivs(size) {
    deleteGrid()
    const container = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
        const columnDiv = document.createElement("div");
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "manydiv");
            columnDiv.appendChild(div);
        }
        container.appendChild(columnDiv);
    }
    addDivAttributes()
    return
}

function deleteGrid() {
    const divsToDelete = document.querySelectorAll("div#container > div")
    divsToDelete.forEach((divToDelete) => {
        divToDelete.remove()
    })
}