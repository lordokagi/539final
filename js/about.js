// on adoption anniversary, show sammy's anniversary illustration
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
today = mm + '/' + dd;

window.onload = function () {
    if (today == "12/06") {
        document.querySelector("#painting").innerHTML = "<img src='images/sammy-letmedrawurdogs.jpg' alt='A screenshot of an instagram post of a drawing of Sammy, a small, white dog, on a green background. The post caption wishes a happy adoption anniversary.'>";
    }
    else {
        console.log("Today is not Sammy's adoption anniversary");
    }
}
