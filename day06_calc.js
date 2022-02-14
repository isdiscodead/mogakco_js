var num1 = "";
var num2 = "";
var operator = "";

var result = 0;
var result_str = "";

var $output = document.getElementById('output');

function num(n) {
    if (operator != "") {
        num2 += n;
    } else {
        num1 += n;
    }
    // 화면에 표시
    result_str += n;
    $output.innerHTML = result_str;
}

function op(select) {
    if ( operator != "") {
        alert("나는 여러개 한번에 계산할 수가 없다냥");
        return;
    }
    operator = select;
    result_str += select;
    $output.innerHTML = result_str;
}

function enter() {
    if ( operator == '%') {
        result = parseInt(num1) % parseInt(num2);
    } else if ( operator == '/' ) {
        result = parseInt(num1) / parseInt(num2);
    } else if ( operator == '*' ) {
        result = parseInt(num1) * parseInt(num2);
    } else if ( operator == '+' ) {
        result = parseInt(num1) + parseInt(num2);
    } else if ( operator == '-' ) {
        result = parseInt(num1) - parseInt(num2);
    } else {
        alert("뭔가 이상하다냥...");
        return;
    }
    num1 = result;
    num2 = "";
    operator = "";

    result_str = "" + result;
    $output.innerHTML = result_str;
}

function clear_all() {
    result = 0;
    result_str = "";
    $output.innerHTML = result_str;
    num1 = "";
    num2 = "";
}

function del() {
    if (operator != "") {
        num2 = num2.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
    // 화면에 표시
    result_str = result_str.slice(0, -1);

    $output.innerHTML = result_str;
}