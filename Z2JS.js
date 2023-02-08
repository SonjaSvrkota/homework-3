const generateBtn = document.getElementById("generate-btn");
const charCountInput = document.getElementById("char-count");
const squaresContainer = document.getElementById("squares-container");
const message = document.getElementById("message");

generateBtn.addEventListener("click", generateSquares);

function generateSquares() {
  squaresContainer.innerHTML = "";
  const charCount = charCountInput.value;
  for (let i = 0; i < charCount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("click", addChar);
    squaresContainer.appendChild(square);
  }
}

function addChar(event) {
  const square = event.target;
  const char = prompt("Enter a character (A-Z, a-z, or space)");
  if (validateChar(char)) {
    square.innerHTML = char;
    checkPalindrome();
  } else {
    alert("Invalid character, try again");
  }
}

function validateChar(char) {
  return /^[A-Za-z\s]$/.test(char);
}

function checkPalindrome() {
  const chars = [];
  const squares = squaresContainer.children;
  for (let i = 0; i < squares.length; i++) {
    chars.push(squares[i].innerHTML);
  }
  const str = chars.join("");
  const isPalindrome = str === str.split("").reverse().join("");
  message.innerHTML = isPalindrome ? "Word entered is a palindrome." : "Word entered is not a palindrome.";
}