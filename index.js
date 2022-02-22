function check_text() {
    var value = document.getElementById('input').value;
    var $message =  document.getElementById('bot_message');

    if ( value == "alert" ) {
        alert("Warning !");
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
    } else {
        console.log(value);
    }
}