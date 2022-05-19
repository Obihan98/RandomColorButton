document.getElementById("my-button").onclick = function(){
    var color = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + color;
}