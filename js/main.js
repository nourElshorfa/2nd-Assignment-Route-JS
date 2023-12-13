

var quote = [`“Be yourself; everyone else is already taken.”
― Oscar Wilde` , `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein` , `“So many books, so little time.”
― Frank Zappa` , `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero` , `“You only live once, but if you do it right, once is enough.”
― Mae West` , `“Be the change that you wish to see in the world.”
― Mahatma Gandhi` , `“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard` , `“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost` , `“If you tell the truth, you don't have to remember anything.”
― Mark Twain`]
function displayQuote(){

    var display = quote[Math.floor(Math.random() * quote.length)];
    document.getElementById("quote").innerHTML = display;
}
