$('document').ready(function(){

$('.icnside').click(function() {
  $('#leftbar').css('display','block');
  
});
$('.fa-times').click(function() {
  $('#leftbar').css('display','none','width','0% !important', 'transition', 'margin-left .3s ease-in-out,width .3s ease-in-out');
  
});
});


