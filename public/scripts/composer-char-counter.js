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

    // Write new tweet button
    $('.navNewTweet').on('click', function() {
      $('.new-tweet').slideToggle(200);
      $('#tweet-text').focus();
      $('#tweet-text').select();
    })
});
