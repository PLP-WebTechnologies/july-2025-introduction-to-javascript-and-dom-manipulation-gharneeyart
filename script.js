// Part 1: Variables & Conditionals
let userName = "Ganiyat";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome, " + userName + "!");
} else {
  console.log("Please log in.");
}


// Part 2: Functions
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(greetUser("Ganiyat"))

function multiplyNumbers(a, b) {
  return a * b;
}
console.log(multiplyNumbers(3,5))


// Part 3: Loops
function showNumbers() {
  let numbers = "Numbers: ";

  // for loop
  for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
  }

  numbers += "| Squares: ";

  // while loop
  let j = 1;
  while (j <= 5) {
    numbers += (j * j) + " ";
    j++;
  }

  return numbers;
}

// Part 4: DOM Interactions
const greetBtn = document.getElementById("greetBtn");
const listBtn = document.querySelector("#listBtn");
const outputDiv = document.getElementsByClassName("output")[0];
const outputDiv2 = document.getElementById("output2");

// Click button to greet user
greetBtn.addEventListener("click", () => {
  outputDiv.textContent = greetUser(userName);
});

// Click button to show numbers
listBtn.addEventListener("click", () => {
  outputDiv2.textContent = showNumbers();  
});

// Change style dynamically
outputDiv.addEventListener("mouseover", () => {
  outputDiv.style.backgroundColor = "#e0ffe0";
  outputDiv.style.borderColor = "brown"
});

outputDiv2.addEventListener("mouseout", () => {
  outputDiv2.style.backgroundColor = "#fff";
  outputDiv2.style.color = "blue"
});
