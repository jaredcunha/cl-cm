$(document).ready(function(){
  $('#introAnimation').addClass("in-view");
  $('#introAnimation, #activateAnimation, #dineAnimation, #rewardsAnimation, #browseAnimation').bind('inview', function (event, visible) {
    if (visible === true) {
      $(this).addClass("in-view");
    } else {
      $(this).removeClass("in-view");
    }
  });
});