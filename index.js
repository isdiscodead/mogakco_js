var cnt = 0;

var $message =  document.getElementById('bot_message');
var $img = document.getElementById('img');
var $title = document.getElementsByTagName('h2')[0];

function check_text() {

    var value = document.getElementById('input').value;

    var typewriter = new Typewriter($message, {
        loop: false
    });

    if ( value == "alert" ) {
        cnt += 1;
        alert("Warning ! " + cnt);

    } else if ( value == "힘들어") {
        typewriter.typeString('안 좋은 일이 있나요? ')
        .pauseFor(500)
        .typeString('힘들 땐 조금 쉬어도 된다고 생각해요.')
        .pauseFor(500)
        .start();

    } else if ( value == "졸려" ) {
        typewriter.typeString('불 꺼줄게요! ')
        .pauseFor(2500)
        .start();
        
        document.body.style.backgroundColor = "#333333";
        $title.style.color = "white";
        document.body.style.transition = "all ease 1.5s 0s";

        typewriter.typeString('조금 자도록 해요.')
        .pauseFor(500)
        .typeString(' 해야 할 일이 있더라도 쉬고 일어나서 꼭 하면 되죠~')
        .pauseFor(2500)
        .start();

    } else if ( value == "불켜줘") {
        document.body.style.backgroundColor = "white";
        $title.style.color = "#424242";
        document.body.style.transition = "all ease 1.5s 0s";

        typewriter.typeString('푹 쉬었나요?')
        .pauseFor(2500)
        .start();
        
    } else if ( value == "심심해") {
        typewriter.typeString('할 일은 다 끝난 건가요?')
        .pauseFor(2500)
        .deleteAll()
        .start();
        typewriter.typeString(' 그러면 제가 놀아드릴까요? 👀')
        .pauseFor(2500)
        .start();

    } else if ( value == "배고파") {
        $img.src = 'https://i.pinimg.com/originals/ae/85/ba/ae85ba9b17ec2286931931fac65b5fca.gif'

        typewriter.typeString('밥은 삼시세끼 잘 챙겨먹고 다녀야죠!')
        .pauseFor(2500)
        .deleteAll()
        .typeString('지금이라도 뭘 좀 먹도록 하세요.')
        .start();

    } else {
        console.log(value);
        typewriter.typeString('미안해요, 무슨 말인지 모르겠어요. 😥')
        .pauseFor(2500)
        .start();
    }
}