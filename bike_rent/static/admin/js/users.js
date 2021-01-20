$(document).ready(function(){

    "use strict";

    $( window ).resize(function() {
        var curr_width = $( window ).width();
        if(curr_width < "650") {
            $('#grid-view').click();
        }
    });

    //adding scroll
    $(".users .user-info-container").niceScroll({
        cursorcolor: "rgba(0, 0, 0, .6)",
        cursorborder: "0px solid #fff",
        cursorborderradius: "0px",
        cursorwidth: "3px"
    });

    //add user basic info scroll
    $(".basic-info-scroll").niceScroll({
        cursorcolor: "rgba(0, 0, 0, .6)",
        cursorborder: "0px solid #fff",
        cursorborderradius: "0px",
        cursorwidth: "3px",
        horizrailenabled:false
    });

    //Edit User
    $(".btn-edit").on("click", function(){

        $(".users .user-view-content .user-view-table-info .info").each(function(){
            var infoContent = $(this).html();
            
            var infoHtml = "<input type='text' class='form-control' value='"+infoContent+"'>";

            //hide the right side icon edit
            $(this).next().hide();

            $(infoHtml).insertAfter(this);

            //hide the info
            $(this).hide();
        });

        $(this).hide();
        $(".btn-cancel").show();
        
    });

    //Cancel Edit
    $(".btn-cancel").on("click", function(){

        $(this).hide();
        $(".btn-edit").show();

        $(".users .user-view-content .user-view-table-info .form-control").each(function(){
            
            //show txt info
            $(this).prev().show();
            //show edit icon right side
            $(this).next().show();
            //remove input to edit
            $(this).remove();
        });

    });

    $('#list-view').on("click", function(event){
        event.preventDefault();
        $('#user-view .item').addClass('list-group-item');

        $('#user-view .item').each(function(){
            var curr_height = $( this ).height();
            $(this).find("img").removeAttr("style");
            $(this).find("img").attr("style", "height:"+curr_height+"px");
        });
        
    });

    $('#grid-view').on("click", function(event){
        event.preventDefault();
        $('#user-view .item').removeClass('list-group-item');
        $('#user-view .item').addClass('grid-group-item');

        $('#user-view .item').each(function(){
            var curr_width = $( this ).width();
            $(this).find("img").removeAttr("style");
        });
    
    });



});