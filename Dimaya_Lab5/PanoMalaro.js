let current = "X";
let gameOver = false;

function play(cell) {

    if (gameOver) {
        return;
    }

    if (cell.textContent != "") {
        return;
    }

    cell.textContent = current;

    let winner = checkWinner();

    if (winner != null) {
        alert(winner + " wins!");
        gameOver = true;
        return;
    }

    let cells = document.querySelectorAll(".cell");
    let isFull = true;

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent == "") {
            isFull = false;
        }
    }

    if (isFull) {
        alert("Its a DRAWWWW!");
        gameOver = true;
        return;
    }

    if (current == "X") {
        current = "O";
    } else {
        current = "X";
    }
}

function checkWinner() {

    let cells = document.querySelectorAll(".cell");
    let b = [];

    for (let i = 0; i < cells.length; i++) {
        b.push(cells[i].textContent);
    }

    // rows
    if (b[0] != "" && b[0] == b[1] && b[1] == b[2]) { return b[0]; }
    if (b[3] != "" && b[3] == b[4] && b[4] == b[5]) { return b[3]; }
    if (b[6] != "" && b[6] == b[7] && b[7] == b[8]) { return b[6]; }

    // columns
    if (b[0] != "" && b[0] == b[3] && b[3] == b[6]) { return b[0]; }
    if (b[1] != "" && b[1] == b[4] && b[4] == b[7]) { return b[1]; }
    if (b[2] != "" && b[2] == b[5] && b[5] == b[8]) { return b[2]; }

    // diagonals
    if (b[0] != "" && b[0] == b[4] && b[4] == b[8]) { return b[0]; }
    if (b[2] != "" && b[2] == b[4] && b[4] == b[6]) { return b[2]; }

    return null;
}

function reset() {

    let cells = document.querySelectorAll(".cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }

    current = "X";
    gameOver = false;
}
