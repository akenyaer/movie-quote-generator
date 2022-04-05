let quotes = ["Carpe diem. Seize the day, boys. Make your lives extraordinary.", "Life is like a box of chocolates, you never know what you're going to get.", "As IF", "I'm king of the world", "It's all about the Benjamins baby!"];
let randomQuotes = Math.floor(Math.random() * 3);
function newQuote(){
    let randomQuotes = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomQuotes];
}
