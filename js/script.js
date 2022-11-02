
// Change Character section font weight
function changeWeight(value){
    var characters = document.getElementById("ct");
    characters.style.fontWeight = value;

    var btn = document.getElementById("cwBtn");
    btn.textContent = "Weight: " + value;

    var ddCont = document.getElementById("cwddCont");
    ddCont.style.minWidth = "117px";
}

// Change Character section font weight
function changeSize(value){
    var characters = document.getElementById("ct");
    characters.style.fontSize = value;

    var btn = document.getElementById("csBtn");
    btn.textContent = "Size: " + value + "pt";

    var ddCont = document.getElementById("csddCont");
    ddCont.style.minWidth = "105px";
}

// Toggle character section font style | Italic || Normal |
var currToggle = 0;
function toggleItalic(){
    var characters = document.getElementById("ct");

    if (currToggle == 0) {
        characters.style.fontStyle = "italic";
        currToggle = 1;
    }else{
        characters.style.fontStyle = "normal";
        currToggle = 0;
    }
    
}