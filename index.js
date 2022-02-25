var cnt = 0;
var key = 0;

var question;

var $message =  document.getElementById('bot_message');
var $img = document.getElementById('img');
var $title = document.getElementsByTagName('h2')[0];

var json = 
[
	{
		"question" : "안녕",
		"answer" : "안녕하세요!"
	},
	{
		"question" : "나이",
		"answer" : "그런 건 비밀로 해둘까요?"
	},
	{
		"question" : "이름",
		"answer" : "부르고 싶은 대로 불러주세요."
	}
]

function check_text() {

    var value = document.getElementById('input').value;

    var typewriter = new Typewriter($message, {
        loop: false
    });

    // 가르칠 것인지 선택
    if ( key == 1 ) {
        if ( value == "Y") {
            typewriter.typeString('뭐라고 대답하면 좋을까요?')
            .pauseFor(2500)
            .start();
            key = 2;
            
        } else {
            key = 0;
            typewriter.typeString('나중에 꼭 알려주기로 약속해요!')
            .pauseFor(2500)
            .start();
        }
        
        return;
    }

    // 가르쳐준 다음 실행 시 
    if ( key == 2 ) {
        answer = value; // 전역변수 answer값에 사용자의 입력을 저장
        json.push({question: `${question}`, answer: `${answer}`}); 
        typewriter.typeString('알려줘서 고마워요! 기억하고 있을게요.')
        .pauseFor(2500)
        .start();
    }

    // json에서 탐색
    for ( let i=0 ; i<json.length ; i++ ) {
        if ( value == json[i].question ) {
            typewriter.typeString(json[i].answer)
            .pauseFor(2500)
            .start();

            return;
        }
    }

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
        .pauseFor(1000)
        .deleteAll()
        .typeString('무슨 뜻인지 가르쳐줄래요? (Y/N)')
        .pauseFor(1000)
        .start();

        question = value;
        key = 1
    }
}