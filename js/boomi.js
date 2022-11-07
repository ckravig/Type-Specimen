
function talk(){
    var dBox = document.getElementById("dbText1");

    // if (dBox.style.display == 'none') {
    //     dBox.style.display = 'block';
    // }else{
    //     dBox.style.display = 'none';
    // }

    dBox.style.display = 'none';

    dBox.textContent = "Click on me " +
    "in the bottom right!";

    setTimeout(() => {  dBox.style.display = 'block'; }, 10);


    

    // dBox.style.animationPlayState="paused";

    // dBox.style.animationPlayState="running";
}