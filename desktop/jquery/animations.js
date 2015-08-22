			$("#toggleSideBar").click(function(){
				$("#sideBarLeft").slideDown(500)
			});
			$("#facebookLeft").hover(function(){
				$(this).animate({width: "100"}).clearQueue();
				$("#facebookLogo").animate({marginLeft:"30px"}).clearQueue();
			},
			function(){
				$(this).animate({width: "60"}).clearQueue();
				$("#facebookLogo").animate({marginLeft:"0px"}).clearQueue();			
			});
			$("#googleplusLeft").hover(function(){
				$(this).animate({width: "100"}).clearQueue();
				$("#googleplusLogo").animate({marginLeft:"30px"}).clearQueue();
			},
			function(){
				$(this).animate({width: "60"}).clearQueue();
				$("#googleplusLogo").animate({marginLeft:"0px"}).clearQueue();			
			});
			$("#twitterLeft").hover(function(){
				$(this).animate({width: "100"}).clearQueue();
				$("#twitterLogo").animate({marginLeft:"30px"}).clearQueue();
			},
			function(){
				$(this).animate({width: "60"}).clearQueue();
				$("#twitterLogo").animate({marginLeft:"0px"}).clearQueue();			
			});
			$("#rssLeft").hover(function(){
				$(this).animate({width: "100"}).clearQueue();
				$("#rssLogo").animate({marginLeft:"30px"}).clearQueue();
			},
			function(){
				$(this).animate({width: "60"}).clearQueue();	
				$("#rssLogo").animate({marginLeft:"0px"}).clearQueue();		
			});










$(".right-facebook").click(function(){
	$(".rf-menu").slideToggle(400);
});
$(".gametracker").click(function(){
	$(".gt-menu").slideToggle(400);
});
$("#swag").click(function(){
	$(".settings-menu").slideToggle(400);
});
function expandBlogDown(){
	$(".b2").slideDown(400);
	$("#plusBlog").hide(100);
	$("#minusBlog").show(100);
}
function expandBlogUp(){
	$(".b2").slideUp(400);
	$("#plusBlog").show(100);
	$("#minusBlog").hide(100);
}

function expandAdDown(){
	$(".a2").slideDown(400);
	$("#plusAd").hide(100);
	$("#minusAd").show(100);
}
function expandAdUp(){
	$(".a2").slideUp(400);
	$("#plusAd").show(100);
	$("#minusAd").hide(100);
}

function expandKDown(){
	$(".k2").slideDown(400);
	$("#plusK").hide(100);
	$("#minusK").show(100);
}
function expandKUp(){
	$(".k2").slideUp(400);
	$("#plusK").show(100);
	$("#minusK").hide(100);
}
$(document).ready(function(){
  var colors = ["#e74c3c","#f1c40f","#3498db"];                
  var rand = Math.floor(Math.random()*colors.length);           
  $('.top').css("background-color", colors[rand]);
  $('.settings-menu').css("background-color", colors[rand]);
  $('.right-box').css("background-color", colors[rand]);
  $(".logoFont").css("color", colors[rand]);
});
/*****************************
**		CLICK TO ADMIN		**
******************************/
$(".scrollToAdmin").click(function(){
	$('html, body').animate({
        scrollTop: $(".gyurexscroll").offset().top
    }, 1000);
    expandAdDown();
});
/*****************************
**		CLICK TO MENU		**
******************************/
$(".home").click(function(){
	$('html, body').animate({
        scrollTop: $(".l-cont").offset().top
    }, 1000);
});
$(".admins").click(function(){
	$('html, body').animate({
        scrollTop: $(".a2-cont").offset().top
    }, 1000);
    expandAdDown();
});
$(".about").click(function(){
	$('html, body').animate({
        scrollTop: $(".udvozol").offset().top
    }, 1000);
});
$(".contact").click(function(){
	expandKDown();
	$('html, body').animate({
        scrollTop: $(".contact-cont").offset().top
    }, 1000);
    
});
