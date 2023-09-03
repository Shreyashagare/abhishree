// Array of quotes
const quotes = [
    "Well, maybe I don’t need your money. Wait, wait, I said maybe! - Rachel",
    "We were on a break!- Ross",
    "See? He’s her lobster - Phoebe",
    "Joey doesn’t share food! - Joey",
    "Hi, I’m Chandler. I make jokes when I’m uncomfortable - Chandler",
    "I wish I could, but I don’t want to - Phoebe",
    "Seven!- Monica"
    
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = randomQuote;
    
    // Generate random background color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// Event listener for the Generate Quote button
document.getElementById("generate-button").addEventListener("click", generateRandomQuote);

// Initial quote generation
generateRandomQuote();
