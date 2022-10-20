
let player = { "x": 1, "y": 1, "position_map": [0, 0] };
initGame();
function initGame() {
    element_map(map1_A);
    render_minimap()
    document.getElementById("Character").style.left = "-400px"
    document.getElementById("Character").style.top = "-1100px"
    click_move();

}
// function toggleScreen(id, toggle) {
//     let element = document.getElementById(id);
//     let display = (toggle) ? 'block' : 'none';
//     element.style.display = display;
// }
// function startGame() {
//     this.toggleScreen('start-screen', false);
//     this.toggleScreen('container', true);
//     this.toggleScreen('Character', true);
//     initGame();
// }

