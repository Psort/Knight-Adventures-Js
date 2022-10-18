const runValue = 2

function charMove() {
    document.getElementById("Character-moves").src="sheet/_Run.png";
}
function charStop() {
    document.getElementById("Character-moves").src = "sheet/_Idle.png";
}
function up() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - runValue + "px"
    top = document.getElementById("Character").style.top
    left = document.getElementById("Character").style.left
    change_posiotion_in_table(top,left)
    charMove();
}
function upStop() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - runValue + "px"
    charStop();
}
function down() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + runValue + "px"
    top = document.getElementById("Character").style.top
    left = document.getElementById("Character").style.left
    change_posiotion_in_table(top,left)
    charMove();
}
function downStop() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + runValue + "px"
    charStop()
}
function left() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - runValue + "px"
    top = document.getElementById("Character").style.top
    left = document.getElementById("Character").style.left
    change_posiotion_in_table(top,left)
    charMove();
}
function leftStop() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - runValue + "px"
    charStop()
}

function right() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + runValue + "px"
    top = document.getElementById("Character").style.top
    left = document.getElementById("Character").style.left
    change_posiotion_in_table(top,left)
    charMove();
}
function rightStop() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + runValue + "px"
    charStop()
}
function change_posiotion_in_table(top,left) {
    left = parseInt(left)
    top = parseInt(top)
    console.log(left, top)

    for (let i = -1; i < 12; i++) {
        if (left > (-460 + (i * 100)) && left < (-360 + (i * 100))) console.log("x", player['x'] = (i + 1))
    }
    for (let i = -1; i < 12; i++) {
        if (top > (-1180 + (i * 100)) && top < (-1080 + (i * 100))) console.log("y", player['x'] = (i + 1))
    }
}