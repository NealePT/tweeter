/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };  

  const createTweetElement = function(data) {
    let $tweet = `
    <article class="tweet">
      <header class="tweetHeader">
        <div class="headerLeft">
          <img src="${escape(data.user.avatars)}" alt="">
          <p class="tweetAuthorName">${escape(data.user.name)}</p>
        </div>
        <div class="headerRight">
          <h4 class="tweetAuthorHandle">${escape(data.user.handle)}</h4>
        </div>
      </header>
      <section class="tweetMain">
        <p>${escape(data.content.text)}</p>
      </section>
      <footer class="tweetFooter">
        <p>${escape(timeago.format(data.created_at))}</p>
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
    // Empties tweet container before being refilled (prevents duplication of tweets after new tweet is posted)
    $('#tweets-container').empty();
    for (let tweet of data) {
      // Adds new tweet to the top of the list (thanks to prepend rather than append)
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  }

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function(data) {
      renderTweets(data);
    });
  }

  $(".newTweetSubmit").submit(function(event) {
    console.log("Tweet submitted!")
    event.preventDefault();

    if (!$('#tweet-text').val()) {
      alert("Tweet must not be empty!");
      return;
    } 
    if ($('#tweet-text').val().length > 140) {
      alert("Tweet is too long! Look at the character counter.")
      return;
    }
    $.ajax('/tweets', {
      method: 'POST',
      data: $(this).serialize()
    })
      .then(function(tweet) {
        console.log("Tweet sent!");
        $('#tweet-text').val();
        // Renders tweets again after posting
        loadTweets()
      })
    // Clears text field after tweet is successfully posted
    $('#tweet-text').val('');
    });



  loadTweets();


});