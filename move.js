const runValue = 2

function charMove() {
    document.getElementById("Character-moves").src="sheet/_Run.png";
}
function charStop() {
    document.getElementById("Character-moves").src = "sheet/_Idle.png";
}
function up() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - runValue + "px"
    change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
    if (parseInt(document.getElementById("Character").style.top) < -1278){
      document.getElementById("Character").style.top = "-178px";
        player["position_map"][0] = player["position_map"][0]-1
        change_map()
    }
    charMove();
}
function upStop() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - runValue + "px"
    charStop();
}
function down() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + runValue + "px"
    change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
    if (parseInt(document.getElementById("Character").style.top) > -178){
      document.getElementById("Character").style.top = "-1278px";
        player["position_map"][0] = player["position_map"][0]-1
        change_map()
    }
    charMove();
}
function downStop() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + runValue + "px"
    charStop()
}
function left() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - runValue + "px"
    change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
    if (parseInt(document.getElementById("Character").style.left) < -542){
      document.getElementById("Character").style.left = "542px";
        player["position_map"][1] = player["position_map"][1]-1
        change_map()
    }
    charMove();
}
function leftStop() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - runValue + "px"
    charStop()
}

function right() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + runValue + "px"
    change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
    if (parseInt(document.getElementById("Character").style.left) > 542){
      document.getElementById("Character").style.left = "-542px";
        player["position_map"][1] = player["position_map"][1]+1
        change_map()
    }
    charMove();
}
function rightStop() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + runValue + "px"
    charStop()
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
    document.onkeydown = (e) => {
        e = e || window.event;
        if (e.keyCode === 38) setTimeout(() => {
            upStop()
        }, animation_time, up())
        else if (e.keyCode === 37) setTimeout(() => {
            leftStop()
        }, animation_time, left())
        else if (e.keyCode === 39) setTimeout(() => {
            rightStop()
        }, animation_time, right())
        else if (e.keyCode === 40) setTimeout(() => {
            downStop()
        }, animation_time, down())

    }
}
function change_map() {
}