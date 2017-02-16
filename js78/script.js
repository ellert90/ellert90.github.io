$(document).ready(function () {
 $('.head a').click(function(e){
   e.preventDefault();
   $('.head .active').removeClass('active');
   $(this).addClass('active');
   var tab = $(this).attr('href');
   $('.tab').not(tab).css({'display':'none'});
   $(tab).fadeIn(200);
 });
 
 //Forms script

   $(function(){
     $(".hover").mouseenter(function() {
       var  i = $(".hover").index(this);
       $(".info").stop().not($(".info").eq(i).show(300)).hide()
     });
     $(".hover").mouseleave(function() {
       $(".info").hide(300);
     });
   });
   $('.button').click(function(){
      $('.info').show(300);
      });
});
