const runValue = 7
const changePosition = change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
function charMove() {
    document.getElementById("Character-moves").src="sheet/_Run.png";
}
function charStop() {
    document.getElementById("Character-moves").src = "sheet/_Idle.png";
}
function up(changePosiotion, charMovement) {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - runValue + "px"
    changePosiotion
    charMovement;
}
function down(changePosiotion, charMovement) {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + runValue + "px"
    changePosiotion
    charMovement;
}
function left(changePosiotion, charMovement) {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - runValue + "px"
    changePosiotion
    charMovement;
}
function right(changePosiotion, charMovement) {
    if (!edge_map("right")){
       document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + runValue + "px"
        changePosiotion
    }

    if (parseInt(document.getElementById("Character").style.left) > 542){
      document.getElementById("Character").style.left = "-542px";
        player["position_map"][1] = player["position_map"][1]+1
        change_map()
    }
    charMovement;
}

function change_posiotion_in_table(top,left) {
    left = parseInt(left)
    top = parseInt(top)
    for (let i = -1; i < 12; i++) {
        if (left > (-460 + (i * 100)) && left < (-360 + (i * 100))) player['x'] = (i + 1)
    }
    for (let i = -1; i < 12; i++) {
        if (top > (-1180 + (i * 100)) && top < (-1080 + (i * 100))) player['y'] = (i + 1)
    }
}
function click_move() {
    const alias = {
        "uparrow": 38,
        "downarrow": 40,
        "leftarrow": 37,
        "rightarrow": 39
    }

    document.onkeydown = (e) => {
        e = e || window.event;
        if (e.keyCode === alias["uparrow"]) {up(changePosition, charMove())}
        else if (e.keyCode === alias["leftarrow"]) {left(changePosition, document.getElementById("Character-moves").src="sheet/_Runleft.png")}
        else if (e.keyCode === alias["rightarrow"]) {right(changePosition, charMove())}
        else if (e.keyCode === alias["downarrow"]) {down(null, charMove())}
    }
    document.onkeyup = (e) => {
        e = e || window.event;
        if (e.keyCode === alias["uparrow"]) {
            up(null, charStop())
        }else if (e.keyCode === alias["leftarrow"]){
            left(null, document.getElementById("Character-moves").src="sheet/_Idleleft.png")
        }else if (e.keyCode === alias["rightarrow"]){
            right(changePosition, charStop())
        }else if (e.keyCode === alias["downarrow"]){
            down(changePosition, charStop())
        }

    }
}
function change_map() {
}

function edge_map(edge){
    console.log(player)
    if (edge == "up" && player['position_map'][1]==0 && parseInt(document.getElementById("Character").style.top) < -1276 ) return false
    if (edge == "down" && player['position_map'][1]==9 && parseInt(document.getElementById("Character").style.top) == -180 ) return false
    if (edge == "left" && player['position_map'][0]==0 && parseInt(document.getElementById("Character").style.left) == -540 ) return false
    if (edge == "right" && player['position_map'][0]==9 && parseInt(document.getElementById("Character").style.left) == 540 ) return false
}