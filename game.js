
var player = {"x": 0, "y": 0 ,"position_map": [0,0]}
var animation_time = 25
initGame();

function initGame() {
    element_map(test);
    render_minimap()
    console.log(document.getElementById("minimap").innerHTML)
    console.log(maps)
    document.getElementById("Character").style.left = "-500px"
    document.getElementById("Character").style.top = "-1200px"
    click_move();

    // Your game can start here, but define separate functions, don't write everything in here :)

}
