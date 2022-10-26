

function changeWeight(value){
    var characters = document.getElementById("ct");
    characters.style.fontWeight = value;

    var btn = document.getElementById("cwBtn");
    btn.textContent = "Weight: " + value;

    var ddCont = document.getElementById("cwddCont");
    ddCont.style.minWidth = "117px";
}

function alertTest(value) {
    alert(value);
}