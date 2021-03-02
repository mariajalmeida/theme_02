window.addEventListener("DOMContentLoaded", start);

async function start() {
    let elementToPaint = await fetch("shoe-01.svg");
    let mySvg = await elementToPaint.text();
    document.querySelector("section").innerHTML = mySvg;
    chooseDetail();
}

function chooseDetail() {
    document.querySelectorAll("g").forEach(g => {
        g.addEventListener("click", rememberChoice);
    })
}


let choice = "";

function rememberChoice(event) {
    const shoeLaces = document.querySelector("#shoe-laces path");
    const middle = document.querySelector("#middle path");
    const leftRightI = document.querySelector("#left-right path");
    const stripes = document.querySelector("#stripes path");
    const front = document.querySelector("#front-piece path");
    const bottom = document.querySelector("#bottom path");

    console.log(event.target);
    if (event.target === shoeLaces) {
        choice = shoeLaces;
    } else if (event.target === middle) {
        choice = middle;
    } else if (event.target === leftRightI) {
        choice = leftRightI;
    } else if (event.target === stripes) {
        choice = stripes;
    } else if (event.target === front) {
        choice = front;
    } else if (event.target === bottom) {
        choice = bottom;
    } else {
        choice = event.target;
    }

    chooseColour();
}

function chooseColour() {
    const btn = document.querySelectorAll(".btn");

    btn.forEach(b => {
        b.addEventListener("click", colourChosen);
    })

    function colourChosen(event) {
        if (event.target === btn[0]) {
            console.log(choice);
            choice.style.fill = "brown";
        } else if (event.target === btn[1]) {
            choice.style.fill = "rgb(22, 111, 184)";
        } else if (event.target === btn[2]) {
            choice.style.fill = "rgb(209, 127, 50)";
        } else if (event.target === btn[3]) {
            choice.style.fill = "rgb(0, 128, 79)";
        } else if (event.target === btn[4]) {
            choice.style.fill = "#000";
        } else if (event.target === btn[5]) {
            choice.style.fill = "#fff";
        } else if (event.target === btn[6]) {
            choice.style.fill = "rgb(218, 44, 151)";
        } else if (event.target === btn[7]) {
            choice.style.fill = "rgb(230, 211, 48)";
        } else {
            console.log("nope");
        }
    }

}