$(document).ready(function(){


	$('#aboutMeButton').click(function(){
    flipIt('.aboutMeContent');
	});
	$('#contactMeForm1').click(function(){
    flipIt('.contactMeForm1');
	});
	$('#philosophyButton').click(function(){
    flipIt('.philosophyContent');
	});
	$('#servicesButton').click(function(){
    flipIt('.servicesContent');
	});


});

function flipIt(selector){
  if($(selector).css('display') == 'none'){
    $(selector).slideDown();
  }
  else{
    $(selector).slideUp();
  }
}
