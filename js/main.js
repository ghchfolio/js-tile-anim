'use strict';

(function () {
    const maxTiles = 50;
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'teal'];
    const tiles = document.getElementById('tiles');

    let randomTileIndex = 0;
    let lastIndex = 0

    // dynamically add tiles with diff bg color the tiles element
    for (let i = 0; i < maxTiles; i++) {
        const tile = document.createElement('div');
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomColorIndex];

        tile.classList.add('tile');
        tile.textContent = i;
        tile.style.backgroundColor = randomColor;
        tile.addEventListener('animationend', function (evt) {
            this.classList.remove('fade');
            animateTile();
        });

        tiles.appendChild(tile);
    }

    animateTile();

    function animateTile() {
        let randomTile = null;
        randomTileIndex = Math.floor(Math.random() * maxTiles);

        if (lastIndex === randomTileIndex) {
            animateTile();
        } else {
            randomTile = document.getElementsByClassName('tile')[randomTileIndex];
            if (!randomTile.classList.contains('fade')) randomTile.classList.
                add('fade');
            lastIndex = randomTileIndex;
        }
    }

})();