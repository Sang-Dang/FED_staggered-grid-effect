let columnCount = Math.floor(document.body.clientWidth / 50);
let rowCount = Math.floor(document.body.clientHeight / 50);
const wrapper = document.getElementById("tiles");
const colors = [
    "rgb(229,57,53)",
    "rgb(253,216,53)",
    "rgb(244,81,30)",
    "rgb(76,175,80)",
    "rgb(33,150,243)",
    "rgb(156,39,176)"
];

let count = -1;

const handleOnClick = index => {
    count += 1;
    anime({
        targets: ".tile",
        backgroundColor: colors[count % (colors.length - 1)],
        delay: anime.stagger(20, {
            grid: [columnCount, rowCount],
            from: index
        })
    })
}

const createTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    tile.onclick = () => handleOnClick(index);

    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () => {
    wrapper.innerHTMl = "";
    let columnCount = Math.floor(document.body.clientWidth / 50);
    let rowCount = Math.floor(document.body.clientHeight / 50);

    wrapper.style.setProperty("--columns", columnCount);
    wrapper.style.setProperty("--rows", rowCount);

    createTiles(columnCount * rowCount);
}

createGrid();

window.onresize = () => {
    createGrid();
}