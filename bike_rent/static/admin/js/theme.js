/*

*Project Name: Thema Admin Bootstrap Template;
*Author: Lancecoder;
*Website: lancecoder.com;
*Filename: theme.js

Scipts
 - Left navigation accordion
 - Slim Scroll
 - Nice Scroll
 - Toggle
 - Progress Bar
 - Panels
 - Notific8
 - Tooltipster
 - Style Switcher
 - Sidebar navigation menu selected startup page
 - Email
 - Summernote
 - BG Color
 - Accordion
 - Rippler
 - Modal
 - Popover and Tooltip
 - Owl Carousel
 - Skycons
 - Widgets

*/

var getExactFolder = getExactUrl("packages/thema-v1.5"); //input the theme folder name or application folder name; sample output will be: /themes/mythemes/thema because it is uses in the javascript that has other path

var App = function () {

    "use strict";
    
    return {

        initPage: function() 
        {
            
            //sidebar menu profile options
            $(".profile-options-open").on("click", function(){
                $(".profile-options-container").slideDown('1000');
            });

            $(".profile-options-close").on("click", function(){
                $(".profile-options-container").slideUp('1000');

                $('.profile-main .image, .profile-main .name, .profile-main .position').addClass("animated zoomIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass("animated zoomIn")
                    
                });
            });


            //live progress bar
            var $pb1 = $('#progress-live-1 .progress .progress-bar');
            $('#progress-live-1 #start-progress-1').on('click', function() {
                $pb1.attr('data-transitiongoal', $pb1.attr('data-transitiongoal-backup'));
                $pb1.progressbar().progressbar();
            });

            var $pb2 = $('#progress-live-2 .progress .progress-bar');
            $('#progress-live-2 #start-progress-2').on('click', function() {

                $pb2.attr('data-transitiongoal', $pb2.attr('data-transitiongoal-backup'));
                $pb2.progressbar().progressbar({display_text: 'fill'});
            });

            $('#reset-progress-1').on('click', function() {
                $('#progress-live-1 .progress-bar').attr('data-transitiongoal', 0).progressbar();
            });

            $('#reset-progress-2').on('click', function() {
                $('#progress-live-2 .progress-bar').attr('data-transitiongoal', 0).progressbar();
            });

            //words rotator
            
                $("#words-rotator").wordsrotator({
                    autoLoop: true,             //auto rotate words
                    randomize: false,               //show random entries from the words array
                    stopOnHover: false,             //stop animation on hover
                    changeOnClick: false,           //force animation run on click
                    animationIn: "flipInY",         //css class for entrace animation
                    animationOut: "flipOutY",           //css class for exit animation
                    speed: 2000,                //delay in milliseconds between two words
                    words: ['apple', 'apricot', 'avocado']
                });
            
            

            //iCheck aero
            $('.icheck-aero').iCheck({
              checkboxClass: 'icheckbox_square-aero',
              radioClass: 'iradio_square-aero'
            });

            //iCheck red
            $('.icheck-red').iCheck({
              checkboxClass: 'icheckbox_square-red',
              radioClass: 'iradio_square-red'
            });

            //iCheck blue
            $('.icheck-blue').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue'
            });

            //iCheck green
            $('.icheck-green').iCheck({
              checkboxClass: 'icheckbox_square-green',
              radioClass: 'iradio_square-green'
            });

            //iCheck gray
            $('.icheck-grey').iCheck({
              checkboxClass: 'icheckbox_square-grey',
              radioClass: 'iradio_square-grey'
            });

            //iCheck orange
            $('.icheck-orange').iCheck({
              checkboxClass: 'icheckbox_square-orange',
              radioClass: 'iradio_square-orange'
            });

            //iCheck pink
            $('.icheck-pink').iCheck({
              checkboxClass: 'icheckbox_square-pink',
              radioClass: 'iradio_square-pink'
            });

            //iCheck pink
            $('.icheck-purple').iCheck({
              checkboxClass: 'icheckbox_square-purple',
              radioClass: 'iradio_square-purple'
            });

            //Tooltipster
            $('.tooltip-fullscreen').on('click', function() {
            
                if($(this).hide()) {
                    $('body').fullscreen();
                    $('.tooltip-resize-fullscreen').show();
                }
                
                
            });

            $('.tooltip-resize-fullscreen').on('click', function() {

                if($(this).hide()) {
                    $.fullscreen.exit();
                    $('.tooltip-fullscreen').show();
                }
                

            });  

            $(".btn-menu-grid").on('click', function() {

                var $icongrid = $(this).children();

                var style = document.documentElement.style;

                if (
                    style.webkitTransition !== undefined ||
                    style.MozTransition !== undefined ||
                    style.OTransition !== undefined ||
                    style.MsTransition !== undefined ||
                    style.transition !== undefined
                )
                {
                    
                    $( "#grid-menu" ).toggleClass( "clicked", function(){
                        if($(this).hasClass('clicked')) {
                            $(this).show();
                            $(this).addClass("animated slideInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                                
                                $(this).removeClass("animated slideInDown");
                                
                                $('html, body').animate({
                                    scrollTop: $(this).offset().top - 200
                                }, 1000);

                                $icongrid.addClass("fg-red");
                            
                            });
                        }else{

                            $(this).addClass("animated slideOutUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                                
                                $(this).removeClass("animated slideOutUp");
                                
                                
                                $(this).hide();
                                $icongrid.removeClass("fg-red");
                                

                            });
                            
                        }
                    } );

                }else{
                    $( "#grid-menu" ).toggleClass( "clicked", function(){
                        if($(this).hasClass('clicked')) {

                            $(this).show();

                            $('html, body').animate({
                                scrollTop: $(this).offset().top - 200
                            }, 1000);

                            $icongrid.addClass("fg-red");

                        }else{

                            $(this).hide();
                            $icongrid.removeClass("fg-red");    

                        }

                    });
                }


                
            });

            
            //check browser support transition 
            var style = document.documentElement.style;

            if (
                    style.webkitTransition !== undefined ||
                    style.MozTransition !== undefined ||
                    style.OTransition !== undefined ||
                    style.MsTransition !== undefined ||
                    style.transition !== undefined
            ){
                
            }else{
                $(".no-support-transition").text("Sorry, your browser is not transition supported you cannot use this feature.");
            }

            


        },

        initRightSideBar: function() {

            $(".right-sidebar-panel-content").niceScroll({
                cursorcolor: "rgb(231, 231, 231)",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $("#right-sidebar .right-sidebar-list").niceScroll({
                cursorcolor: "rgb(231, 231, 231)",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            //auto click the sidebar toggles if opened
            $(window).resize(function(){

                if($("html").outerWidth() <= 750) {

                    if($("#sidebar").hasClass("show-left-bar-mobile")) {
                        $("#sidebar").removeClass("show-left-bar-mobile");
                    }

                    if($("#sidebar").hasClass("hide-left-bar")) {
                        $("#sidebar").removeClass("hide-left-bar");
                    }

                    if(!$("#right-sidebar").hasClass("hide-right-bar-notifications")) {
                        $("#right-sidebar").addClass("hide-right-bar-notifications");
                    }

                    if($("#main-content").hasClass("merge-right-sidebar-notifications")) {
                        $("#main-content").removeClass("merge-left merge-right-sidebar-notifications");
                    } 

                    
                    

                }

                //Fixing Issue: 09-25-15
                if($("html").outerWidth() >= 768) {
                    if($("#main-content").hasClass("merge-left") && !$("#main-content").hasClass("merge-right-sidebar-notifications") && !$("#sidebar").hasClass("hide-left-bar")) {
                        $("#main-content").removeClass("merge-left");
                    }
                }  

                // if($(window).width() >= 769) {

                //     alert($(window).width());

                //     if($("#main-content-right.merge-right").length) {
                //         $("#main-content-right").removeClass("merge-right");
                //     }

                //     if($("#right-sidebar.hide-right-bar-notifications.hide-right-sidebar").length) {
                //         $("#right-sidebar").removeClass("hide-right-bar-notifications hide-right-sidebar");
                //     }
                // }


            });

            $('.top-page-header .toggle-right-sidebar span').on('click', function() {  
                

                if($("#right-sidebar").hasClass("hide-right-bar-notifications")) {

                    $(".btn-bottom-right-sidebar-close").fadeIn("fast"); //show the button close for sidebar notifications

                    //insert class to left sidebar
                    if(!$("#sidebar").hasClass('hide-left-bar')) {
                        

                        $("#sidebar").addClass("hide-left-bar");
                        $("#main-content").addClass("merge-left");

                        if($("html").outerWidth() <= 750) {
                            if($('#sidebar').hasClass('show-left-bar-mobile')) {
                                $('#sidebar').removeClass("show-left-bar-mobile");
                            }
                        }

                    }else{
                        if($("html").outerWidth() <= 750) {
                            if($('#sidebar').hasClass('show-left-bar-mobile')) {
                                $('#sidebar').removeClass("show-left-bar-mobile");
                            }
                        }
                    }

                    $("#right-sidebar").removeClass("hide-right-bar-notifications");

                    $("#right-sidebar").addClass(" animated fadeInRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass(" animated fadeInRight");
                    });

                    $("#main-content").addClass("merge-right-sidebar-notifications");

                    $(this).removeClass("fa-outdent");
                    $(this).addClass("fa-indent");

                }else{

                    $(".btn-bottom-right-sidebar-close").fadeOut("fast"); //hide the button close for sidebar notifications

                    //remove class to left sidebar
                    if($("#sidebar").hasClass('hide-left-bar')) {
                        $("#sidebar").removeClass("hide-left-bar");
                        $("#main-content").removeClass("merge-left");
                    }

                    $("#right-sidebar").addClass("hide-right-bar-notifications");

                    $("#right-sidebar").addClass(" animated fadeOutRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass(" animated fadeOutRight");
                    });

                    $("#main-content").removeClass("merge-right-sidebar-notifications");

                    $(this).removeClass("fa-indent");
                    $(this).addClass("fa-outdent");
                }

            });

            $(".btn-bottom-right-sidebar-close").on("click", function(){

                $(this).fadeOut("fast"); //hide the button close for sidebar notifications
                
                //remove class to left sidebar
                if($("#sidebar").hasClass('hide-left-bar')) {
                    $("#sidebar").removeClass("hide-left-bar");
                    $("#main-content").removeClass("merge-left");
                }

                $("#right-sidebar").addClass("hide-right-bar-notifications");

                $("#right-sidebar").addClass(" animated fadeOutRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass(" animated fadeOutRight");
                });

                $("#main-content").removeClass("merge-right-sidebar-notifications");

                $('.top-page-header .toggle-right-sidebar span').removeClass("fa-indent");
                $('.top-page-header .toggle-right-sidebar span').addClass("fa-outdent");
                
            });
        },

        //Left sidebar navigation
        initLeftSideBar: function() {

            
            if ($.fn.dcAccordion) {
                $('#nav-accordion').dcAccordion({
                    eventType: 'click',
                    autoClose: true,
                    saveState: true,
                    disableLink: true,
                    speed: 'slow',
                    showCount: false,
                    autoExpand: true,
                    classExpand: 'dcjq-current-parent'
                });
            }

           

            $(".leftside-navigation .sub-menu > a").on('click', function() {
                var o = ($(this).offset());
                var diff = 80 - o.top;
                if (diff > 0)
                    $(".leftside-navigation").scrollTo("-=" + Math.abs(diff), 500);
                else
                    $(".leftside-navigation").scrollTo("+=" + Math.abs(diff), 500);
            });

            $('.right-sidebar-toggle-box .fa-bars').on('click', function(e) {

                $('#main-content-right').toggleClass('merge-right');
                $('#right-sidebar').toggleClass('hide-right-sidebar');

                e.stopPropagation();


            });

            $('.sidebar-toggle-box .fa-bars').on('click', function(e) {

                $(".leftside-navigation-scroll").niceScroll({
                    cursorcolor: "#1FB5AD",
                    cursorborder: "0px solid #fff",
                    cursorborderradius: "0px",
                    cursorwidth: "3px"
                });

                if(!$("#right-sidebar").hasClass("hide-right-bar-notifications")) {
                    $('#right-sidebar').addClass('hide-right-bar-notifications');
                    $('#main-content').removeClass('merge-right-sidebar-notifications');
                }

                

                $('#sidebar').toggleClass('hide-left-bar show-left-bar-mobile');
                if ($('#sidebar').hasClass('hide-left-bar')) {
                    $(".leftside-navigation-scroll").getNiceScroll().hide();
                }

                $(".leftside-navigation-scroll").getNiceScroll().show();
                $('#main-content').toggleClass('merge-left');

                e.stopPropagation();

                if ($('#container').hasClass('open-right-panel')) {
                    $('#container').removeClass('open-right-panel')
                }

                if ($('.header').hasClass('merge-header')) {
                    $('.header').removeClass('merge-header')
                }

                $(".btn-bottom-right-sidebar-close").fadeOut("fast"); //show the button close for sidebar notifications


            });

            $(".rightside-navigation").niceScroll({
                cursorcolor: "rgba(76, 81, 86, .2)",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $('.toggle-right-box .fa-bars').on('click', function(e) {



                $('#container').toggleClass('open-right-panel');
                $('.right-sidebar').toggleClass('open-right-bar');
                $('.header').toggleClass('merge-header');

                e.stopPropagation();
            });

            $('.header,#main-content,#sidebar').on('click', function() {
                if ($('#container').hasClass('open-right-panel')) {
                    $('#container').removeClass('open-right-panel')
                }
                if ($('.right-sidebar').hasClass('open-right-bar')) {
                    $('.right-sidebar').removeClass('open-right-bar')
                }

                if ($('.header').hasClass('merge-header')) {
                    $('.header').removeClass('merge-header')
                }


            });
        },

        //Progress Bar
        initProgressBar: function() {
            if ($(".progress .progress-bar")[0]) {
                $('.progress .progress-bar').progressbar(); // bootstrap 3
            }
        },

        //Panels
        initPanels: function() {

            if (!$().sortable) {
                return;
            }

            $('.sortable').sortable({
                connectWith: '.sortable',
                item: '.c_panel',
                cursor: 'move',
                helper: 'original',
                revert: true,
                placeholder: 'panel-placeholder',
                forcePlaceholderSize: true,
                opacity: 0.8,
                //axis: 'x',
                sortAnimateDuration: 400,
                sortAnimate: true,  
                stop: function(event, ui){
                    var sortorder='';
                    $('.column').each(function(){
                        var itemorder=$(this).sortable('toArray');
                        var columnId=$(this).attr('id');
                        sortorder+=columnId+'='+itemorder.toString()+'&';
                    });
                    $(".sortable-panel-json-generated pre").html('Sort Order Result: '+JSON.stringify(sortorder));
                    /*Pass sortorder variable to server using ajax to save state*/
                }
            })
            $(".column").disableSelection();


            //panel scoller for fixed height
            $(".c_panel .scroller").niceScroll({
                cursorcolor: "#ddd",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "5px"
            });

            $('.full-screen').on('click', function() {
                var c_panel = $(this).closest('div.c_panel');

                if(c_panel.attr('style')) {
                    c_panel.removeAttr('style');
                    $(this).find('span[class=icon-size-actual]').remove();
                    $(this).html('<span class="icon-size-fullscreen"></span>');
                }else{
                    $(this).find('span[class=icon-size-fullscreen]').remove();
                    $(this).html('<span class="icon-size-actual"></span>');
                    
                    c_panel.css({
                        'position':'fixed',
                        'top':0,
                        'left':0,
                        width: '100%',
                        height: '100%',
                        'z-index':10000
                    });
                }
                
            });


            /** Collapse box function **/
            $('.collapse-link').on('click', function() {
                var c_panel = $(this).closest('div.c_panel');
                var button = $(this).find('i');
                var content = c_panel.find('div.c_content');
                content.slideToggle(200);
                (c_panel.hasClass('fixed_height_390') ? c_panel.toggleClass('').toggleClass('fixed_height_390') : '');
                (c_panel.hasClass('fixed_height_320') ? c_panel.toggleClass('').toggleClass('fixed_height_320') : '');
                button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                setTimeout(function () {
                    c_panel.resize();
                }, 50);
            });
    
            // Close box function
            $('.close-link').on('click', function() {
                var content = $(this).closest('div.c_panel');
                content.remove();
            });

            $(".c_panel .overlay").append('<img src="'+getExactFolder+'/assets/images/loader.gif" class="loading-overlay">');

        
            //check if panel has tab inside  addclass unpadding
            $(".c_panel [class*='line-tabs bottom pull-left']").parent().parent().find(".tab-content").addClass('unpadding');
        },

        initSlimScroll: function() {
            if ($.fn.slimScroll) {
                $('.event-list').slimscroll({
                    height: '305px',
                    wheelStep: 20
                });
                $('.conversation-list').slimscroll({
                    height: '360px',
                    wheelStep: 35
                });
                $('.to-do-list').slimscroll({
                    height: '300px',
                    wheelStep: 35
                });
            }
        },

        //Nice Scroll 
        initNiceScroll: function () {
            

            /*==Nice Scroll ==*/
            if ($.fn.niceScroll) {


                $(".leftside-navigation-scroll").niceScroll({
                    cursorcolor:"rgba(76, 81, 86, .2)",
                    cursorborder: "0px solid #fff",
                    cursorborderradius: "0px",
                    cursorwidth: "3px"
                });

                $(".leftside-navigation-scroll").getNiceScroll().resize();
                if ($('#sidebar').hasClass('hide-left-bar')) {
                    $(".leftside-navigation-scroll").getNiceScroll().hide();
                }
                $(".leftside-navigation-scroll").getNiceScroll().show();

            }
        },
    
        //Counters 
        initCounter: function () {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },

        //Counters 
        initNotific8: function (heading, message, message_type, life, isSticky, horizontalEdge, verticalEdge) {
            
                
                if(message_type == "warning") {

                    if(isSticky !== "" || horizontalEdge !== "" || verticalEdge !== "") {
                        return $.notific8(message, {
                            life: life,
                            heading: heading,
                            icon: 'exclamation-triangle',
                            theme: message_type,
                            sticky: isSticky,
                            horizontalEdge: horizontalEdge,
                            verticalEdge: verticalEdge
                        });
                    }else{
                        return $.notific8(message, {
                            life: life,
                            heading: heading,
                            icon: 'exclamation-triangle',
                            theme: message_type
                        });
                    }
                    

                }else if(message_type == "success") {

                    if(isSticky !== "" || horizontalEdge !== "" || verticalEdge !== "") {
                        return $.notific8(message, {
                            life: life,
                            heading: heading,
                            icon: 'check-mark-2',
                            theme: message_type,
                            sticky: isSticky,
                            horizontalEdge: horizontalEdge,
                            verticalEdge: verticalEdge
                        });
                    }else{
                        return $.notific8(message, {
                            life: life,
                            heading: heading,
                            icon: 'check-mark-2',
                            theme: message_type
                        });
                    }

                }else if(message_type == "danger") {

                    if(isSticky !== "" || horizontalEdge !== "" || verticalEdge !== "") {
                        return $.notific8(message, {
                            life: life,
                            heading: heading,
                            icon: 'fa-ban',
                            theme: message_type,
                            sticky: isSticky,
                            horizontalEdge: horizontalEdge,
                            verticalEdge: verticalEdge
                        });
                    }else{
                        return $.notific8(message, {
                            life: life,
                            heading: heading,
                            icon: 'fa-ban',
                            theme: message_type
                        });
                    }

                }

                
            
        },

        initTooltipster: function(){

            $('.title-open-right-sidebar').tooltipster({
                offsetY: 2,
                animation: 'grow',
                position: 'right'
            });

            $('.mailbox-refresh').tooltipster({
                offsetY: 2,
                animation: 'grow',
                position: 'top'
            });

            $(document).find('title').tooltipster({
                offsetY: 2,
                animation: 'grow'
            });

            $('.btn-menu-grid').tooltipster({
                offsetY: 2,
                animation: 'grow',
                position: 'right'
            });

            $('.mail-reply-action .btn-reply').tooltipster({
                offsetY: 2,
                animation: 'grow',
                position: 'top'
            });

            $('.mail-reply-action .btn-reply-all').tooltipster({
                offsetY: 2,
                animation: 'grow',
                position: 'top'
            });

            $('.mail-reply-action .btn-forward').tooltipster({
                offsetY: 2,
                animation: 'grow',
                position: 'top'
            });

            $('.mail-reply-action .btn-print').tooltipster({
                offsetY: 2,
                animation: 'grow',
                position: 'top'
            });

             $('.mail-reply-action .btn-delete').tooltipster({
                offsetY: 2,
                animation: 'grow',
                position: 'top'
            });
        },

        //Style Switcher
        initStyleSwitcher: function() {    
            var panel = $('.style-switcher');

            $('.style-switcher-btn').on('click', function() {
                
                $('.style-switcher').show();
                $('.style-switcher').addClass(" animated fadeInRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(this).removeClass(" animated fadeInRight");
                });
            });

            $('.theme-close').on('click', function() {
                
                var style = document.documentElement.style;

                if (
                    style.webkitTransition !== undefined ||
                    style.MozTransition !== undefined ||
                    style.OTransition !== undefined ||
                    style.MsTransition !== undefined ||
                    style.transition !== undefined
                )
                {
                    $('.style-switcher').addClass(" animated fadeOutRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        if($(this).removeClass(" animated fadeOutRight")) {
                            $(this).hide();
                        }
                    });

                }else{
                    $('.style-switcher').hide();
                }
                
            });
            
            $('li', panel).on('click', function() {
                var color = $(this).attr("data-style");
                setColor(color);
                $('.list-unstyled li', panel).removeClass("theme-active");
                $(this).addClass("theme-active");
            });

            var setColor = function (color) {
                if(color == "default") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "default-scheme");
                }else if(color == "turquoise") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "turquoise-scheme");
                }else if(color == "blue") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "blue-scheme");
                }else if(color == "amethyst") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "amethyst-scheme");
                }else if(color == "cloud") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "cloud-scheme");
                }else if(color == "sun-flower") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "sun-flower-scheme");
                }else if(color == "carrot") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "carrot-scheme");
                }else if(color == "alizarin") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "alizarin-scheme");
                }else if(color == "concrete") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "concrete-scheme");
                }else if(color == "wet-ashphalt") {
                    $('body').removeAttr("id");
                    $('body').attr("id", "wet-asphalt-scheme");
                }  
            }

            //Boxed Layout
            $('.skins-btn').on('click', function() {
                $(this).addClass("active-switcher-btn");
                $(".handle-skins-btn").removeClass("active-switcher-btn");
                $("body").addClass("dark");                
            });
            $('.handle-skins-btn').on('click', function() {
                $(this).addClass("active-switcher-btn");
                $(".skins-btn").removeClass("active-switcher-btn");
                $("body").removeClass("dark");                
            });


            //Boxed Layout
            $('.boxed-layout-btn').on('click', function() {
                $(this).addClass("active-switcher-btn");
                $(".wide-layout-btn").removeClass("active-switcher-btn");
                $("body").addClass("boxed-layout container");
            });
            $('.wide-layout-btn').on('click', function() {
                $(this).addClass("active-switcher-btn");
                $(".boxed-layout-btn").removeClass("active-switcher-btn");
                $("body").removeClass("boxed-layout container");
            });

        },

        initMenuSelected: function(){
            $( "ul.sub li a.active" ).closest( "ul" ).show().parent().children().addClass('active');

            var pathname = window.location.pathname;

            var hostname = window.location.hostname;

            var protocol = window.location.protocol;

            var arr_pathname = pathname.split("/");
            var last_value =  arr_pathname[arr_pathname.length-1];

            if(pathname.slice(-1) != "/") {

                if(last_value != "index.php") {

                    if($(".leftside-navigation").length && $(".leftside-navigation").find("a[href='"+protocol+"//"+hostname+""+pathname+"']").parent().html() !== undefined) {
                        $(".leftside-navigation").animate({ 
                            scrollTop: $('.leftside-navigation li>a.active').offset().top 
                        }, 1000);
                    }

                    
                }
                
            }
            
        },

        initEmail:function(){

            //check all
            //var ckbox = $('#mail-check-all');

            //$('input#mail-check-all').on('ifChecked',function (event) {
                //$(this).attr("checked", true);
                // if(event.type {

                // }
                // if($("input.message-select").find("ifChecked")) {
                //     $('input.message-select').iCheck('check');
                // }else{
                //     $('input.message-select').iCheck('uncheck');
                // }
            //});


            //attach
            $(".mail-attach").on('click', function() {
                $(".file-attach").click();
            });

            //button cc
            $(".btn-cc").on('click', function() {
                if($(".mail-cc").hasClass("display-none")) {
                    $(".mail-cc").removeClass("display-none");
                    $(".mail-cc").slideDown("500");
                    $(".btn-cc").html('<i class="fa fa-close text-danger"></i> Cc');
                }else{
                     $(".mail-cc").addClass("display-none");
                    $(".mail-cc").slideUp("500");
                    $(".btn-cc").html('<i class="fa fa-plus text-success"></i> Cc');
                }
                
            });

            //button bcc
            $(".btn-bcc").on('click', function() {
                if($(".mail-bcc").hasClass("display-none")) {
                    $(".mail-bcc").removeClass("display-none");
                    $(".mail-bcc").slideDown("500");
                    $(".btn-bcc").html('<i class="fa fa-close text-danger"></i> Bcc');
                }else{
                     $(".mail-bcc").addClass("display-none");
                    $(".mail-bcc").slideUp("500");
                    $(".btn-bcc").html('<i class="fa fa-plus text-success"></i> Bcc');
                }
                
            });
        },

        initSummernote:function() {
            $('.summernote').summernote({
                tabsize: 2,
            });

            $('.create-email-summernote').summernote({
                tabsize: 2,
                height: 300
            });

            $('.summernote-airmode').summernote({
                tabsize: 2,
                airMode: true
            });


        },
        
        initAccordion:function() {

            
        },

        initRippler: function() {
            $(".rippler").rippler({
                effectClass      :  'rippler-effect'
                ,effectSize      :  16      // Default size (width & height)
                ,addElement      :  'div'   // e.g. 'svg'(feature)
                ,duration        :  400
            });
        },

        initLadda: function(){
            Ladda.bind( 'div:not(.progress-demo) button.ladda-button', { timeout: 2000 } );

            // Bind progress buttons and simulate loading progress
            Ladda.bind( '.progress-demo button.ladda-button', {
                callback: function( instance ) {
                    var progress = 0;
                    var interval = setInterval( function() {
                        progress = Math.min( progress + Math.random() * 0.1, 1 );
                        instance.setProgress( progress );

                        if( progress === 1 ) {
                            instance.stop();
                            clearInterval( interval );
                        }
                    }, 200 );
                }
            } );
        },

        initModal: function() {

        },

        initPopover: function() {
            // add the animation to the popover
            $("a[rel=popover]").popover().on('click', function(e) {
                e.preventDefault();

                var _defEaseIn = "fadeIn";

                if($(this).data('easein')!=undefined){  
                    $(this).next().removeClass($(this).data('easein')).addClass('animated ' + $(this).data('easein')).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass('animated ' + $(this).data('easein'));
                    });
                }else{
                    $(this).next().addClass('animated ' + _defEaseIn).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass('animated ' + _defEaseIn);
                    });
                }

            });

            $('[data-toggle="tooltip"]').tooltip();
        },

        initOwlCarousel: function() {

            //slider 1
            var owl1 = $(".owl-carousel-1 .owl-slider").owlCarousel({
                itemsDesktop : [1000,5],
                itemsDesktopSmall : [900,4],
                itemsTablet: [600,3],
                itemsMobile : [479,2],
            });
            $(".owl-carousel-1 .next").on('click', function() {
                owl1.trigger('owl.next');
            });
            $(".owl-carousel-1 .prev").on('click', function() {
                owl1.trigger('owl.prev');
            });

            //slider 2
            var owl2 = $(".owl-carousel-2 .owl-slider").owlCarousel({
                itemsDesktop : [1000,5],
                itemsDesktopSmall : [900,4],
                itemsTablet: [600,3],
                itemsMobile : [479,2],
                slideSpeed: 1000
            });
            $(".owl-carousel-2 .next").on('click', function() {
                owl2.trigger('owl.next');
            })
            $(".owl-carousel-2 .prev").on('click', function() {
                owl2.trigger('owl.prev');
            })

            //slider 3
            $(".owl-carousel-3 .owl-slider").owlCarousel({
                items:3,
                itemsDesktop : [1000,3],
                itemsTablet : [600,2],
                itemsMobile : [479,1]
            });

        },

        //Skycons
        initSkyCons: function() {

            

            var icons = new Skycons({
                "color": "rgb(85, 168, 237)"
            }),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;

            for (i = list.length; i--;)
                icons.set(list[i], list[i]);
            
            icons.play();
        },

        //Skycons
        initWidgets: function() {

            /*
            Chat Conversation
            ----------------------------------------------*/
            $('.chat-msg-list').niceScroll({
                cursorcolor: "#E4E4E4",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px",
                horizrailenabled:false
            });

            $('.widget .chat-input').keypress(function(e) {
                if(e.which == 13) {
                    var chatTime = new Date();
                    chatTime = chatTime.toLocaleTimeString().replace(/:\d+ /, ' '); 
                    var curr_dt = getDayName() + ' ' + chatTime;
                    var chatText = $('.widget .chat-input').val();



                    if (chatText == "") {
                        App.initNotific8('Error', 'Chat field is required!', 'warning', 5000);
                        $(".widget .chat-input").focus();
                    } else {
                        $('<li class="clearfix even"><div class="chat-avatar"><img src="'+getExactFolder+'/assets/images/users/img4.jpg" alt="male" width="43"></div><div class="conversation-text"><div class="msg-text"><i>John Doe</i><p>' + chatText + '</p></div><p> ' + curr_dt + '</div></li>').appendTo('.widget .chat-msg-list');
                        $('.chat-input').val('');
                        $(".chat-input").focus();
                        $('.chat-msg-list').scrollTo('100%', '100%', {
                            easing: 'swing'
                        });
                    }
                }
            });

            

            $('.widget .send-msg .btn').on('click', function() {
                var chatTime = new Date();
                chatTime = chatTime.toLocaleTimeString().replace(/:\d+ /, ' '); 
                var curr_dt = getDayName() + ' ' + chatTime;
                var chatText = $('.widget .chat-input').val();
                if (chatText == "") {
                    
                    //function notific8(heading, message, message_type, life, isSticky, horizontalEdge, verticalEdge) {

                    App.initNotific8('Error', 'Chat field is required!', 'warning', 5000);
                   
                    $(".widget .chat-input").focus();
                } else {
                    $('<li class="clearfix even"><div class="chat-avatar"><img src="'+getExactFolder+'/assets/images/users/img4.jpg" alt="male" width="43"></div><div class="conversation-text"><div class="msg-text"><i>John Doe</i><p>' + chatText + '</p></div><p> ' + curr_dt + '</div></li>').appendTo('.widget .chat-msg-list');
                    $('.widget .chat-input').val('');
                    $(".widget .chat-input").focus();
                    $('.widget .chat-msg-list').scrollTo('100%', '100%', {
                        easing: 'swing'
                    });
                }
            });

            function getDayName() {
                var d = new Date();
                var weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";

                var n = weekday[d.getDay()];
                
                return n;
            }




            /*
            Project Status widgets
            ---------------------------------------------*/
            $(".widget .widget-content .projects").niceScroll({
                cursorcolor: "#E4E4E4",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px",
                horizrailenabled:false
            });



            /*
            Todo List Widgets
            -----------------------------------------------*/
            $("body").delegate(".widget .todo-list .btn-todo-check", "click", function(){
                var $this = $(this);

                if($this.hasClass('checked')) {
                    if($this.parent().parent().parent().parent().find(".todo-title span").removeClass('strike')) {
                        $this.removeClass("checked");
                        $this.removeClass("fa-check-square-o");
                        $this.addClass("fa-square-o");
                    }
                    
                }else{
                    if($this.parent().parent().parent().parent().find(".todo-title span").addClass('strike')) {
                        $this.removeClass("fa-square-o");
                        $this.addClass("checked fa-check-square-o");
                    }
                }
                
            });


            $("body").delegate(".widget .todo-list .btn-todo-remove", "click", function(){
                var $this = $(this);

                var style = document.documentElement.style;

                if (
                    style.webkitTransition !== undefined ||
                    style.MozTransition !== undefined ||
                    style.OTransition !== undefined ||
                    style.MsTransition !== undefined ||
                    style.transition !== undefined
                )
                {

                    $this.parent().parent().parent().parent().addClass("animated slideOutLeft bg-danger").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        if($(this).removeClass("animated slideOutLeft")) {
                            $(this).remove();
                        }
                    });

                }else{
                    $this.parent().parent().parent().parent().remove();
                }

                
            });

            $(".widget .todo-list .btn-save-new-task").on("click", function(){
                var $this = $(this);
                var title = $this.parent().parent().find(".txtTitleTodo");

                if(title.val() === "") {
                    title.css("border", "1px solid red");

                    $(title).on("keyup", function(){
                        title.removeAttr("style");
                    });

                }else{

                    var html =  '<li class="sortable-item">'; 
                        html += '<div style="float:left;" class="todo-actions">';
                        html += '<div class="wrapper-actions">';
                        html += '<div style="float:left">'
                        html += '<span class="fa fa-square-o bg-success padding-top-12 btn-todo-check" style="width:40px; height:40px;"></span>';
                        html += '</div>';
                        html += '<div style="float:right;">';
                        html += '<span class="fa fa-times bg-danger padding-top-12 btn-todo-remove" style="width:40px; height:40px;"></span>';
                        html += '</div>';
                        html += '<div class="clearfix"></div>';
                        html += '</div>';
                        html += '</div>';
                        html += '<div style="float:right; float:left" class="todo-title">';
                        html += '<span>'+title.val()+'</span>';
                        html += '</div>';
                        html += '<div class="clearfix"></div>';
                        html += '</li>';

                    $(".widget .todo-list ul").append(html); //append added task

                    $this.prev().click(); //close modal
                    title.val("");

                }

                
            });

            if ($.fn.sortable) {
                $('.todo-list ul').sortable({
                    placeholder: "ui-state-highlight",
                    axis: 'y',
                    containment: 'parent',
                    sortAnimateDuration: 200,
                    sortAnimate: true
                });
            }
            

            $(".todo-list ul").niceScroll({
                cursorcolor: "#E4E4E4",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px",
                horizrailenabled:false
            });




            /*
            WEEKLY SUMMARY Widget
            -----------------------------------------------*/
            if ($.fn.niceScroll) {

                $(".top-profiles-wrapper").niceScroll({
                    cursorcolor: "#E4E4E4",
                    cursorborder: "0px solid #fff",
                    cursorborderradius: "0px",
                    cursorwidth: "3px"
                });
            }




            /*
            VISITORS SUMMARY WIDGET
            -----------------------------------------------*/
            if($('.widget #world-map-gdp-1').length) {

                var colors = ["rgba(26, 26, 26, .8)", "rgba(173, 171, 171, .6)", "rgba(173, 171, 171, .4)", "rgba(173, 171, 171, .)"];

                $('.widget #world-map-gdp-1').vectorMap({
                    map: 'world_mill_en',
                    backgroundColor: 'transparent',
                    zoomOnScroll: false,
                    series: {
                        regions: [{
                            values: gdpData,
                            scale: ['#E6F2F0', '#262626', '#404040', '#595959'],
                            normalizeFunction: 'polynomial'
                        }]
                    },
                    onRegionTipShow: function (e, el, code) {
                        el.html(el.html() + ' (' + gdpData[code] + ')');
                    }
                });
                
            }


            /*
            RELATED POSTS WIDGET
            -----------------------------------------------*/
            if ($.fn.niceScroll) {

                $(".widget .related-posts").niceScroll({
                    cursorcolor: "#E4E4E4",
                    cursorborder: "0px solid #fff",
                    cursorborderradius: "0px",
                    cursorwidth: "3px"
                });

                 $(".widget .posts").niceScroll({
                    cursorcolor: "#E4E4E4",
                    cursorborder: "0px solid #fff",
                    cursorborderradius: "0px",
                    cursorwidth: "3px"
                });
            }


            /*
             WIDGET USER LOACTION
            -----------------------------------------------*/
           if($('#map-user-location').length) {
              var map = new GMaps({
                el: '#map-user-location',
                lat: -12.043333,
                lng: -77.028333
              });
              map.addMarker({
                lat: -12.042,
                lng: -77.028333,
                title: 'Marker with InfoWindow',
                infoWindow: {
                  content: '<p>John Doe Current Location</p>'
                }
              });
            }




            /*
             WIDGET USERS ONLINE MAP
            -----------------------------------------------*/
            if($('#map-users-online').length) {
                
              $("#map-users-online").gmap3({
                  map:{
                    options:{
                      center:[46.578498,2.457275],
                      zoom: 3,
                      mapTypeId: google.maps.MapTypeId.TERRAIN
                    },
                    events:{
                      zoom_changed: function(map){
                        appendMarkers(map.getZoom());
                      }
                    },
                    callback: function(map){
                      appendMarkers(map.getZoom());
                    }
                  }
                });

            }  
            


        }

    };

}();


