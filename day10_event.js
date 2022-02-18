var $name = document.getElementById("name");
var $phone_number = document.getElementById("phone_num");
var $btn = document.getElementById("call");

var info = {
    name : "모각코",
    number : "010-xxxx-xxxx",
}

function call() {
    $btn.style.display = 'none';

    $name.innerHTML = info.name;
    $phone_number.innerHTML = info.number;

    $phone_number.style.display = 'block';
}

function onClickEvent() {
    setTimeout(call, 2000);
}

$btn.addEventListener('click', onClickEvent);

