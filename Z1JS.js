const cells = document.querySelectorAll("td");
let currentPlayer = "X";

for (let cell of cells) {
  cell.addEventListener("click", function (e) {
    if (e.target.textContent === "") {
      e.target.textContent = currentPlayer;
      if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
        resetBoard();
      } else if (checkDraw()) {
        alert("It's a draw!");
        resetBoard();
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
}

function checkWin() {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (cells[i].textContent === cells[i + 1].textContent && cells[i].textContent === cells[i + 2].textContent && cells[i].textContent !== "") {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (cells[i].textContent === cells[i + 3].textContent && cells[i].textContent === cells[i + 6].textContent && cells[i].textContent !== "") {
      return true;
    }
  }

  // Check diagonals
  if (cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent && cells[0].textContent !== "") {
    return true;
  }
  if (cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent && cells[2].textContent !== "") {
    return true;
  }

  return false;
}

function checkDraw() {
  for (let cell of cells) {
    if (cell.textContent === "") {
      return false;
    }
  }
  return true;
}

function resetBoard() {
  for (let cell of cells) {
    cell.textContent = "";
  }
  currentPlayer = "X";
}