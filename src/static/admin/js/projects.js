$(document).ready(function(){

    "use strict";

    //tooltips
    $('.add-assignee').tooltipster({
        offsetY: 2,
        animation: 'grow',
        position: 'top'
    });

    $('#assignee-name1').tooltipster({
        offsetY: 2,
        animation: 'grow',
        position: 'top'
    });

    $('#assignee-name2').tooltipster({
        offsetY: 2,
        animation: 'grow',
        position: 'top'
    });

    $('#assignee-name3').tooltipster({
        offsetY: 2,
        animation: 'grow',
        position: 'top'
    });

	//select2 multiple
	$("#assignees").select2({
        placeholder: 'Select Assignees',
        allowClear: true
    });

	$('.summernote').summernote({
        tabsize: 2
    });

    $(".project-add-content").niceScroll({
        cursorcolor: "rgba(0, 0, 0, .6)",
        cursorborder: "0px solid #fff",
        cursorborderradius: "0px",
        cursorwidth: "3px",
        horizrailenabled:false
    });
});