const test = [['grass','1','grass','1','grass','vertical_road','grass','1','grass','1','grass'],
                ['1','water','1','grass','1','vertical_road','1','grass','1','grass','1'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['1','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','vertical_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['1','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['1','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass']]



let maps = [[test,test,test,test,test],[test,test,test,test,test],[test,test,test,test,test],[test,test,test,test,test],[test,test,test,test,test]]

function element_map(map) {
    let divh = ''
    for (let i = 0; i < 11; i++) {
        let divw = ''
        for (let j = 0; j < 11; j++) {
            divw += "<div id ='"+map[i][j]+"' class = 'w'></div>"
        }
        divh += "<div>" + divw + "</div>"
    }
    document.getElementById('container').innerHTML = divh
}
function render_minimap() {
    document.getElementById('minimap').innerHTML = "divh"
}

function change_map() {
    element_map(maps[player['position_map'][0]][player['position_map'][1]]);
}