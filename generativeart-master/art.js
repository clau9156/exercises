"use strict";

// 1 100 300 20 box width and height
for(let i=100; i<300; i+=20) {
    // create boxes!
    const box = document.createElement("div");
    box.classList.add("box");

    box.style.width = i + "px";
    box.style.height = i + "px";
    document.querySelector("#artwork1").append(box);
}

// 2 0 90 10 box rotate
// for(let i=0; i<90; i+=10) {
    // create rotating boxs!
    // const box = document.createElement("div");
    // let width = 20 + "px";
    // let height = 20 + "px";
    // box.classList.add("box");
//     // `translate(${i}-50)`;
//     // box.style.transform = rotate(i + deg);
//     // box.style.transform = 'rotate(${i}deg)';
//     box.style.transform = rotate(i + "deg");
    // box.style.rotate = i + "deg";
    // box.style.width = 10 + "px";
    // box.style.height = 10 + "px";
    // box.style.transform = rotate("90" + deg);
    // document.querySelector("artwork2").append(box);
// } 
'rotate(' + this.options.rotationAngle + 'deg)'
// 3 0 200 10 circle width and height
for(let i=0; i<200; i+=10) {
    // create circles!
    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.style.width = i + "px";
    circle.style.height = i + "px";
    document.querySelector("#artwork3").append(circle);
}

// 4 -90 90 20 box translate x and y
// for(let i=-90; i<90; i=20) {
    // box translate x and y
    // const box = document.createElement("div");
//     // box.style.transform = `translateX(${i} + "px")`;
//     // box.style.transform = `translateY(${i} + "px")`;
//     // box.style.transform = translate(${i}x,${i}y);
//     box.style.transform = translate(i , i);
//     document.querySelector("#artwork4").append(box);
// }


// 5 1 512 *2 circle width and height
for(let i=1; i<512; i*=2) {
    // create circles *2 space!
    const circle = document.createElement("div");
    circle.classList.add("circle");

    circle.style.width = i + "px";
    circle.style.height = i + "px";
    document.querySelector("#artwork5").append(circle);
}

// 6 -20 45 5 circle translate x-50 and rotate*4
// for (let i=-20; i<45; i+=5) {
//     // create circles into ranbow shape!
//     const circle = document.createElement("div");
//     circle.classList.add("circle");

//     circle.style.transform = `translate(${i}-50)`;
//     // circle.style.transform = rotate;
//     document.querySelector("#artwork6").append(circle);
// }

// 7 0 200 10 circle width, height, translate x and -y/2


// 8 50 200 10 box width, height, translate x/2 and rotate


// 9 50 200 30 box and circle width and height
for(let i=50; i<200; i+=30) {
    // create boxes!
    const box = document.createElement("div");
    const circle = document.createElement("div");
    box.classList.add("box");
    circle.classList.add("circle");

    box.style.width = i + "px";
    box.style.height = i + "px";
    circle.style.width = i + "px";
    circle.style.height = i + "px";
    document.querySelector("#artwork9").append(box);
    document.querySelector("#artwork9").append(circle);
}