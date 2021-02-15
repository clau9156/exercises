"use strict";
// CSS to RGB
const rgb = "rgb(192, 13, 1)";
function cssToRgb(rgb) {
    let numbers = rgb.replace("rgb(", "").replace(")", "").replaceAll(" ", "");
    numbers = numbers.split(",");
    let r = parseInt(numbers[0]);
    let g = parseInt(numbers[1]);
    let b = parseInt(numbers[2]);

    console.log(`rgb: ${r}, ${g}, ${b}`);
}
cssToRgb(rgb);

// hex to rgb
const hexColor = "#bada55";
function colorConvert(hexColor) {
    let r = hexColor.substring(1, 3);
    let g = hexColor.substring(3, 5);
    let b = hexColor.substring(5, 7);

    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    console.log(`rgb: ${r}, ${g}, ${b}`);
}

colorConvert(hexColor);

// rgb to hex
const r = 186;
const g = 218;
const b = 85;

function colorRgbToHex(r, g, b) {
    const hexR = r.toString(16);
    const hexG = g.toString(16);
    const hexB = b.toString(16);

    console.log(`#${hexR}${hexG}${hexB}`); 
}

colorRgbToHex(r, g, b);