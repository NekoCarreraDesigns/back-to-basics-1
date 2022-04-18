var canvas = document.getElementById("pageCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#FF0000";
context.fillRect(0, 0, 80, 80);
context.globalAlpha = 0.2;
context.fillStyle = "blue";
context.fillRect(50, 50, 75, 50);
context.fillStyle = "green";
context.fillRect(80, 80, 75, 50);