/** Global variable of background colors **/
var bgEmerald       = "#2ECC71",
bgEmerald1          = "#86F7B6",
bgEmerald2          = "#77F2AB",
bgEmerald3          = "#61E89B",
bgEmerald4          = "#4EDE8B",
bgEmeraldHover      = "#27AE60",
bgWhite             = "#ffffff",
bgTorquoise         = "#1ABC9C",
bgTorquoise1        = "#7AF5DD",
bgTorquoise2        = "#5FEDD1",
bgTorquoise3        = "#4BEBCB",
bgTorquoise4        = "#31DEBC",
bgTorquoiseHover    = "#16A085",

bgPeterRiver        = "#3498DB",
bgPeterRiverHover   = "#2980B9",
bgAmethyst          = "#9B59B6",
bgAmethystHover     = "#8E44AD",
bgAsphalt           = "#34495E",
bgAsphaltHover      = "#2C3E50",
bgSunFlower         = "#F1C40F",
bgSunFlowerHover    = "#F39C12",
bgCarrot            = "#E67E22",
bgCarrotHover       = "#D35400",
bgAlizarin          = "#E74C3C",
bgAlizarinHover     = "#C0392B",
bgClouds            = "#ECF0F1",
bgCloudsHover       = "#BDC3C7",
bgConcrete          = "#95A5A6",
bgConcreteHover     = "#7F8C8D",
bgPrimary           = "#337ab7",
bgInfo              = "#5bc0de",
bgSuccess           = "#5cb85c",
bgWarning           = "#f0ad4e",
bgDanger            = "#d9534f";



