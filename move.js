const runValue = 2

function charMove() {
    document.getElementById("Character-moves").src="sheet/_Run.png";
}
function charStop() {
    document.getElementById("Character-moves").src = "sheet/_Idle.png";
}
function up() {
        console.log(!edge_map("up"))
    if (!edge_map("up")){
        document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - runValue + "px"
        try_collision("up")
        change_posiotion_in_table()

    }
    if (parseInt(document.getElementById("Character").style.top) < -1278){
        document.getElementById("Character").style.top = "-178px";
        player["position_map"][0] = player["position_map"][0]-1
        change_map()
    }
    charMove();
}
function upStop() {
        charStop();
}
function down() {
    if (!edge_map("down")){
        document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + runValue + "px"
        try_collision('down')
        change_posiotion_in_table()

    }

    if (parseInt(document.getElementById("Character").style.top) > -178){
        document.getElementById("Character").style.top = "-1278px";
        player["position_map"][0] = player["position_map"][0]+1
        change_map()
    }
    charMove();
}
function downStop() {
    charStop()
}
function left() {
    if (!edge_map("left")){
        document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - runValue + "px"
        try_collision('left')
        change_posiotion_in_table()
    }

    if (parseInt(document.getElementById("Character").style.left) < -542){
        document.getElementById("Character").style.left = "542px";
        player["position_map"][1] = player["position_map"][1]-1
        change_map()
    }
    charMove();
}
function leftStop() {
    charStop()
}

function right() {
    if (!edge_map("right")){
        document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + runValue + "px"
        try_collision('right')
        change_posiotion_in_table()

    }

    if (parseInt(document.getElementById("Character").style.left) > 542){
      document.getElementById("Character").style.left = "-542px";
        player["position_map"][1] = player["position_map"][1]+1
        change_map()
    }
    charMove();
}
function rightStop() {
    charStop()
}

function change_posiotion_in_table() {
    let left = parseInt(document.getElementById("Character").style.left)
    let top = parseInt(document.getElementById("Character").style.top)
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
    console.log(player)
    let all_maps = [test,elementX,elementI,element_line,elementL_left_up,elementL_left_down,elementL_right_down,elementL_right_up]
    let random_map = all_maps[Math.floor(Math.random()*all_maps.length)]
    if (maps[player['position_map'][0]][player['position_map'][1]] == "") maps[player['position_map'][0]][player['position_map'][1]] = random_map;
    element_map(maps[player['position_map'][0]][player['position_map'][1]]);
}
function try_collision(direction){
    let map = maps[player['position_map'][0]][player['position_map'][1]]
    if(map[player['x']][player['y']] == 'water'){
        if(direction == 'up')document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + (runValue*4) + "px"
        if(direction == 'down') document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - (runValue*4) + "px"
        if(direction == 'left') document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + (runValue*4) + "px"
        if(direction == 'right') document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - (runValue*4) + "px"
    }

}
function edge_map(edge){
    if (edge == "up" && player['position_map'][1]==0 && parseInt(document.getElementById("Character").style.top) < -1276 ) return false
    if (edge == "down" && player['position_map'][1]==9 && parseInt(document.getElementById("Character").style.top) == -180 ) return false
    if (edge == "left" && player['position_map'][0]==0 && parseInt(document.getElementById("Character").style.left) == -540 ) return false
    if (edge == "right" && player['position_map'][0]==9 && parseInt(document.getElementById("Character").style.left) == 540 ) return false
}