var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote(){
	$.getJSON(quoteUrl, createTweet);
}
function createTweet(input){
	var data = input[0];
	
	var quoteText = $(data.content).text().trim();
	var quoteAuthor = data.title;
	
	if (!quoteAuthor.length) {
		quoteAuthor = "Unknown Author";
	}
}