var showDropdown = function () {
   $(this).children('.submenu ')
     .stop()
		 .show(200)

 };

 var hideDropdown = function () {
   $(this).children('.submenu')
     .stop()
     .hide(200);
 };

  $('.menu-item').hover( showDropdown, hideDropdown );


//Slider

$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});

//SELECT

$(document).ready(function(){
  $("select").selecter();
});

//CHECKBOX

$(document).ready(
	 function(){
		 $.each($(".checkbox"),function(){
		 if($("input", this).is('checked')){
		 $(this).addClass("checked")}});
		 $(".checkbox").click(function(){
		 $(this).toggleClass("checked");
		 var path = $("input", this);
		 if(path.is(':checked')){
		 path.attr("checked", false);
	 } else { path.attr("checked", true)}});
 });
