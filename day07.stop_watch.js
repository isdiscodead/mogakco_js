var $time = document.getElementsByTagName('h1')[0];
var $start = document.getElementById('strt');
var $stop = document.getElementById('stp');
var $reset = document.getElementById('rst');

var sec = 0;
var min = 0;
var hrs = 0;

// timeout 인스턴스
var t;

// 1초 증가
function tick(){
    sec++;
    if (sec >= 60) {    // 1분 처리
        sec = 0;
        min++;
        if (min >= 60) {    // 1시간 처리
            min = 0;
            hrs++;
        }
    }
}


// 
function add() {
    tick(); // 1초 지남
    // 시간 표시 변경; 2자리수 넘어가면 그대로, 1자리수면 02 이런식으로 표시
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}

// setTimeout() -> 시간 만료 후 함수나 지정한 코드 조각을 실행
function timer() {
    // 1000밀리초 = 1초마다 1초씩 추가 
    t = setTimeout(add, 1000);
}

// 초기화
timer();

// start 누르면 1초씩 세기
start.onclick = timer;

// stop 누르면 timeout 반복 호출 종료 
stop.onclick = function() {
    clearTimeout(t);
}

// reset 누르면 화면 표시 및 시간 초기화
reset.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}