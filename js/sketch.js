/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function setup () {
  createCanvas(600, 600)
}

function draw () {
  background(255)
  translate(300, 500)
  const level = int(map(mouseX, 0, width, 0, 10))
  y(100, level)
}

function y (sz, level) {
  if (level > 0) {
    line(0, 0, 0, -sz)
    translate(0, -sz)
    rotate(radians(30))
    y(0.8 * sz, level - 1)
    rotate(radians(-60))
    y(0.8 * sz, level - 1)
    rotate(radians(30))
    translate(0, sz)
  }
}

function factorial (n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
