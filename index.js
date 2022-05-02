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

let main = document.querySelector("main-div");
let sitesElement = document.querySelector(".sites");
let site1Element = document.querySelector(".site1");
let site2Element = document.querySelector(".site2");
let site3Element = document.querySelector(".site3");
let siteTitles = document.querySelector("h4");

let sites = [
  "https://google.com",
  "https://twitter.com",
  "https://www.youtube.com",
  "https://instagram.com",
];

site1Element.children[0].textContent = "Site 1";
site1Element.children[1].setAttribute("href", "https://google.com");
site1Element.children[1].children[0].setAttribute(
  "src",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
);
site1Element.children[1].children[0].setAttribute("alt", "image of your house");
site1Element.children[1].children[0].setAttribute("style", "padding: 10px;");

site2Element.children[0].textContent = "Site 2";
site2Element.children[1].setAttribute("href", "https://twitter.com");
site2Element.children[1].children[0].setAttribute(
  "src",
  "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);
site2Element.children[1].children[0].setAttribute(
  "alt",
  "image of your momma house"
);
site2Element.children[1].children[0].setAttribute("style", "padding: 10px;");

site3Element.children[0].textContent = "Site 3";
site3Element.children[1].setAttribute("href", "https://instagram.com");
site3Element.children[1].children[0].setAttribute(
  "src",
  "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);
site3Element.children[1].children[0].setAttribute(
  "alt",
  "image of your dog house"
);
site3Element.children[1].children[0].setAttribute("style", "padding: 10px;");

for (var i = 0; i < siteTitles.length; i++) {
  siteTitles[i].setAttribute(
    "style",
    "text-decoration: underline; padding-left: 10px; margin: 0;"
  );
}
