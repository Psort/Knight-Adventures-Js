
let player = { "x": 1, "y": 1, "position_map": [0, 0] };
initGame();
function initGame() {
    element_map(map1_A);
    render_minimap();
    minimap_light_up()
    render_inventory()
    document.getElementById("Character").style.left = "-400px"
    document.getElementById("Character").style.top = "-1100px"
    click_move();
}

