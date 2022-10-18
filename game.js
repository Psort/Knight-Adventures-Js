
var player = {"x": 0, "y": 0,}
function change_posiotion_in_table(top,left) {
    left = parseInt(left)
    top = parseInt(top)
    console.log(left,top)

    for (let i = -1; i < 12; i++) {
        if(left > (-460+(i*100)) && left < (-360+(i*100)))console.log("x",player['x']=(i+1))
    }
    for (let i = -1; i < 12; i++) {
        if(top > (-1180+(i*100)) && top < (-1080+(i*100)) )console.log("y",player['x']=(i+1))
    }


}


initGame();

function initGame() {
    element_map(test);
    document.getElementById("Character").style.left = "-500px"
    document.getElementById("Character").style.top = "-1200px"
    document.onkeydown = (e) => {
        e = e || window.event;
        if (e.keyCode === 38) up()
        else if (e.keyCode === 37) left()
        else if (e.keyCode === 39) right()
        else if (e.keyCode === 40) down()
    }


}
