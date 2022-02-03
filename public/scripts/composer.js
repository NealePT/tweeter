// Contains character counter and compose tweet buttons

$(document).ready(function() {
  console.log("Document loaded!");

  $('#tweet-text').on('input', function(characterCounterCallback) {
    let charCount = this.value.length;
    let charRemaining = (140 - charCount);
    // console.log(charRemaining);

    let counter = $(this).parent().next('section').children('.counter');
    counter.html(charRemaining);

    if (charRemaining < 0) {
      counter.addClass('negativeCount');
    } else {
      counter.removeClass('negativeCount');
    }
  });

    function scrollToTop() {
      // Scroll to top logic
      const rootElement = document.documentElement;
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    // Write new tweet button
    $('.navNewTweet').on('click', function() {
      $('.new-tweet').slideToggle(200);
      $('#tweet-text').focus();
      $('#tweet-text').select();
    })

    $(window).scroll(function(){
      $('.arrowButton').toggleClass('scrolled', $(this).scrollTop() > 100);
      $('.navNewTweet').toggleClass('notScrolled', $(this).scrollTop() > 100);

  });

    $('.arrowButton').on('click', function() {
      $('.new-tweet').slideDown(200);
      $('#tweet-text').focus();
      $('#tweet-text').select();
      scrollToTop();
    })
});
