var arrOfQuotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde",
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: "― Marilyn Monroe",
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa",
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein",
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero",
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch",
    },
    {
        quote: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
        author: "― William W. Purkey",
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss",
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West",
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi",
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "― Robert Frost",
    },
    {
        quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        author: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
    },
];

var prev = undefined;

function showRandomQuote() {

    var next = Math.ceil((Math.random() * arrOfQuotes.length) - 1)
    if (prev !== undefined && prev == next) {
        next = (next + 1) % (arrOfQuotes.length-1);
    }
    prev = next;
    
    document.getElementById("quote").innerHTML = arrOfQuotes[next].quote;
    document.getElementById("author").innerHTML = arrOfQuotes[next].author;
}