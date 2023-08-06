const quotes = [
  '"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear." <br><br>Nelson Mandela',
  '"If you believe it will work, you\'l see opportunities. If you believe it won\'t, you will see obstacles." <br><br>Wayne Dyer',
  '"Believe you can and you\'re halfway there." <br><br>Theodore Roosevelt',
  '"Learn the rules like a pro, so you can break them like an artist." <br><br>Pablo Picasso',
  '"Do one thing every day that scares you." <br><br>Eleanor Roosevelt',
  '"I didn\'t get there by wishing for it or hoping for it, but by working for it." <br><br>Estée Lauder',
  '"If you can dream it, you can do it." <br><br>Walt Disney',
  '"Even if you are on the right track, you\'ll get run over if you just sit there." <br><br>Will Rogers',
  '"Success is not final, failure is not fatal: it is the courage to continue that counts." <br><br>Winston Churchill',
  '"Earn your leadership every day." <br><br>Michael Jordan'
]

function generateRandomQuote () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quotes[randomIndex];
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateRandomQuote);








