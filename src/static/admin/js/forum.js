$(document).ready(function(){

    "use strict";

	var curr_width = $( window ).width();
    if(curr_width <= 990) {

    	$(".page-forum .forum-comments .comment-thumbnail img").removeClass('img-center');
    }else{
    	$(".page-forum .forum-comments .comment-thumbnail img").addClass('img-center');
    }

	$( window ).resize(function() {
		var curr_width = $( window ).width();
        if(curr_width <= 990) {

        	$(".page-forum .forum-comments .comment-thumbnail img").removeClass('img-center');
        }else{
        	$(".page-forum .forum-comments .comment-thumbnail img").addClass('img-center');
        }
    });

});