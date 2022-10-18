
var player = {"x": 0, "y": 0,}
var animation_time = 25
initGame();

function initGame() {
    element_map(test);
    document.getElementById("Character").style.left = "-500px"
    document.getElementById("Character").style.top = "-1200px"
    document.onkeydown = (e) => {
      e = e || window.event;
      if (e.keyCode === 38) setTimeout(() => {upStop()},animation_time, up())
      else if (e.keyCode === 37) setTimeout(() => {leftStop()},animation_time, left())
      else if (e.keyCode === 39) setTimeout(() => {rightStop()},animation_time, right())
      else if (e.keyCode === 40) setTimeout(() => {downStop()},animation_time, down())

    }

    // Your game can start here, but define separate functions, don't write everything in here :)

}
