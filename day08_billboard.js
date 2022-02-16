var h2 = document.getElementsByTagName('h2')[0];
var txt =  'HELLO WORLD'
var i = 0;

function display(){
    if( i < txt.length ){
        h2.innerHTML += txt[i];
        i++
    }
    change_color();
}

function change_color() {
    var color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#222222", "#b20a2c"];
    var num = Math.floor(Math.random() * color.length);
    h2.style.color = color[num];
}