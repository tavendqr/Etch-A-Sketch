  const container = document.querySelector(".container");
    const reset = document.querySelector(".reset");
    const color = document.querySelector(".color");
    let colorChoice = "#000000";
    const gridSizeChoice = document.querySelector(".grid-size-choice")
    const boxColor = document.querySelector(".grid-box");
    let gridSize = 16;


    reset.addEventListener("click", resetGrid);

    gridSizeChoice.addEventListener("input", (event) => {
        gridSize = event.target.value;
    });

    color.addEventListener("input", (event) => {
        colorChoice = event.target.value;
    });

    function resetGrid() {
        container.innerHTML = "";
        createGrid(gridSize);
    }

    function createGrid() {
        for (let row = 0; row < gridSize; row++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid-row");

            for (let box = 0; box < gridSize; box++) {
                const dimensions = 512/gridSize;
                const gridBox = document.createElement("div");
                gridBox.classList.add("grid-box");
                gridBox.style.height = `${dimensions}px`;
                gridBox.style.width = `${dimensions}px`;
                gridRow.appendChild(gridBox);
        }
        container.appendChild(gridRow);

        container.addEventListener("mouseover", (event) => {
            if (event.target.classList.contains("grid-box")) {
                            event.target.style.backgroundColor = colorChoice;
            }
        });
    }}


    function initialize() {
        createGrid(gridSize);
    }

    initialize();

