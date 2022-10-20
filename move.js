const runValue = 5
const changePosition = change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
const x = 0
const y = 1


function try_collision(direction){
    let map = maps[player['position_map'][0]][player['position_map'][1]]
    let collision_blocks = ["water_vertical","water_horizontal",'block','wall',"water","water_2","water_left","water_merge","water_merge_2","water_right","waterfall","woda","woda_1","woda_2","woda_3","woda_4","wall_2","wall_3","riuns_1","ruins_2"]
    if(collision_blocks.includes(map[player['y']][player['x']]))  {
        if(direction == 'up')document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + (runValue*5) + "px"
        if(direction == 'down') document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - (runValue*5) + "px"
        if(direction == 'left') document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + (runValue*5) + "px"
        if(direction == 'right') document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - (runValue*5) + "px"
    }
}

function charMove() {
    document.getElementById("Character-moves").src="static/sheet/_Run.png";
}
function charStop() {
    document.getElementById("Character-moves").src = "static/sheet/_Idle.png";
}
function up() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top) - runValue + "px"
    try_collision("up")
    change_posiotion_in_table()
    if (parseInt(document.getElementById("Character").style.top) < -1275) {
        document.getElementById("Character").style.top = "-180px";
        player["position_map"][x] = player["position_map"][x] - 1
        change_map()
    }


}
function down() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + runValue + "px"
    try_collision('down')
    change_posiotion_in_table() //changePosiotion
    if (parseInt(document.getElementById("Character").style.top) > -180){
        document.getElementById("Character").style.top = "-1275px";
        player["position_map"][x] = player["position_map"][x]+1
        change_map()
    }
}

function left() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - runValue + "px"
    try_collision('left')
    change_posiotion_in_table()//changePosiotion
    if (parseInt(document.getElementById("Character").style.left) < -540) {
        document.getElementById("Character").style.left = "540px";
        player["position_map"][y] = player["position_map"][y] +  -1
        change_map()
    }
}
function right() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + runValue + "px";
    try_collision('right');
    change_posiotion_in_table() //        changePosiotion
    if (parseInt(document.getElementById("Character").style.left) > 540){
      document.getElementById("Character").style.left = "-540px";
        player["position_map"][y] = player["position_map"][y]+1
        change_map()
    }
}

function change_posiotion_in_table() {
    let left = parseInt(document.getElementById("Character").style.left)
    let top = parseInt(document.getElementById("Character").style.top)
    for (let i = 0; i < 11; i++) {
        if (left > (-560 + (i * 100)) && left < (-360 + (i * 100))) player['x'] = (i )
    }
    for (let i = 0; i < 11; i++) {
        if (top > (-1280 + (i * 100)) && top < (-1080 + (i * 100))) player['y'] = (i)
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
        else if (e.keyCode === alias["leftarrow"]) {left(changePosition, document.getElementById("Character-moves").src="static/sheet/_Runleft.png")}
        else if (e.keyCode === alias["rightarrow"]) {right(changePosition, charMove())}
        else if (e.keyCode === alias["downarrow"]) {down(null, charMove())}
    }
    document.onkeyup = (e) => {
        e = e || window.event;
        if (e.keyCode === alias["uparrow"]) {
            up(null, charStop())
        }else if (e.keyCode === alias["leftarrow"]){
            left(null, document.getElementById("Character-moves").src="static/sheet/_Idleleft.png")
        }else if (e.keyCode === alias["rightarrow"]){
            right(changePosition, charStop())
        }else if (e.keyCode === alias["downarrow"]){
            down(changePosition, charStop())
        }

    }
}

