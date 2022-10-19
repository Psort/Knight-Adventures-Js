let maps = [['test','elementL_left_down','','','','','','','',''],['','','','','','','','','',''],['','','','','','','','','',''],['','','','','','','','','',''],['','','','','','','','','',''],['','','','','','','','','',''],['','','','','','','','','',''],['','','','','','','','','',''],['','','','','','','','','',''],['','','','','','','','','','']]


let elementL_right_up  = [['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','right_down','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass']]

let elementL_left_up = [['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                    ['horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','left_up','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass']]

let elementL_left_down = [['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','left_down','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass']]

let elementL_right_down = [['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','right_up','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                        ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass']]

let elementI = [['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass']]

let element_line = [['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
                    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass']]

let elementX = [['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','cross_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass']]

let test = [['grass','1','grass','1','grass','vertical_road','grass','1','grass','1','grass'],
                ['1','grass','1','grass','1','vertical_road','1','grass','1','grass','1'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['1','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','cross_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road','horizontal_road'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['1','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['1','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass'],
                ['grass','grass','grass','grass','grass','vertical_road','grass','grass','grass','grass','grass']]

let level_1_mapA = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'right_down', 'horizontal_road', 'left_up', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal','water_horizontal'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'right_down', 'horizontal_road','horizontal_road'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_1_mapB = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'right_up', 'horizontal_road','horizontal_road'],
                    ['grass', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal','water_horizontal'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'left_up', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'right_down', 'horizontal_road', 'horizontal_road', 'left_up', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_1_mapC = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['left_down', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'right_up', 'horizontal_road','horizontal_road'],
                    ['bridge', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_3', 'grass', 'vertical_road', 'grass','grass'],
                    ['right_down', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'bridge_2', 'horizontal_road', 'left_up', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass']]

let level_1_mapD = [['grass', 'water_2', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_4', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass','grass'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['right_up', 'bridge_2', 'left_down', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['vertical_road', 'water_vertical', 'vertical_road', 'grass', 't_right', 'horizontal_road', 'horizontal_road', 'horizontal_road', 't_left', 'grass','grass'],
                    ['left_up', 'water_vertical', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'water_vertical', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'water_vertical', 'right_down', 'horizontal_road', 'left_up', 'grass', 'grass', 'grass', 'right_down', 'horizontal_road','horizontal_road'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_1_mapE = [['water_2', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_4', 'grass', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'right_up', 'horizontal_road', 'left_down', 'grass','grass'],
                    ['water_1', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'bridge', 'water_horizontal','water_horizontal'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'right_up', 'horizontal_road', 'left_up', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_up', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass']]

let level_1_mapF = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['water_3', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','vertical_road', 'grass','grass'],
                    ['water_vertical', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_up', 'grass','grass'],
                    ['water_vertical', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_vertical', 'right_down', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass','grass'],
                    ['bridge_2', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_up', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_1_mapG = [['grass', 'water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'water_1', 'water_3', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass', 'water_2', 'water_horizontal', 'water_horizontal', 'water_horizontal','water_horizontal'],
                    ['grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'bridge_2', 'left_down', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'water_vertical', 'vertical_road', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'water_vertical', 'vertical_road', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'water_vertical', 'vertical_road', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'water_vertical', 'right_down', 'horizontal_road', 'horizontal_road', 'bridge_2', 'horizontal_road', 'horizontal_road', 'horizontal_road','horizontal_road'],
                    ['grass', 'grass', 'water_1', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_4', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_1_mapH = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_1', 'water_3', 'grass', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'bridge_2', 'left_down', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass',  'grass', 'grass', 'grass', 'water_vertical', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass',  'grass', 'grass',  'grass', 'grass', 'grass', 'water_vertical', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass',  'grass', 'grass',  'grass', 'grass', 'grass', 'water_vertical', 'vertical_road', 'grass','right_up'],
                    ['grass', 'grass',  'grass', 'grass',  'grass', 'grass', 'grass', 'water_vertical', 'vertical_road', 'grass','vertical_road'],
                    ['grass', 'grass',  'grass', 'grass',  'grass', 'grass', 'right_up', 'bridge_2', 'left_up', 'grass','vertical_road'],
                    ['grass', 'grass',  'grass', 'grass',  'grass', 'grass', 'vertical_road', 'water_vertical', 'grass', 'grass','vertical_road'],
                    ['grass', 'grass',  'grass',  'grass',  'grass', 'grass', 'right_down', 'bridge_2', 'left_down', 'grass','vertical_road'],
                    ['water_2', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_4', 'vertical_road', 'grass','vertical_road'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'right_down', 'horizontal_road','left_up']]

let level_1_mapI = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_3', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'right_up', 'horizontal_road','horizontal_road'],
                    ['water_vertical', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_up', 'grass','grass'],
                    ['water_vertical', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_vertical', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_1', 'bridge', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal','water_3'],
                    ['grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','water_vertical'],
                    ['grass', 'vertical_road', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass','water_vertical'],
                    ['grass', 'right_down', 'horizontal_road', 'left_up', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass','water_vertical'],
                    ['horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_up', 'grass', 'grass','water_vertical'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','water_vertical']]

let level_1_mapJ = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
                    ['grass', 'right_up', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass', 'grass', 'grass', 'water_2','water_horizontal'],
                    ['grass', 'vertical_road', 'grass', 'grass', 't_right', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'water_vertical','grass'],
                    ['water_2', 'bridge', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'water_4','grass'],
                    ['water_vertical', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'grass','grass'],
                    ['water_4', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'grass','grass'],
                    ['grass', 'vertical_road', 'grass', 'grass', 'right_down', 'horizontal_road', 'horizontal_road', 'left_up', 'grass', 'grass','grass'],
                    ['grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'right_down', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'right_down', 'horizontal_road', 'horizontal_road','horizontal_road'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_2_mapA = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 't_right', 'horizontal_road', 't_left', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal','water_horizontal'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'right_down', 'horizontal_road', 'left_up', 'grass', 'grass', 'grass', 'right_down', 'horizontal_road','horizontal_road'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_2_mapB = [['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'grass', 't_right', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road','horizontal_road'],
                    ['grass', 'grass', 't_right', 'horizontal_road', 'horizontal_road', 't_left', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal','water_horizontal'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'left_up', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass','grass']]

let level_2_mapC = [['grass', 'water_2', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal','water_horizontal'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'right_up', 't_up', 'horizontal_road', 'horizontal_road', 'left_down', 'grass','grass'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['horizontal_road', 'bridge_2', 'left_down', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'water_vertical', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['water_horizontal', 'water_4', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'right_down', 'horizontal_road', 'left_up', 'grass', 'grass', 'grass', 'right_down', 'horizontal_road','horizontal_road'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_2_mapD = [['water_horizontal', 'water_3', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'water_1', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_3', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'right_up', 'horizontal_road', 'left_down', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'water_vertical', 'grass', 'right_up', 'horizontal_road','horizontal_road'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'water_vertical', 'grass', 'vertical_road', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'left_up', 'grass', 'right_down', 'horizontal_road', 'bridge_2', 'horizontal_road', 'left_up', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass','grass']]

let level_2_mapE = [['water_2', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_4', 'grass', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 't_down', 'horizontal_road', 'left_down', 'grass','grass'],
                    ['water_1', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'bridge', 'water_horizontal','water_horizontal'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'right_up', 'horizontal_road', 'left_up', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 't_left', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'right_down', 'horizontal_road', 'left_up', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road','grass','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road','grass', 'grass']]

let level_2_mapF = [['grass', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 't_left', 'grass','grass'],
                    ['grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass','grass'],
                    ['water_3', 'vertical_road', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_up', 'grass','grass'],
                    ['water_vertical', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_vertical', 'vertical_road', 'grass', 'right_down', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road','horizontal_road'],
                    ['water_vertical', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_vertical', 'right_down', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass','grass'],
                    ['bridge_2', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_up', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_2_mapG = [['grass', 'grass', 'grass', 'grass', 'grass', 'water_2', 'water_4', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'water_2', 'water_horizontal', 'water_horizontal', 'water_4', 'grass', 'right_up', 'left_down', 'grass','grass'],
                    ['grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'vertical_road', 'water_2','water_horizontal'],
                    ['grass', 'grass', 'water_vertical', 'grass', 'grass', 'right_up', 'horizontal_road', 'left_up', 'vertical_road', 'water_vertical','grass'],
                    ['horizontal_road', 'horizontal_road', 'bridge_2', 'left_down', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'water_vertical','grass'],
                    ['grass', 'grass', 'water_vertical', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'water_vertical','grass'],
                    ['grass', 'grass', 'water_vertical', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'water_vertical','grass'],
                    ['grass', 'grass', 'water_vertical', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'water_vertical','grass'],
                    ['grass', 'grass', 'water_vertical', 'right_down', 'horizontal_road', 'left_up', 'grass', 'grass', 'right_down', 'bridge_2','horizontal_road'],
                    ['grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical','grass'],
                    ['grass', 'grass', 'water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical','grass']]

let level_2_mapH = [['water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_3', 'grass', 'grass','grass'],
                    ['horizontal_road', 'horizontal_road', 'left_down', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'bridge_2', 'left_down', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'water_vertical', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'water_vertical', 'vertical_road', 'grass','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'water_vertical', 'vertical_road', 'right_up','horizontal_road'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'grass', 'water_vertical', 'vertical_road', 'vertical_road','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'right_up', 'bridge_2', 'left_up', 'vertical_road','grass'],
                    ['grass', 'grass', 'vertical_road', 'grass', 'vertical_road', 'grass', 'vertical_road', 'water_vertical', 'grass', 'vertical_road','grass'],
                    ['grass', 'grass', 'right_down', 'horizontal_road', 'left_up', 'grass', 'right_down', 'bridge_2', 'horizontal_road', 'left_up','grass'],
                    ['water_2', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_4', 'grass', 'grass','grass'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass']]

let level_2_mapI = [['water_3', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass','water_2'],
                    ['water_vertical', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass','water_vertical'],
                    ['water_vertical', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 't_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road','bridge_2'],
                    ['water_vertical', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','water_vertical'],
                    ['water_vertical', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','water_vertical'],
                    ['water_1', 'bridge', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal','water_4'],
                    ['grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass','grass'],
                    ['grass', 'vertical_road', 'grass', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass','grass'],
                    ['horizontal_road', 't_up', 'horizontal_road', 't_left', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass','grass'],
                    ['grass', 'grass', 'grass', 'right_down', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_up', 'grass', 'grass','grass']]

let level_2_mapJ = [['water_2', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal'],
                    ['water_vertical', 'right_up', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'left_down', 'grass', 'grass','grass'],
                    ['water_vertical', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'vertical_road', 'grass', 'grass','grass'],
                    ['water_1', 'bridge', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'water_horizontal', 'bridge', 'water_horizontal', 'water_3','grass'],
                    ['grass', 't_right', 'horizontal_road', 'horizontal_road', 't_down', 'horizontal_road', 'horizontal_road', 't_left', 'grass', 'water_vertical','grass'],
                    ['grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'grass', 'vertical_road', 'grass', 'water_vertical','grass'],
                    ['grass', 'vertical_road', 'grass', 'grass', 'right_down', 'horizontal_road', 'horizontal_road', 'left_up', 'grass', 'water_vertical','grass'],
                    ['grass', 'vertical_road', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical','grass'],
                    ['grass', 'right_down', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'horizontal_road', 'bridge','horizontal_road'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical','grass'],
                    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'water_vertical','grass']]


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