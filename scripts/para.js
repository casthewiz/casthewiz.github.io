$(document).ready(function(){

	
	var navButton = $(".navButton");

    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only

	
	function navTransIn(targetID){
		$(".descriptor").css("visibility","hidden");
		var navID = targetID.substr(0 , (targetID.indexOf("Navi"))) 
		navID = '#' + navID + 'Screen';
		console.log(navID);

		if(!($(navID).hasClass('active'))){	

			if($(".mainScreen").hasClass('active')){
				activeScreen = $(".mainScreen").filter('.active');
				
				$(activeScreen).fadeOut(750
										,function(){
											/*$(activeScreen).css('display' , 'none');
										 	$(activeScreen).css('bottom','0');
										 	$(activeScreen).css('top', $(document).height());	
										 	*/

										 		$(navID).fadeIn(1050);
											});
				$(activeScreen).removeClass('active');	


			}
			else{
			$(navID).fadeIn(1050);	
			}
		$(navID).addClass('active');	
		}


		

	};



	navButton.click(function(){
		
		var unFormedID = $(this).attr('id');

		navTransIn(unFormedID);
		console.log(unFormedID);

	});

	$("#getStartedSplash").click(function()
								{$("#aboutNavi").click()
							});
	$("#resumeLink").click(function()
								{$("#artworkNavi").click()
	});
	$("#contactLink").click(function()
								{$("#contactNavi").click()
	});

	$(".expBubble").mouseover(function(){
		var descID = $(this).attr('id'); 
		descID = '#' + descID + 'd';
		console.log(descID);
		$(descID).css("visibility","visible");
	});

	$(".expBubble").mouseout(function(){
		var descID = $(this).attr('id'); 
		descID = '#' + descID + 'd';
		console.log(descID);
		$(descID).css("visibility","hidden");
	});


	


	$("#splashNavi").click();


	
})