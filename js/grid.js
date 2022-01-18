/*
Consegna
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// FUNCTIONS

function createCells(min, max, cells) {
    for (let i = 0; i < cells; i++) {
        let div = document.createElement('div');
        grid.appendChild(div);
        div.classList = 'cell';
        div.append(getRandomNumber(min, max, cells));

        div.addEventListener('click', function () {
            div.classList.toggle('clicked');
        })
    }

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



// CONST
const startLevel = document.getElementById('start')
const levelSelection = document.getElementById('select')
const grid = document.getElementById('grid')

const difficulty1 = 100;
const difficulty2 = 81;
const difficulty3 = 49;
const list = [];

// quando scelgo la difficoltà creo la grid con i numeri

start.addEventListener('click', function () {
    startLevel.innerHTML = 'Ricomincia!'
    grid.innerHTML = '';

    const userChoice = levelSelection.value;
    if (userChoice === 'difficulty1') {
        // function
        createCells(difficulty1, 1, 100)
        getRandomNumber()
    } else if (userChoice === 'difficulty2') {
        // function
        createCells(difficulty2, 1, 81)
        grid.style.width = '400px'
        getRandomNumber()
    } else {
        // function
        createCells(difficulty3, 1, 49)
        grid.style.width = '250px'
        getRandomNumber()
    }

})
