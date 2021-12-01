const oddDiv = document.querySelector(".odd-nums");
const evenDiv = document.querySelector(".even-nums");
const btn = document.querySelector("button"); //click me button
const resetBtn = document.querySelector(".reset");

const oddNumbers = [];
const evenNumbers = [];
console.log(oddNumbers, evenNumbers);

//Function - random number between 0 - 100
const randomNum = () => {
  return Math.floor(Math.random() * 101);
};

const createNumbers = () => {
  //Filling two arrays with numbers
  for (i = 1; i < 21; i++) {
    const num = randomNum();
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }

  //sorting
  oddNumbers.sort((a, b) => a - b);
  evenNumbers.sort((a, b) => a - b);

  //Filling odd-nums div on DOM
  oddNumbers.map((num) => {
    const span = document.createElement("span");
    span.innerText = num;
    oddDiv.append(span);
  });

  //Filling even-nums div on DOM
  evenNumbers.map((num) => {
    const span = document.createElement("span");
    span.innerText = num;
    evenDiv.append(span);
  });

  console.log(oddNumbers);
  console.log(evenNumbers);
};

//For reset
const clearNums = () => {
  oddDiv.innerHTML = "";
  evenDiv.innerHTML = "";
  oddNumbers.length = 0;
  evenNumbers.length = 0;
};

btn.addEventListener("click", createNumbers);
resetBtn.addEventListener("click", clearNums);
