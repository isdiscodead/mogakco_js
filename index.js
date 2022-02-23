var cnt = 0;

function check_text() {
    var value = document.getElementById('input').value;
    var $message =  document.getElementById('bot_message');
    var $img = document.getElementById('img');

    if ( value == "alert" ) {
        cnt += 1;
        alert("Warning ! " + cnt);
    } else if ( value == "힘들어") {
        $message.innerHTML = "안 좋은 일이 있나요? 힘들 땐 조금 쉬어도 된다고 생각해요.";
    } else if ( value == "졸려" ) {
        $message.innerHTML = "불 꺼줄게요! 조금 자도록 해요. 해야 할 일이 있더라도 쉬고 일어나서 꼭 하면 되죠~";
        document.body.style.backgroundColor = "#333333";
    } else if ( value == "불켜줘") {
        document.body.style.backgroundColor = "white";
        $message.innerHTML = "푹 쉬었나요?";
    } else if ( value == "심심해") {
        $message.innerHTML = "할 일은 다 끝난 건가요?";
    } else if ( value == "배고파") {
        $message.innerHTML = "밥은 삼시세끼 잘 챙겨먹고 다녀야죠!";
        $img.src = 'https://i.pinimg.com/originals/ae/85/ba/ae85ba9b17ec2286931931fac65b5fca.gif'
    } else {
        console.log(value);
    }
}