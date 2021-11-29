                        $('.main').animate({
	                    	marginLeft: -755,
                          }, 3000);
						  
						$('.main2').animate({
	                    	marginLeft: -705,							    
                          }, 3000);
						  
						$('.main1').animate({
	                    	marginLeft: -690,
                          }, 3000);
						  
						$('.main3').animate({
	                    	marginLeft: -772,
                          }, 3000);
						  
						$('.interest').animate({
	                    	marginLeft: -772,
                          }, 3000);
						  
						$('.declaration').animate({
	                    	marginLeft: -722,
                          }, 3000);
						  
						  $('.sidebar').animate({
	                    	marginBottom: 260,
                          }, 3000);
						  		

$(document).ready(function(){
  $("#pi").hover(function(){
    $(".detail").css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "pink");
  });
  $("#o").hover(function(){
    $(".objective").css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "pink");
  });
  $("#e").hover(function(){
    $(".table").css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "pink");
  });
  $("#sc").hover(function(){
    $(".socialsites").css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "pink");
  });
});

								
					  var imageSources = ["image1.jpeg", "1.jpg", "2.jpg"]

                               var index = 0;
                             setInterval (function(){
                                                    if (index === imageSources.length) {
                                                    index = 0;
                                                    }
                                                     document.getElementById("image").src = imageSources[index];
                                                    index++;
                                                    } , 3000);