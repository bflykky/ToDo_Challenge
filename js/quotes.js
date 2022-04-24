const quoteArr = [
    {
        quote: "하루하루 최선을 다하자, 오늘은 다신 오지 않는다.",
        author: "미상"
    },
    {
        quote: "If it doesn't challenge you, it doesn't change you.",
        author: "Fred Devito"
    },
    {
        quote: "부자가 되겠다는 자신을 믿자.",
        author: "미상"
    },
    {
        quote: "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기 증상이다.",
        author: "미상"
    },
    {
        quote: "반복에 지치지 않는 자가 성취한다.",
        author: "\"미생\" 작가 윤태호"
    },
    {
        quote: "There is a destination but no way there; what we refer to as way is hesitation.",
        author: "novelist Franz Kafka"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;