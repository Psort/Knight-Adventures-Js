
var player = {"x": 0, "y": 0 ,"position_map": [0,0]}
var animation_time = 25
initGame();

function initGame() {

    element_map(level_1_mapB);
    console.log(maps)
    document.getElementById("Character").style.left = "-500px"
    document.getElementById("Character").style.top = "-1200px"
    click_move();

    // Your game can start here, but define separate functions, don't write everything in here :)
}

function toggleScreen(id,toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? 'block' : 'none';
    element.style.display = display;

}

function startGame(){
    this.toggleScreen('start-screen',false);
    this.toggleScreen('container',true);
    this.toggleScreen('Character',true);
    initGame();
}

