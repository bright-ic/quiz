function startCheck() {
  var e = $(".overlay-checker"),
      t = $(".overlay-checker-points > li");
  for (t.hide(), e.fadeIn(), i = 0; i < t.length; i++) setTimeout(function() {
      $(".overlay-checker-points").find(":hidden").first().fadeIn()
  }, 1500 * (i + 1));
  setTimeout(function() {
      window.location = $(".redirectNow").attr("href")
  }, 1500 * t.length + 2e3)
}

function toggleDiv(e) {
  $(e).toggle()
}
$(document).ready(function() {
  $("#questionWrapper .question").first().show(); $("#questionWrapper .answer").click(function(e) {
      e.preventDefault();
       if("answer cannotContinue" != $(this).attr("class")) {
          var $curQuestion = $(this).parent().parent(".question");
           $curQuestion.fadeOut(200);
           var progress = $curQuestion.attr("data-progress");
           if($('#'+progress)[0]) {
             $('#'+progress).css("background-color", "green");
           }
         if($(this).parent().parent().next(".question")[0]) {
           var $nextQuestion = $(this).parent().parent().next(".question");
           $nextQuestion.delay(200).fadeIn();
            $('#cur_page').html($nextQuestion.attr("data-count"));
           var next_progress = $nextQuestion.attr("data-progress");
           if($('#'+next_progress)[0]) {
            $('#'+next_progress).css("background-color", "#1b55e2");
            
           }
         } 
         else startCheck();
       } 
       else {
         alert("Sorry, you need to be 16 or above to participate in this survey.");
        }
  });
});