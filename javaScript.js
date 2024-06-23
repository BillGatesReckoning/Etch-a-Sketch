const size = 16;
createDivs(16);

const gridCreate = document.querySelector("#gridCreate");

const divs = document.querySelectorAll(".manydiv");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.setAttribute("style", "background-color: pink;")
    })
    div.addEventListener("mouseout", () => {
        div.setAttribute("style", "background-color: white;")
    })
})

function createDivs(size) {
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
}