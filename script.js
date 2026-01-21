var canvas = document.getElementById("mandelbrot");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var minX = -2.5;
var maxX = 1;
var minY = -1.5;
var maxY = 1.5;

var maxIterations = 1000;