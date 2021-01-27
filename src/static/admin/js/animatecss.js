(function($) {

	"use strict";

	
	try 
	{	


      function testAnim(x) {
        $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass();
        });
      };

      $('.js--triggerAnimation').on("click", function(e){
        e.preventDefault();
        var anim = $('.js--animations').val();
        testAnim(anim);
      });

      $('.js--animations').change(function(){
        var anim = $(this).val();
        testAnim(anim);
      });


	} 
	catch(error) 
	{
		alert("Error occured: "+ error.message);
	}
	   
	
})(jQuery);