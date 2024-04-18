// on adoption anniversary, this text can be clicked and show an image of sammy's anniversary illustration
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
today = mm + '/' + dd;

window.onload = function () {
if (today == "12/06") {
    document.querySelector("#insta").computedStyleMap.display = "block";
}
else {
    console.log("Today is not Sammy's adoption anniversary");
}
}