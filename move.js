function up() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) - 10 + "px"
    change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
}
function down() {
    document.getElementById("Character").style.top = parseInt(document.getElementById("Character").style.top ) + 10 + "px"
    change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
}
function left() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) - 10 + "px"
    change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
}
function right() {
    document.getElementById("Character").style.left = parseInt(document.getElementById("Character").style.left ) + 10 + "px"
    change_posiotion_in_table(document.getElementById("Character").style.top,document.getElementById("Character").style.left)
}