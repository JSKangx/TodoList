const quotes = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const getQuotes = async () => {
  const res = await axios.get("https://api.quotable.io/random");
  quotes.innerHTML = res.data.content;
  author.innerHTML = res.data.author;
};

getQuotes();
