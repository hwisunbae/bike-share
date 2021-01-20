(function($) {

	"use strict";

	
	try 
	{	

    $(".page-swal .basic-alert").on("click", function(){
      swal("Here's a message!");
    });

    $(".page-swal .text-under").on("click", function(){
      swal("Here's a message!", "It's pretty, isn't it?")
    });

    $(".page-swal .success-message-swal").on("click", function(){
      swal("Good job!", "You clicked the button!", "success")
    });

    $(".page-swal .warning-message-swal").on("click", function(){
      swal({   
        title: "Are you sure?",   
        text: "You will not be able to recover this imaginary file!",   
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "#DD6B55",   
        confirmButtonText: "Yes, delete it!",   
        closeOnConfirm: false 
      }, 
      function(){   
        swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
      });
    });

    $(".page-swal .warning-message-swal2").on("click", function(){
      swal({   
        title: "Are you sure?",   
        text: "You will not be able to recover this imaginary file!",   
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "#DD6B55",   
        confirmButtonText: "Yes, delete it!",   
        cancelButtonText: "No, cancel plx!",   
        closeOnConfirm: false,   
        closeOnCancel: false 
      }, 
      function(isConfirm){   
        if (isConfirm) {     
          swal("Deleted!", "Your imaginary file has been deleted.", "success");   
        } else {     
          swal("Cancelled", "Your imaginary file is safe :)", "error");   
        } 
      });
    });


    $(".page-swal .message-custom-icon").on("click", function(){
      swal({   
        title: "Sweet!",   
        text: "Here's a custom image.",   
        imageUrl: "http://t4t5.github.io/sweetalert/example/images/thumbs-up.jpg" 
      });
    });


    $(".page-swal .html-message-swal").on("click", function(){
      swal({   
        title: "HTML <small>Title</small>!",   
        text: "A custom <span style='color:#F8BB86'>html<span> message.",   
        html: true 
      });
    });

    $(".page-swal .auto-close-message-swal").on("click", function(){
      swal({   
        title: "Auto close alert!",   
        text: "I will close in 2 seconds.",   
        timer: 2000,   
        showConfirmButton: false 
      });
    });

	} 
	catch(error) 
	{
		alert("Error occured: "+ error.message);
	}
	   
	
})(jQuery);