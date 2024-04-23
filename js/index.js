// the arrow will point in the direction of sammy's picture, which will change based on the breakpoint
let w;

window.onload = function () {
    w = window.innerWidth;
    if (w >= 1024) {
        console.log("more than 1024");
        document.querySelector("#arrow").innerHTML = "→";
    }
    else {
        console.log("less than 1024");
        document.querySelector("#arrow").innerHTML = "↓";
    }
};