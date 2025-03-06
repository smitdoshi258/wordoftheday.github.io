const quotes = [{
    name: "Word: Serendipity",
    quote: "Meaning:&#x275D The occurrence of events by chance in a happy or beneficial way &#x275E"
},
{
    name: "Word: Ephemeral",
    quote: "Meaning:&#x275D Lasting for a very short time &#x275E"
},
{
    name: "Word: Quixotic",
    quote: "Meaning:&#x275D Exceedingly idealistic; unrealistic and impractical &#x275E"
},
{
    name: "Word: Languid",
    quote: "Meaning:&#x275D Displaying or having a disinclination for physical exertion or effort; slow and relaxed &#x275E"
},
{
    name: "Word: Effervescent",
    quote: "Meaning:&#x275D Bubbly, fizzy, or full of energy and enthusiasm &#x275E"
},
{
    name: "Word: Mellifluous",
    quote: "Meaning:&#x275D Sweet or musical; pleasant to hear &#x275E"
},
{
    name: "Word: Obfuscate",
    quote: "Meaning:&#x275D To render obscure, unclear, or unintelligible &#x275E"
},
{
    name: "Word: Petrichor",
    quote: "Meaning:&#x275D The pleasant, earthy scent after fresh rain &#x275E"
},
{
    name: "Word: Sycophant",
    quote: "Meaning:&#x275D A person who acts obsequiously toward someone important to gain advantage &#x275E"
},
{
    name: "Word: Vestige",
    quote: "Meaning:&#x275D A trace of something that is disappearing or no longer exists &#x275E"
}


]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');


quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].quote;
    quote.innerHTML = quotes[number].name;
}
