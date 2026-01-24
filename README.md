# Mandelbrot Set Visualizer

This project is a simple interactive Mandelbrot set visualizer built with plain HTML, CSS, and JavaScript.



## What Is the Mandelbrot Set?

The Mandelbrot set is a famous fractal defined in the complex plane.

For each complex number `c`, we iterate:

`z(n+1) = z(n)^2 + c`, starting with `z(0) = 0`

If the sequence stays bounded (does not run away to infinity), that point belongs to the Mandelbrot set; in this visualizer those pixels are colored black. If it escapes, it is outside the set, and those pixels are colored with a smooth HSL gradient based on how quickly they escape.

## Screenshots

![Default view](img/mandelbrot%20set%20ss%20%281%29.png)
![Zoomed view](img/mandelbrot%20set%20ss%20%282%29.png)
![Deep zoom view](img/mandelbrot%20set%20ss%20%283%29.png)

## Why It Is Interesting

- It has infinite detail: zooming reveals new structures forever.
- It shows self-similarity and complex boundary behavior.
- It is a classic example of how simple math rules create rich patterns.
- There is repetition of patterns at regualr intervals.



## How This Project Renders the Set

1. Map each canvas pixel to a coordinate `(x0, y0)` in the complex plane.
2. Iterate `z = z^2 + c` until:
- `|z|^2 > 4` (escaped), or
- `maxIterations` is reached (treated as inside).
3. Color:
- Inside points: black.
- Escaped points: smooth gradient using iteration-based coloring and HSL to RGB conversion.

## Controls

- Click on canvas: zoom in at clicked location.
- `Zoom Out`: zoom out from current center.
- `Reset`: return to initial bounds:
- `x: -2.5 to 1`
- `y: -1.5 to 1.5`