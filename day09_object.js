var $h1 = document.getElementsByTagName('h1');
var $li = document.getElementsByTagName('li');

function Movie(name, year, genre) {
    this.name = name;
    this.year = year;
    this.genre = genre;
}

var wall_e = new Movie("wall-e", 2008, "animation");
var deadpool = new Movie("deadpool", 2016, "action");
var dead_poets_society = new Movie("dead poets society", 1990, "drama");

var movie = [wall_e, dead_poets_society, deadpool];

function movie(num) {
    h1[0].innerHTML = movie[0].name;
    li[0].innerHTML = movie[0].year;
    li[1].innerHTML = movie[0].genre;  
}