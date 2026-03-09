var canvas = document.getElementById("mandelbrot");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var minX = -2.5;
var maxX = 1;
var minY = -1.5;
var maxY = 1.5;

var maxIterations = 1000;

function drawMandelbrot() {

    var image = ctx.createImageData(width, height);
    var data = image.data;

    for (var py = 0; py < height; py++) {
        for (var px = 0; px < width; px++) {

            var x0 = minX + (px / width) * (maxX - minX);
            var y0 = minY + (py / height) * (maxY - minY);

            var x = 0;
            var y = 0;

            var iteration = 0;

            while (x*x + y*y <= 4 && iteration < maxIterations) {
                var xtemp = x*x - y*y + x0;
                y = 2*x*y + y0;
                x = xtemp;
                iteration++;
            }

            var index = (py * width + px) * 4;

            if (iteration == maxIterations) {
                data[index] = 0;
                data[index+1] = 0;
                data[index+2] = 0;
                data[index+3] = 255;
            } else {
                data[index] = 255;
                data[index+1] = 255;
                data[index+2] = 255;
                data[index+3] = 255;
            }

        }
    }

    ctx.putImageData(image, 0, 0);
}

canvas.addEventListener("click", function(event) {

    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    var clickedX = minX + (mouseX / width) * (maxX - minX);
    var clickedY = minY + (mouseY / height) * (maxY - minY);

    var zoomFactor = 0.5;

    var rangeX = (maxX - minX) * zoomFactor;
    var rangeY = (maxY - minY) * zoomFactor;

    minX = clickedX - rangeX / 2;
    maxX = clickedX + rangeX / 2;
    minY = clickedY - rangeY / 2;
    maxY = clickedY + rangeY / 2;

    drawMandelbrot();
});

document.getElementById("zoomOutBtn").addEventListener("click", function () {
  var centerX = (minX + maxX) / 2;
  var centerY = (minY + maxY) / 2;

  var zoomOutFactor = 2;

  var rangeX = (maxX - minX) * zoomOutFactor;
  var rangeY = (maxY - minY) * zoomOutFactor;

  minX = centerX - rangeX / 2;
  maxX = centerX + rangeX / 2;
  minY = centerY - rangeY / 2;
  maxY = centerY + rangeY / 2;

  drawMandelbrot();
});

document.getElementById("resetBtn").addEventListener("click", function () {
  minX = -2.5;
  maxX = 1;
  minY = -1.5;
  maxY = 1.5;
  drawMandelbrot();
});

drawMandelbrot();