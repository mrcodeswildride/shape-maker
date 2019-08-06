var sizeInput = document.getElementById("size");
var lineButton = document.getElementById("line");
var squareButton = document.getElementById("square");
var rightTriangleButton = document.getElementById("rightTriangle");
var isoscelesTriangleButton = document.getElementById("isoscelesTriangle");
var box = document.getElementById("box");

lineButton.addEventListener("click", makeLine);
squareButton.addEventListener("click", makeSquare);
rightTriangleButton.addEventListener("click", makeRightTriangle);
isoscelesTriangleButton.addEventListener("click", makeIsoscelesTriangle);

function makeLine() {
    var size = sizeInput.value.trim();

    if (!isNaN(size)) {
        box.innerHTML = "";

        for (var i = 0; i < size; i++) {
            draw(i, 0);
        }
    }
}

function makeSquare() {
    var size = sizeInput.value.trim();

    if (!isNaN(size)) {
        box.innerHTML = "";

        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                draw(j, i);
            }
        }
    }
}

function makeRightTriangle() {
    var size = sizeInput.value.trim();

    if (!isNaN(size)) {
        box.innerHTML = "";

        for (var i = 0; i < size; i++) {
            for (var j = i; j < size; j++) {
                draw(j, i);
            }
        }
    }
}

function makeIsoscelesTriangle() {
    var size = sizeInput.value.trim();

    if (!isNaN(size)) {
        box.innerHTML = "";

        for (var i = 0; i < size; i++) {
            for (var j = i / 2; j < size - (i / 2); j++) {
                draw(j, i);
            }
        }
    }
}

function draw(x, y) {
    var square = document.createElement("div");
    square.classList.add("square");
    square.style.left = (x * 10) + "px";
    square.style.top = (y * 10) + "px";
    box.append(square);
}
