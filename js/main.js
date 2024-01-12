'use strict';

(function () {
    const maxTiles = 20;
    let randomTileIndex = 0;
    let lastIndex = 0;

    generateTiles();
    animateTiles();

    function generateTiles() {
        const colors = ['#ff9999', '#ff80ff', '#809fff', '#5cd6d6', '#85e085', '#ffd633', '#66d9ff', '#cc99ff', '#cccccc'];
        const tiles = document.getElementById('tiles');

        for (let i = 0; i < maxTiles; i++) {
            const tile = document.createElement('div');
            const randomColorIndex = Math.floor(Math.random() * colors.length);
            const randomColor = colors[randomColorIndex];

            tile.classList.add('tile');
            tile.textContent = i;
            tile.style.backgroundColor = randomColor;
            tile.addEventListener('animationend', function (evt) {
                this.classList.remove('fade');
                animateTiles();
            });

            tiles.appendChild(tile);
        }
    }

    function animateTiles() {
        let randomTile = null;

        randomTileIndex = Math.floor(Math.random() * maxTiles);

        if (lastIndex === randomTileIndex) {
            animateTiles();
        } else {
            randomTile = document.getElementsByClassName('tile')[randomTileIndex];
            if (!randomTile.classList.contains('fade')) randomTile.classList.
                add('fade');
            lastIndex = randomTileIndex;
        }
    }
})();