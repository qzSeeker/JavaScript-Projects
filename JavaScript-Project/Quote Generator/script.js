// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `“Success is not final, failure is not fatal: it is the courage to continue that counts.”`,
    person: `― Winston S. Churchill`
}, {
    quote: `“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”`,
    person: `― Albert Einstein`
}, {
    quote: `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”`,
    person: `― Albert Einstein`
}, {
    quote: `“We are all in the gutter, but some of us are looking at the stars.”`,
    person: `― Oscar Wilde, Lady Windermere's Fan`
}, {
    quote: `“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”`,
    person: `― Bill Keane`
}, {
    quote: `“I have not failed. I've just found 10,000 ways that won't work.”`,
    person: `― Thomas A. Edison`
}, {
    quote: `“Life isn't about finding yourself. Life is about creating yourself.”`,
    person: `― George Bernard Shaw`
}, {
    quote: `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”`,
    person: `― Marilyn Monroe`
}, {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    person: `― Mahatma Gandhi`
}, {
    quote: `“Be yourself; everyone else is already taken.”`,
    person: `― Oscar Wilde`
}, {
    quote: `“Do one thing every day that scares you.”`,
    person: `― Eleanor Roosevelt`
}, {
    quote: `“When it came to being a legend, all it took was one person to recognize that you were epic. That was it.”`,
    person: `― J.R. Ward, Lover Unveiled`
}, {
    quote: `“If you want to become a legend go and read the books”`,
    person: `― Arif Naseem`
}, {
    quote: `“Handling failure and success makes you a legend”`,
    person: `― Dr. P.S. Jagadeesh Kumar`
}];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});