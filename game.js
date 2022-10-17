const player = document.getElementById("player");
player.style.left = '0px'
function jump (){
    if(player.classList != "jump"){
      player.classList.add('jump')
    setTimeout(function (){
        player.classList.remove('jump')
    },300)
    }

}
function right (){
    if (parseInt(player.style.left) <= 500) {
        player.style.left = parseInt(player.style.left) + 50 + 'px'
    }
}
function left (){
    if (parseInt(player.style.left) >= 50){
        player.style.left = parseInt(player.style.left) - 50 +'px'
    }
}
document.onkeydown = (e) => {
  e = e || window.event;
  if (e.keyCode === 38) jump()
  else if (e.keyCode === 37) left()
  else if (e.keyCode === 39) right()

}


// initGame();
//
// function initGame() {
//
//     // Your game can start here, but define separate functions, don't write everything in here :)
//
// }