/******** FUNCTIONS ************/

function getExactUrl(theme_folder) {
    var pathname = window.location.pathname;

    var array_theme_folder = theme_folder.split("/");

    if(array_theme_folder.length > 1) {
        theme_folder = array_theme_folder[array_theme_folder.length-1] //get the last array value
    }

    var pathname_array = pathname.split("/");

    var i;

    var out_folders_array = [];

    for(i = 0; i <= pathname_array.indexOf(theme_folder); i++) {
        out_folders_array.push(pathname_array[i]);
    }

    return out_folders_array.join("/");
}


function getMarkersFromDatabase(zoomLevel){
    var i, j, result = [];
    if (zoomLevel < 5){
      for(i=0; i<database.length; i++){
        result.push({
          latLng:database[i].main.pos,
          data:{
            label: database[i].main.label,
            count: database[i].list.length
          }
        });
      }
    } else {
      for(i=0; i<database.length; i++){
        for(j=0; j<database[i].list.length; j++){
          result.push({
            latLng:database[i].list[j].pos,
            data:{
              label: database[i].list[j].label,
              count: 1
            }
          });
        }
      }
    }
    return result;
}

function appendMarkers(zoomLevel){
    $("#map-users-online").gmap3({
      clear:{name:"clusterer"},
      marker:{
        values: getMarkersFromDatabase(zoomLevel),
        cluster:{
          radius:100,
          calculator: function(values){
            var i, cnt = 0;
            for(i=0; i<values.length; i++){
              if (values[i] && values[i].data && values[i].data.count){
                cnt += values[i].data.count;
              } else {
                cnt++;
              }
            }
            return cnt;
          },
          // This style will be used for clusters with more than 0 markers
          0: {
            content: "<div class='cluster cluster-1'>CLUSTER_COUNT</div>",
            width: 53,
            height: 52
          },
          // This style will be used for clusters with more than 20 markers
          20: {
            content: "<div class='cluster cluster-2'>CLUSTER_COUNT</div>",
            width: 56,
            height: 55
          },
          // This style will be used for clusters with more than 50 markers
          50: {
            content: "<div class='cluster cluster-3'>CLUSTER_COUNT</div>",
            width: 66,
            height: 65
          }
        },
        options: {
          icon: new google.maps.MarkerImage("http://maps.gstatic.com/mapfiles/icon_green.png")
        }
      }
    });
}