$(document).ready(function(){

	"use strict";

	//fix the mobile view
	$( window ).resize(function() {
        var curr_width = $( window ).width();
       if(curr_width <= 767) {
       		setTimeout(function () {
                $(".fc-time-grid-container").removeClass('desktop-height');
       			$(".fc-time-grid-container").addClass('mobile-height');
            }, 1);

       		setTimeout(function () {
                $(".fc-day-grid-container").addClass('mobile-height');
            }, 2);
       		
       		setTimeout(function () {
                //for mobile in toolbar
       			$('.fc-toolbar .fc-right, .fc-toolbar .fc-center, .fc-toolbar .fc-left').addClass("margin-top-20");
            }, 3);

       		

       		
       }else{
       		setTimeout(function () {
                $(".fc-day-grid-container").removeClass('mobile-height');
	       		$(".fc-day-grid-container").removeClass('fc-scroller');
	       		$(".fc-day-grid-container").removeAttr('style');
            }, 1);

            setTimeout(function () {
                $(".fc-time-grid-container").removeClass('mobile-height');
       			$(".fc-time-grid-container").addClass('desktop-height');
            }, 2);

            setTimeout(function () {
                //for mobile in toolbar
       			$('.fc-toolbar .fc-right, .fc-toolbar .fc-center, .fc-toolbar .fc-left').removeClass("margin-top-20");
            }, 3);
       		
       }
    });

	var $thisModal = $("#modal-event");


	$(".fc-event-new-category").on("click", function(){
		$thisModal.modal('show');

		//inserting form element
		var html  = "<form>";
			html += "<div class='col-md-6'>";
			html += "<div class='form-group'>";
			html += "<label form='even-name'>Category Name</label>";
			html += "<input class='form-control' placeholder='Category Name' type='text' name='event-category'/>";
			html +="</div></div>";
			html += "<div class='col-md-6'>";
			html += "<div class='form-group'>";
			html += "<label form='even-name'>Category Color</label>";
			html += "<select class='form-control' name='event-color'>";
			html += "<option value='bg-primary' style='background:#337ab7; color:#fff;'>Primary</option>";
			html += "<option value='bg-info' style='background:#5bc0de; color:#fff;'>Info</option>";
			html += "<option value='bg-success' style='background:#5cb85c; color:#fff;'>Success</option>";
			html += "<option value='bg-warning' style='background:#f0ad4e; color:#fff;'>Warning</option>";
			html += "<option value='bg-danger' style='background:#d9534f; color:#fff;'>Danger</option></div></div>";
			html += "</select>";
			html +="</div></div>";
			html += "</form>";

		$thisModal.find(".btn-edit-event").hide().end().find(".btn-delete-event").hide().end().find(".modal-title").html("<strong>Add</strong> a category").end().find('.modal-body').empty().prepend(html).end().find('.btn-save-event').show().unbind('click').click(function () {
			var event_category 	= $thisModal.find('input[name=event-category]');
			var event_color 	= $thisModal.find('select[name=event-color]');
 			if(event_category.val() !== "") {
				$("#external-events").find(".lists").append("<div class='fc-event "+event_color.val()+" ui-draggable ui-draggable-handle' data-bg='"+event_color.val()+"'>"+event_category.val()+"</div>");
				draggableEvents();
				$thisModal.modal("hide");
			}else{
				event_category.css('border','1px  solid red');
				event_category.on('keyup', function(){
					event_category.removeAttr('style');
				});
			}
		});

	});
	
	draggableEvents();
	
    /*  Initialize the calendar  */
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var form = '';
    var today = new Date($.now());


    var calendar = $('#calendar').fullCalendar({
        slotDuration: '00:15:00', /* If we want to split day time each 15minutes */
        minTime: '08:00:00',
        maxTime: '19:00:00',  
        defaultView: 'month',  
        handleWindowResize: true,   
        height: $(window).height() - 200,   
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [{
            title: 'Project Meeting',
            start: new Date($.now() + 158000000),
            className: 'bg-green'
        }, {
            title: 'Project Demo',
            start: today,
            end: today,
            className: 'bg-success'
        }],
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        eventLimit: true, // allow "more" link when too many events
        drop: function (date) { 
            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');
            var $categoryClass = $(this).attr('data-bg');
            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);
            // assign it the date that was reported
            copiedEventObject.start = date;
            if ($categoryClass)
                copiedEventObject['className'] = [$categoryClass];
            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        selectable: true,
        selectHelper: true,
		select: function (start, end, allDay) {
			$thisModal.modal('show');

			

			//insert modal title
			$thisModal.find("div[class='modal-header'] h4.modal-title").html("<strong>Create</strong> new event");

			//inserting form element
			var html = "<form>";
				html += "<div class='col-md-6'>";
				html += "<div class='form-group'>";
				html += "<label form='even-name'>Event Name</label>";
				html += "<input class='form-control' placeholder='Event Name' type='text' name='event-title'/>";
				html +="</div></div>";
				html += "<div class='col-md-6'>";
				html += "<div class='form-group'>";
				html += "<label form='even-name'>Event Category</label>";
				html += "<select class='form-control' name='event-category'>";
				html += "<option value='bg-peter-river'>Work</option>";
				html += "<option value='bg-amethyst'>Home</option>";
				html += "<option value='bg-green'>Sports</option>";
				html += "<option value='bg-orange'>Appointment</option>";
				html += "<option value='bg-alizarin'>Project Meeting</option></div></div>";
				html += "</select>";
				html +="</div></div>";
				html += "</form>";
			
			$thisModal.find('.btn-delete-event').hide().end().find('.btn-edit-event').hide().end().find('.btn-save-event').show().end().find('.modal-body').empty().prepend(html).end().find('.btn-save-event').unbind('click').click(function () {
               
				var event_title = $thisModal.find("input[name='event-title']");
				var event_category = $thisModal.find("select[name='event-category'] option:selected");

				if(event_title.val() !== "") {
					eventData = {
						title: event_title.val(),
						start: start,
						end: end,
						allDay: false,
	                    className: event_category.val()
					};

					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
					$thisModal.modal('hide');
				}else{
					event_title.css('border','1px solid red');

					event_title.on("keyup", function(){
						event_title.removeAttr("style");
					});
				}

            });

			return false;
			$('#calendar').fullCalendar('unselect');
        },
        eventRender: function (event, element) {
        	element.attr('href', 'javascript:void(0);');
        	element.on("click", function() {
        		$thisModal.modal('show');

        		//insert modal title
				$thisModal.find("div[class='modal-header'] h4.modal-title").html("<strong>View</strong> event");

				//remove the content of the modal body
				$thisModal.find("div[class='modal-body']").html("");

				var html = "<form>";
					html += "<div class='col-md-6'>";
					html += "<div class='form-group'>";
					html += "<label form='even-name'>Event Name</label>";
					html += "<input class='form-control' placeholder='Event Name' type='text' name='event-title' value='"+event.title+"' disabled='disabled'/>";
					html +="</div></div>";
					html += "<div class='col-md-6'>";
					html += "<div class='form-group'>";
					html += "<label form='even-name'>Event Category</label>";
					html += "<select class='form-control' name='event-category' disabled='disabled'>";
					html += "<option value='bg-peter-river' "+(event.className[0]=='bg-peter-river' ? 'selected' : '')+">Work</option>";
					html += "<option value='bg-amethyst' "+(event.className[0]=='bg-amethyst' ? 'selected' : '')+">Home</option>";
					html += "<option value='bg-green' "+(event.className[0]=='bg-green' ? 'selected' : '')+">Sports</option>";
					html += "<option value='bg-orange' "+(event.className[0]=='bg-orange' ? 'selected' : '')+">Appointment</option>";
					html += "<option value='bg-alizarin' "+(event.className[0]=='bg-alizarin' ? 'selected' : '')+">Project Meeting</option></div></div>";
					html += "</select>";
					html +="</div></div>";
					html += "</form>";
				$thisModal.find("div[class='modal-body']").html(html);

        		var start_date = moment(event.start).format('MMM Do h:mm A');
        		var end_date = moment(event.end).format('MMM Do h:mm A');

        		
        		$thisModal.find('.btn-delete-event').show().end().find('.btn-edit-event').show().end().find('.btn-save-event').hide().end().find('.modal-body').empty().prepend(html).end().find('.btn-delete-event').unbind('click').click(function () {
	                calendar.fullCalendar('removeEvents', function (ev) {
	                    return (ev._id == event._id);
	                });
	                $thisModal.modal('hide');
	            });

	            $thisModal.find('.btn-edit-event').unbind('click').on("click", function () {
	                $(this).hide();
	                $thisModal.find('.btn-save-event').show();
	                $thisModal.find("input[name='event-title']").removeAttr("disabled");
	                $thisModal.find("select[name='event-category']").removeAttr("disabled");
	            });

	            $thisModal.find('.btn-save-event').unbind('click').on("click", function () {
	            	event.title = $thisModal.find("input[type=text]").val();
	            	event.className = $thisModal.find("select[name=event-category]").val();

	                calendar.fullCalendar('updateEvent', event);
	                $thisModal.modal('hide');
	                return false;
	            });

        	});
        }



    });

});


function draggableEvents() {
	$('#external-events .fc-event').each(function () {
        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };
        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);
        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });
    });
}