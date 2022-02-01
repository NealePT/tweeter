$(document).ready(function() {
  console.log("Document loaded!");

  $('#tweet-text').on('input', function(characterCounterCallback) {
    let charCount = this.value.length;
    let charRemaining = (140 - charCount);
    console.log(charRemaining);
  });
});
