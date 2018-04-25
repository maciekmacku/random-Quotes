$(function () { 
    var prefix = "https://cors-anywhere.herokuapp.com/";
    var tweetLink = "https://twitter.com/intent/tweet?text=";
    var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    
    function getQuote() { //get quote function
        $.getJSON(prefix + quoteUrl, createTweet);
        $.ajaxSetup({
            cache: false
        });
    }
   
    function createTweet(input) {  //create tweet function 
        var data = input[0];
        var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;
        var quoteText = $(data.content).text().trim();
        var quoteAuthor = data.title;

        if (!quoteAuthor.length) {
            quoteAuthor = "Unknown author";
        }
        if (tweetText.length > 140) {
            getQuote();
        } else {
            var tweet = tweetLink + encodeURIComponent(tweetText);
            $('.quote').text(quoteText);
            $('.author').text("Author: " + quoteAuthor);
            $('.tweet').attr('href', tweet);
        }
    }
    getQuote();
    $('.trigger').click(function () {
        getQuote();
    });
});
