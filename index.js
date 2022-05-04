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

let body = document.body;
let h1Element = document.createElement("h1");
let h2Element = document.createElement("h2");
let infoElement = document.createElement("div");
let imgElement = document.createElement("img");
let puppyElement = document.createElement("div");
let nameElement = document.createElement("div");
let favoriteElement = document.createElement("div");
let listElement = document.createElement("ol");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

let listItems = document.getElementsByTagName("li");

h1Element.textContent = "This was made dynamically with no html";
h2Element.textContent = "this content used js to make it";
puppyElement.textContent = "this is my puppy";
nameElement.textContent = "his name is snoopy";
favoriteElement.textContent = "my favorite foods are: ";
li1.textContent = "Burritos";
li2.textContent = "Pizza";
li3.textContent = "Cheesesteaks";
li4.textContent = "Baked Ziti";

body.appendChild(h1Element);
body.appendChild(h2Element);
body.appendChild(infoElement);
infoElement.appendChild(imgElement);
infoElement.appendChild(puppyElement);
infoElement.appendChild(nameElement);
body.appendChild(favoriteElement);
favoriteElement.appendChild(listElement);
listElement.appendChild(li1);
listElement.appendChild(li2);
listElement.appendChild(li3);
listElement.appendChild(li4);

h1Element.setAttribute(
  "style",
  "margin: auto; width: 50%; text-align: center;"
);
h2Element.setAttribute(
  "style",
  "margin: auto; width: 50%; text-align: center;"
);
infoElement.setAttribute(
  "style",
  "margin: auto; width: 50%; text-align: center;"
);
imgElement.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1555505015-d310037140cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJlYWdsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
);
imgElement.setAttribute("height", 200);
imgElement.setAttribute("width", 200);
nameElement.setAttribute("style", "font-size; 25px; text-align: center;");
puppyElement.setAttribute("style", "font-size: 25px; text-align: center;");
favoriteElement.setAttribute("style", "font-size: 20px;");
listElement.setAttribute(
  "style",
  "background: rgb(25, 123, 124); padding: 20px;"
);
listItems[0].setAttribute(
  "style",
  "color: rgb(255, 255, 255); background: rgb(0, 0, 255); padding: 5px; margin-left: 3px;"
);
listItems[1].setAttribute(
  "style",
  "color: rgb(255, 255, 255); background: rgb(255, 255, 0); padding: 5px; margin-left: 3px;"
);
listItems[2].setAttribute(
  "style",
  "color: rgb(255, 255, 255); background: rgb(255, 0, 0); padding: 5px; margin-left: 3px;"
);
listItems[3].setAttribute(
  "style",
  "color: rgb(255, 255, 255); background: rgb(0, 255, 0); padding: 5px; margin-left: 3px;"
);

let mainTimerElement = document.querySelector("#main-timer");
let timeElement = document.querySelector(".time");

let secondsLeft = 10;

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeElement.textContent = secondsLeft + " seconds left until surprise";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeElement.textContent = " ";

  let imgEl = document.createElement("img");

  imgEl.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  );
  mainTimerElement.appendChild(imgEl);
}

setTime();

let eventType = document.querySelector("#event-type");
let mouseEventsElement = document.querySelector("#click-events");
let keyEventsElement = document.querySelector("#key-events");

function toggleDisplay(event) {
  let value = event.target.value;
  if (value === "keydown") {
    mouseEventsElement.classList.add("hide");
    keyEventsElement.classList.remove("hide");
  } else {
    mouseEventsElement.classList.remove("hide");
    keyEventsElement.classList.add("hide");
  }
}

function keydown(event) {
  let keyPress = event.key;
  let keyCode = event.code;
  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyup() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

function click(event) {
  let target = event.target.textContent;
  let x = event.clientX;
  let y = event.clientY;
  document.querySelector("#target").textContent = target;
  document.querySelector("#x").textContent = x;
  document.querySelector("#y").textContent = y;
}

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
document.addEventListener("click", click);
eventType.addEventListener("change", toggleDisplay);

let carousel = document.querySelector(".carouselbox");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
carousel.style.backgroundImage = "url('https://picsum.photos/200300/')";
let index = 0;
let images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];

let currentImage;
function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

next.onclick = function (event) {
  event.stopPropagation();

  navigate(1);
};
prev.onclick = function (event) {
  event.stopPropagation();

  navigate(-1);
};

navigate(0);

let addBtn = document.querySelector("#add-btn");
let peopleListEl = document.querySelector("#people-list");
let personNameEl = document.querySelector("#name");
let modalEl = document.querySelector("#modal-container");
let modalNameEl = document.querySelector("#modal-name");
let descriptionEl = document.querySelector("#description");
let closeEl = document.querySelector(".close");
let saveBtn = document.querySelector("#save");

let people = [{ name: "bob" }];
let currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  let name = personNameEl.value;
  let li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + "<button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  if (event.target.matches("button")) {
    event.preventDefault();
    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id);
    let name = people[currentId].name;
    let description = people[currentId].description;
    modalNameEl.textContent = name;
    if (description) {
      descriptionEl.value = description;
    } else {
      description.value = " ";
    }
  }
}

closeEl.addEventListener("click", close);
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});

addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener("click", handleClick);
document.addEventListener("click", function (event) {
  if (event.target === modalEl) {
    close();
  }
});
