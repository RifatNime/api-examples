const loadQuotes = () => { //perameter lage nai tai
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
    // .then(data => console.log(data))
}

const displayQuote = quote => {

    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote; //er vhitorer jinis tai qoute er qoute
}