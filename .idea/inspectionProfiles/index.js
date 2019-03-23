var newWin = window.open(index.html);

$(document).ready(function() {

    document.getElementById("userBtn").onclick = function(){

        console.log("Hello world");
        document.getElementById("toChange").innerText = "This is new text Woo!";


    }




});