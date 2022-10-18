let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let persons = document.querySelector(".person");

const quotes = [
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
    person: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    person: "Oprah Winfrey",
  },
  {
    quote:
      "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    person: "Lao Tzu",
  },
  {
    quote: "He who knows, does not speak. He who speaks, does not know.",
    person: "Lao Tzu",
  },
  {
    quote:
      "Truthful words are not beautiful; beautiful words are not truthful. Good words are not persuasive; persuasive words are not good.",
    person: "Lao Tzu",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  persons.innerText = quotes[random].person;
});
