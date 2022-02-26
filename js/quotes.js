const quotes = [
    {
        quote: "그대에게 가장 좋은 휴식은 잠이고, 그대는 자주 잠을 청한다. 하지만 그러면서도 잠자는 것에 지나지 않는 죽음을 무척이나 두려워한다.",
        author: "- 멋진 신세계",
    },
    {
        quote: "우리는 천성적으로 더 많은 것을 알고 싶어 합니다. 그래서 계속 배웁니다. 세상에 대한 우리의 지식은 계속 성장합니다. 우리가 배울 수 있는 것은 한계가 있지만 우리는 알고자 하는 욕망을 불태웁니다.",
        author: "- 모든 순간의 물리학",
    },
    {
        quote: "지식은 아주 작은 공간의 심오한 구조 속에, 시간의 특성 속에, 블랙홀의 운명 속에, 그리고 우리 생각의 기능 속에 있습니다.",
        author: "- 모든 순간의 물리학",
    },
    {
        quote: "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기 증상이다",
        author: "- 아인슈타인",
    },
    {
        quote: "인생은 곱셈이다. 어떤 찬스가 와도 내가 제로면 아무런 의미가 없다.",
        author: "- 나카무라 미츠루",
    },
    {
        quote: "불가능한 일이 존재하는 것이 아니라 불가능하다는 생각이 존재하는 것이다.",
        author: "- 로버트 슐러",
    },
    {
        quote: "미래를 신뢰하지 마라, 죽은 과거를 묻어버려라, 그리고 살아있는 현재에 행동하라.",
        author: "- 롱펠로우",
    },
    {
        quote: "자기 자신을 믿으면 틀림없이 살길이 보일 것이다.",
        author: "- 요한 볼프강 폰 괴테",
    },
    {
        quote: "시작하는 방법은 그만 말하고 이제는 행동하는 것이다.",
        author: "- 월트 디즈니",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
