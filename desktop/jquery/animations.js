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
});