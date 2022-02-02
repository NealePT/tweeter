/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Test / driver code (temporary). Eventually will get this from the server.
  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]



  const createTweetElement = function(data) {
    let $tweet = `
    <article class="tweet">
      <header class="tweetHeader">
        <div class="headerLeft">
          <img src="${data.user.avatars}" alt="">
          <p class="tweetAuthorName">${data.user.name}</p>
        </div>
        <div class="headerRight">
          <h4 class="tweetAuthorHandle">${data.user.handle}</h4>
        </div>
      </header>
      <section class="tweetMain">
        <p>${data.content.text}</p>
      </section>
      <footer class="tweetFooter">
        <p>${timeago.format(data.created_at)}</p>
        <div class="footerIcons">
          <i id="flag" class="fas fa-flag"></i>
          <i id="retweet" class="fas fa-retweet"></i>
          <i id="heart" class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
    `
    return $tweet;
  }

  const renderTweets = function(data) {
    for (let tweet of data) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  }
  renderTweets(data);

  $(".newTweetSubmit").submit(function(event) {
    console.log("Tweet submitted!")
    event.preventDefault();
    $.ajax('/tweets', {
      method: 'POST',
      data: $(this).serialize()
    })
      .then(function(tweet) {
        console.log("Tweet sent!");
        $('this').val();
      })
    });


});