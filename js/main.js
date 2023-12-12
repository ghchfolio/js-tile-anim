(function () {
    const maxTiles = 40;
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'teal'];
    const tilesEl = document.getElementById('tiles');

    for (let i = 0; i < maxTiles; i++) {
        const tile = document.createElement('div');
        const colorIndex = Math.floor(Math.random() * colors.length);
        const color = colors[colorIndex];

        tile.classList.add('tile');
        tile.textContent = i;
        tile.style.backgroundColor = color;
        tilesEl.appendChild(tile);
    }
})();