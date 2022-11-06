// Run Script when user scrolls
window.onscroll = function () {
    scrollFunction();
};


// Display and rotate topBtn when user scrolls down 20px
function scrollFunction() {
    var button = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
        scrollRotate();
    } else {
        button.style.display = "none";
        alert(element.currenscroll)
    }
}


// Rotates the image in the button
function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}
