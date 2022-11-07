
// Change Character section font weight
function changeWeight(value){
    var characters = document.getElementById("ct");
    characters.style.fontWeight = value;

    var btn = document.getElementById("cwBtn");
    btn.textContent = "Weight: " + value;

    var ddCont = document.getElementById("cwddCont");
    ddCont.style.minWidth = "117px";
}

// Change Type Tester section font weight
function ttchangeWeight(value){
    var characters = document.getElementById("try");
    characters.style.fontWeight = value;

    var btn = document.getElementById("twBtn");
    btn.textContent = "Weight: " + value;

    var ddCont = document.getElementById("twddCont");
    ddCont.style.minWidth = "117px";
}

// Change Character section font weight
function changeSize(value){
    var characters = document.getElementById("ct");
    characters.style.fontSize = value;

    var btn = document.getElementById("csBtn");
    btn.textContent = "Size: " + value;

    var ddCont = document.getElementById("csddCont");
    ddCont.style.minWidth = "105px";

}

// Change Type Tester section font weight
function ttchangeSize(value){
    var characters = document.getElementById("try");
    characters.style.fontSize = value;

    var btn = document.getElementById("csBtn");
    btn.textContent = "Size: " + value;

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

// Toggle Type Test section font style | Italic || Normal |
var currToggle = 0;
function tttoggleItalic(){
    var characters = document.getElementById("try");

    if (currToggle == 0) {
        characters.style.fontStyle = "italic";
        currToggle = 1;
    }else{
        characters.style.fontStyle = "normal";
        currToggle = 0;
    }
    
}