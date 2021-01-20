$(document).ready(function(){

	"use strict";

	var newYear = new Date(); 
	newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
	$('#countdown-timer').countdown({until: newYear})
});

$.backstretch([
  	"../../../assets/images/timelines/img3.jpg", 
  	"../../../assets/images/timelines/img4.jpg", 
  	"../../../assets/images/timelines/img5.jpg"
], {
	duration: 3000, 
	fade: 750
});