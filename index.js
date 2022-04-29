var canvas = document.getElementById("pageCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#FF0000";
context.fillRect(0, 0, 80, 80);
context.globalAlpha = 0.2;
context.fillStyle = "blue";
context.fillRect(50, 50, 75, 50);
context.fillStyle = "green";
context.fillRect(80, 80, 75, 50);

function myFunction() {
  let x = document.getElementById("page-button");
  x.style.fontSize = "25px";
  x.style.color = "red";
}

let count = 0;
let incrementElement = document.querySelector("#increment");
let decrementElement = document.querySelector("#decrement");
let countElement = document.querySelector("#count");

function setCounterText() {
  countElement.textContent = count;
}

incrementElement.addEventListener("click", function () {
  count++;
  setCounterText();
});

decrementElement.addEventListener("click", function () {
  if (count > 0) {
    count--;
    setCounterText();
  }
});

let articleDiv = document.getElementById("articles");
let mainDiv = document.getElementById("main");

articleDiv.children[0].lastElementChild.style.color = "blue";
articleDiv.children[0].style.fontSize = "50px";
articleDiv.previousElementSibling.style.background = "black";

mainDiv.childNodes[1].style.textDecoration = "underline";
mainDiv.lastElementChild.style.fontSize = "50px";
mainDiv.firstElementChild.style.color = "orange";
mainDiv.lastElementChild.parentElement.style.fontSize = "40px";
