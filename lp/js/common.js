jQuery(function($) {
	var ranking_cd;

	var speed = 1200,
		easing = "easeInOutExpo";

	// anchor scroll
	$("a[href^=#]").click(function() {
		var href= $(this).attr("href"),
			target = $(href == "#" || href == "" ? "html" : href),
			position = target.offset().top;
		$($.browser.safari || $.browser.chrome ? "body" : "html").animate({scrollTop: position}, speed, easing);
		return false;
	});


	$(window).load(function(){
		var $setElm = $('.ticker');
		var effectSpeed = 1000;
		var switchDelay = 5000;
		var easing = 'swing';

		$setElm.each(function(){
			var effectFilter = $(this).attr('rel');

			var $targetObj = $(this);
			var $targetUl = $targetObj.children('ul');
			var $targetLi = $targetObj.find('li');
			var $setList = $targetObj.find('li:first');

			var ulWidth = $targetUl.width();
			var listHeight = $targetLi.height();
			$targetObj.css({height:(20)});
			$targetLi.css({top:'0',left:'0',position:'absolute'});

			if(effectFilter == 'fade') {
				$setList.css({display:'block',opacity:'0',zIndex:'98'}).stop().animate({opacity:'1'},effectSpeed,easing).addClass('showlist');
				setInterval(function(){
					var $activeShow = $targetObj.find('.showlist');
					$activeShow.animate({opacity:'0'},effectSpeed,easing,function(){
						$(this).next().css({display:'block',opacity:'0',zIndex:'99'}).animate({opacity:'1'},effectSpeed,easing).addClass('showlist').end().appendTo($targetUl).css({display:'none',zIndex:'98'}).removeClass('showlist');
					});
				},switchDelay);
			} else if(effectFilter == 'roll') {
				$setList.css({top:'3em',display:'block',opacity:'0',zIndex:'98'}).stop().animate({top:'0',opacity:'1'},effectSpeed,easing).addClass('showlist');
				setInterval(function(){
					var $activeShow = $targetObj.find('.showlist');
					$activeShow.animate({top:'-3em',opacity:'0'},effectSpeed,easing).next().css({top:'3em',display:'block',opacity:'0',zIndex:'99'}).animate({top:'0',opacity:'1'},effectSpeed,easing).addClass('showlist').end().appendTo($targetUl).css({zIndex:'98'}).removeClass('showlist');
				},switchDelay);
			} else if(effectFilter == 'slide') {
				$setList.css({left:(ulWidth),display:'block',opacity:'0',zIndex:'98'}).stop().animate({left:'0',opacity:'1'},effectSpeed,easing).addClass('showlist');
				setInterval(function(){
					var $activeShow = $targetObj.find('.showlist');
					$activeShow.animate({left:(-(ulWidth)),opacity:'0'},effectSpeed,easing).next().css({left:(ulWidth),display:'block',opacity:'0',zIndex:'99'}).animate({left:'0',opacity:'1'},effectSpeed,easing).addClass('showlist').end().appendTo($targetUl).css({zIndex:'98'}).removeClass('showlist');
				},switchDelay);
			}
		});
	});


    var url = location.href;
    if(url.indexOf("/category/BAG/") != -1) {
    	  $("#bag_rank").css("display","block");
    }
    else if(url.indexOf("/category/WALLET/") != -1) {
    	$(".free_ranking").css("display","none")
    	$("#wallet_rank").css("display","block");
      	if($("#ranking_no1").children("li")){
 			$("#wallet_rank").css("display","block");
    	}
    }
    else if(url.indexOf("/category/OTHER_ITEMS/") != -1) {
    	$(".free_ranking").css("display","none")
    	$("#other_items_rank").css("display","block");
      	if($("#ranking_no1").children("li")){
 			$("#other_items_rank").css("display","block");
    	}
    }
    else if(url.indexOf("/category/STOLE/") != -1) {
    	$(".free_ranking").css("display","none")
    	$("#stole_rank").css("display","block");
      	if($("#ranking_no1").children("li")){
 			$("#stole_rank").css("display","block");
    	}
    }
    else if(url.indexOf("/category/ACCESSORY/") != -1) {
    	$(".free_ranking").css("display","none")
    	$("#accessory_rank").css("display","block");
      	if($("#ranking_no1").children("li")){
 			$("#accessory_rank").css("display","block");
    	}
    }
    else if(url.indexOf("/category/GLASS/") != -1) {
    	$(".free_ranking").css("display","none")
    	$("#glass_rank").css("display","block");
      	if($("#ranking_no1").children("li")){
 			$("#glass_rank").css("display","block");
    	}
    }
    else if(url.indexOf("/category/INTERIOR/") != -1) {
    	$(".free_ranking").css("display","none")
    	$("#interior_rank").css("display","block");
      	if($("#ranking_no1").children("li")){
 			$("#interior_rank").css("display","block");
    	}
    }
    else if(url.indexOf("/category/LIQUOR/") != -1) {
    	$(".free_ranking").css("display","none")
    	$("#liquor_rank").css("display","block");
      	if($("#ranking_no1").children("li")){
 			$("#liquor_rank").css("display","block");
    	}
    }
    else {
    	$(".free_ranking").css("display","none")
    }
    if(url.indexOf(".html") != -1) {
       $("#bag_rank").css("display","none");
       $("#glass_rank").css("display","none");
    }
});
