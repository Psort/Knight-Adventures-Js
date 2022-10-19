const attackButton = document.getElementById('button-attack');
const goAwayButton = document.getElementById('button-goaway');

let characterStats = {
    "health": 300,
    "attack": 100
}
let skeletonStats = {
    "health": 200,
    "attack": 100
}
function attackAnimation(){

    // document.getElementById('characterHp').innerText = `hp:${characterStats["health"]}`
    attackphase()
    skeletonAttackPhase()
    skeletonStats["health"] -= characterStats["attack"]
    characterStats["health"] -= skeletonStats["attack"]
    healthDisplay()
    if (skeletonStats["health"] <= 0) {
        setTimeout(() => {
            alert("You have won!");
            document.open("/index.html");
            document.write('<!DOCTYPE html>\n' +
                '<html lang="en">\n' +
                '<head>\n' +
                '    <title>Javascript Game</title>\n' +
                '    <meta charset="UTF-8">\n' +
                '    <!-- http://proger.i-forge.net/The_smallest_transparent_pixel/ -->\n' +
                '    <link rel="icon" href="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=">\n' +
                '    <link rel="stylesheet" href="style.css">\n' +
                '</head>\n' +
                '\n' +
                '<body>\n' +
                '    <div id="container">\n' +
                '    </div>\n' +
                '    <div id="Character">\n' +
                '       <img class="Character_shadow pixelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />\n' +
                '       <img id="Character-moves" class="Character_spritesheet pixelart face-down" src="sheet/_Idle.png" alt="Character" />\n' +
                '    </div>\n' +
                '<script src="move.js"></script>\n' +
                '<script src="maps.js"></script>\n' +
                '<script src="game.js"></script>\n' +
                '</body>\n' +
                '</html>')
        }, 5000)
    }
}

function attackphase(){
    document.getElementById("Character-moves").src="sheet/Attack.png"
    document.getElementById("Character").style.marginLeft= "550px"
    setTimeout(() => {  document.getElementById("Character-moves").src="sheet/_Idle.png";
    document.getElementById("Character").style.marginLeft= "325px"}, 1000)
}
function skeletonAttackPhase(){
    setTimeout(() => {  document.getElementById("Skeleton-moves").src="sheet/ats3.png";
     document.getElementById("Sceleton").style.marginLeft= "200px";
     document.getElementById("Sceleton").style.top= "-270px"}, 2000)
    setTimeout(() => {  document.getElementById("Skeleton-moves").src="sheet/Skeleton Idle.png";
     document.getElementById("Sceleton").style.marginLeft= "325px";
     document.getElementById("Sceleton").style.top= "-310px"}, 3000)
}
function healthDisplay(){
        setTimeout(() => {
        document.getElementById('characterHp').innerText = `hp:${characterStats["health"]}`;
        document.getElementById('SkeletonHp').innerText = `hp:${skeletonStats["health"]}`;
        document.getElementById('characterAttack').innerText = `attack:${characterStats["attack"]}`;
        document.getElementById('skeletonAttack').innerText = `attack:${skeletonStats["attack"]}`;
    }, 4000)
}

