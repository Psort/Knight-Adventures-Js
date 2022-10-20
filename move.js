const runValue = 5
const changePosition = change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
const y = 0
const x = 1

function try_collision(direction){
    let map = maps[player['position_map'][0]][player['position_map'][1]]
    let collision_blocks = ["water_vertical","water_horizontal",'block',"window",'wall',"water","water_2","water_left","water_merge","water_merge_2","water_right","waterfall","woda","woda_1","woda_2","woda_3","woda_4","wall_2","wall_3","ruins_2","flower_carpet_left_up","flower_carpet_up","flower_carpet_right_up","carpet_right_down","floor_up","picture2","fireplace","picture3","floor_right_up","night_stand","floor_right","carpet_right","carpet_left","table","picture1","dining_table_left","dining_table_center","dining_table_right","carpet_left_down","carpet2_left_down","food1","bed2","floor_left_flower","food2","closet2","closet1","carpet2_left","carpet2_right","mirror","tiles_up","toilet","floor_left_flower2","sofa","sink","tiles_right","tiles_left","tiles_down","tiles_right_down","carpet2_down","carpet2_right_down","floor_right_down","floor_right","floor_left","floor_left_down","bath_flower"]
    
    if(collision_blocks.includes(map[player['y']][player['x']]))dont_move(direction);
    if(map[player['y']][player['x']] == "temple")openBattle();
    if (map[player['y']][player['x']] == 'door') go_in_home();
    if (map[player['y']][player['x']] == 'floor_down') go_out_home();
    if (map[player['y']][player['x']] == 'gift1')take_gift(map,'i00','tiles_inside',"url(static/images/inventory/sword_with_border.png")
    if (map[player['y']][player['x']] == 'gift2')take_gift(map,'i01','carpet_inside',"url(static/images/inventory/health_with_border.png)")
    if (map[player['y']][player['x']] == 'gift3')take_gift(map,'i02','carpet2_inside',"url(static/images/inventory/power_with_border.png)")
    if (map[player['y']][player['x']] == 'gift4')take_gift(map,'i03','floor_inside',"url(static/images/inventory/gold_with_border.png)")
}
function take_gift(map,id,floor,item) {
    map[player['y']][player['x']] = floor
    element_map(buildingInterior)
    document.getElementById(id).style.backgroundImage = item
}

function dont_move(direction) {
    if (direction == 'up')
        document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top) + (runValue * 5) + "px";
    if (direction == 'down')
        document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top) - (runValue * 5) + "px";
    if (direction == 'left')
        document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left) + (runValue * 5) + "px";
    if (direction == 'right')
        document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left) - (runValue * 5) + "px";
}

function go_out_home() {
    maps[player['position_map'][0]][player['position_map'][1]] = map1_C;
    element_map(map1_C);
    player['x'] = 5;
    player['y'] = 4;
    document.getElementById("Character").style.top = "-785px";
    document.getElementById("Character").style.left = "-15px";
}

function go_in_home() {
    maps[player['position_map'][y]][player['position_map'][x]] = buildingInterior;
    element_map(buildingInterior);
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
    if (parseInt(document.getElementById("Character").style.top) < -1270) {
        document.getElementById("Character").style.top = "-185px";
        player["position_map"][y] = player["position_map"][y] - 1
        change_map()
    }


}
function down() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + runValue + "px"
    try_collision('down')
    change_posiotion_in_table() //changePosiotion
    if (parseInt(document.getElementById("Character").style.top) > -185){
        document.getElementById("Character").style.top = "-1270px";
        player["position_map"][y] = player["position_map"][y]+1
        change_map()
    }
}

function left() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - runValue + "px"
    try_collision('left')
    change_posiotion_in_table()//changePosiotion
    if (parseInt(document.getElementById("Character").style.left) < -535) {
        document.getElementById("Character").style.left = "535px";
        player["position_map"][x] = player["position_map"][x] +  -1
        change_map()
    }
}
function right() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + runValue + "px";
    try_collision('right');
    change_posiotion_in_table() //        changePosiotion
    if (parseInt(document.getElementById("Character").style.left) > 535){
      document.getElementById("Character").style.left = "-535px";
        player["position_map"][x] = player["position_map"][x]+1
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

    key_down(alias)
    key_up(alias)
}

function key_up(alias) {
    document.onkeyup = (e) => {
        e = e || window.event
        if (e.keyCode === alias["uparrow"]) up(null, charStop()) 
        else if (e.keyCode === alias["leftarrow"]) left(null, document.getElementById("Character-moves").src = "static/sheet/_Idleleft.png")
        else if (e.keyCode === alias["rightarrow"]) right(changePosition, charStop())
        else if (e.keyCode === alias["downarrow"]) down(changePosition, charStop())
        

    }
}

function key_down(alias) {
    document.onkeydown = (e) => {
        e = e || window.event
        if (e.keyCode === alias["uparrow"]) { up(changePosition, charMove())} 
        else if (e.keyCode === alias["leftarrow"]) { left(changePosition, document.getElementById("Character-moves").src = "static/sheet/_Runleft.png")} 
        else if (e.keyCode === alias["rightarrow"]) { right(changePosition, charMove())} 
        else if (e.keyCode === alias["downarrow"]) { down(null, charMove())} 
    }
}

function openBattle(){
    document.open("/index.html");
    document.write('<!doctype html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <link rel="icon" href="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=">\n' +
        '    <link rel="stylesheet" href="battlestyle.css">\n' +
        '    <script src="battle-logic.js"></script>\n' +
        '    <title>Battle</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div id="battlearena">\n' +
        '    <div id="Character">\n' +
        '       <img class="Character_shadow pixelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />\n' +
        '       <img id="Character-moves" class="Character_spritesheet pixelart face-down" src="static/sheet/_Idle.png" alt="Character" />\n' +
        '    </div>\n' +
        '    <div id="Sceleton">\n' +
        '        <img class="Sceleton_shadow pixelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />\n' +
        '        <img id="Skeleton-moves" class="Sceleton_spritesheet pixelart face-down" src="static/sheet/Skeleton%20Idle.png" alt="Sceleton" />\n' +
        '    </div></div>\n' +
        '<div id="battlescore">\n' +
        '    <button id="button-attack" onclick="attackAnimation()">Attack</button>\n' +
        '    <button id="button-goaway" role="button">Go away</button>\n' +
        '    <div id="battleTable">\n' +
        '    <table>\n' +
        '        <tr>\n' +
        '            <th><h1>Knight</h1></th>\n' +
        '            <th><h1>Skeleton</h1></th>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <h1><th id="characterHp"></th></h1>\n' +
        '            <h1><th id="SkeletonHp"></th></h1>\n' +
        '        </tr>\n' +
        '        <tr>\n' +
        '            <th id="characterAttack"></th>\n' +
        '            <th id="skeletonAttack"></th>\n' +
        '        </tr>\n' +
        '    </table>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<script src="battle-game.js"></script>\n' +
        '</body>\n' +
        '</html>')
}