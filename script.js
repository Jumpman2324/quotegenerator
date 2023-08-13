let generateBtn = document.querySelector(".generate-Btn")
let getQuotes = document.querySelector(".quotes")
const quotes = [
    "A rose by any other name would smell as sweet. - William Shakespeare",
    "All that glitters is not gold. - William Shakespeare",
    "All the world’s a stage, and all the men and women merely players. - William Shakespeare",
    "Ask not what your country can do for you; ask what you can do for your country. - John Kennedy",
    "Ask, and it shall be given you; seek, and you shall find. - the Bible",
    "Eighty percent of success is showing up. - Woody Allen",
    "Elementary, my dear Watson. - Sherlock Holmes (character)",
    "For those to whom much is given, much is required. - the Bible",
    "Frankly, my dear, I don't give a damn. - Rhett Butler (character)",
    "Genius is one percent inspiration and ninety-nine percent perspiration. - Thomas Edison",
    "What doesn't kill us makes us stronger. - Friedrich Nietzsche"
];


function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
} 



generateBtn.addEventListener("click",() =>{
    let displayQuotes = getRandomQuote()
    getQuotes.textContent = displayQuotes

})