window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
    console.log("load the SVG");

    fetch("car_and_road.svg")
        .then(response => response.text())
        .then(svgData => {
            console.log("SVG loaded");
            document.querySelector("#thesvg").innerHTML = svgData;
        })
        .then(runAnimation);
}

let car = null;
let curve = null;
let currentPosition;

function runAnimation() {
    console.log("animate");
    car = document.querySelector("#car");
    car.classList.add("car-ride");
    // TODO: Build animation ...
}