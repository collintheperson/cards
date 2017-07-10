$(document).ready(function(){

  var numbers = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
  var suites = ["of clubs", "of spades", "of hearts", "of diamonds"];

  numbers.forEach(function(number) {
    suites.forEach(function(suite) {
      $("ul").append("<li>" + number + suite);
    });
  });
});
