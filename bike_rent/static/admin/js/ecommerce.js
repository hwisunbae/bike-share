$(document).ready(function(){

    "use strict";

	//validator
    var $validatorCheckout = $("#checkout-wizard-form").validate({
        //ignore: [],
        rules: {
            // firstName: {
            //     required: true
            // },
            // lastName: {
            //     required: true
            // },
            // email: {
            //     required: true,
            //     email: true
            // },
            // pass1: {
            //     required: true
            // },
            // pass2: {
            //     required: true,
            //     equalTo: '#pass1'
            // },
            // shippingFullName: {
            //     required: true
            // },
            // shippingEmail: {
            //     required: true
            // },
            // exampleInputCard: {
            //     required: true,
            //     number: true
            // },
            // exampleInputSecurity: {
            //     required: true,
            //     number: true
            // },
            // exampleInputHolder: {
            //     required: true
            // },
            // exampleInputExpiration: {
            //     required: true,
            //     date: true
            // },
            // exampleInputCsv: {
            //     required: true,
            //     number: true
            // }
        }
    });

    //wizard
    $('#ecommerce-wizard').bootstrapWizard({
        'tabClass': 'nav nav-tabs',
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            $('#ecommerce-wizard').find('.progress-bar').css({width:$percent+'%'});
        },
        'onNext': function(tab, navigation, index) {
            var $valid = $("#checkout-wizard-form").valid();
            if(!$valid) {
                $validatorCheckout.focusInvalid();
                return false;
            }
        },
        'onTabClick': function(tab, navigation, index) {
            var $valid = $("#checkout-wizard-form").valid();
            if(!$valid) {
                $validatorCheckout.focusInvalid();
                return false;
            }
        },
    });


	//product quantity
	$("input[name='prodcut-quantity']").TouchSpin({
        buttondown_class: "btn btn-link",
        buttonup_class: "btn btn-link"
    });

	//ecommerce list/grid view options
	$('#ecommerce-list-view').on("click", function(event){
        event.preventDefault();
        $('#ecommerce-grid-view').removeClass("active");
        $(this).addClass("active");

        $('.ecommerce-view .item').addClass('list-group-item');

        // $('.ecommerce-view .item').each(function(){
        //     var curr_height = $( this ).height();
        //     $(this).find("img").removeAttr("style");
        //     $(this).find("img").attr("style", "height:"+curr_height+"px");
        // });
        
    });

    $('#ecommerce-grid-view').on("click", function(event){
        event.preventDefault();
        $('.ecommerce-view .item').removeClass('list-group-item');
        $('.ecommerce-view .item').addClass('grid-group-item');

        $('#ecommerce-list-view').removeClass("active");
        $(this).addClass("active");

        // $('.ecommerce-view .item').each(function(){
        //     var curr_width = $( this ).width();
        //     $(this).find("img").removeAttr("style");
        // });
    
    });

    //product view slider
    $(".product-view-slider").owlCarousel({
 		dots: false,
      	navigation : true, // Show next and prev buttons
      	slideSpeed : 300,
      	paginationSpeed : 400,
      	singleItem:true,
 		navigationText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"]
  	});

	//ecommerce slider
	$(".ecommerce-slider").owlCarousel({
 	
      	navigation : false, // Show next and prev buttons
      	slideSpeed : 300,
      	paginationSpeed : 400,
      	singleItem:true
 
  	});


	if($("#ecommerce-stats").length) {
		var d1 = [];
	        d1.push([0, 20]);
	        d1.push([1, 16]);
	        d1.push([2, 17]);
	        d1.push([3, 25]);
	        d1.push([4, 51]);
	        d1.push([5, 57]);
	        d1.push([6, 46]);
	        d1.push([7, 36]);
	        d1.push([8, 27]);
	        d1.push([9, 36]);
	        d1.push([10, 38]);
	        d1.push([11, 41]);
	        d1.push([12, 45]);
	        d1.push([13, 48]);
	        d1.push([14, 40]);
	        d1.push([15, 36]);
	        d1.push([16, 34]);


		$.plot($("#ecommerce-stats"), 
			[ d1 ], { 
				grid: {
				 	backgroundColor: 'white',
				  	color: '#999',
				   	borderWidth: 1,
				    borderColor: '#DDD' 
				}, 
				colors: ["#2ECC71"], 
				series: {
					lines: { 
						show: true, 
						fill: true, 
						fillColor: "rgba(46, 204, 113, 0.5)" 
					} 
				}	 
		});
	}


    if($("#theme-dark-1-ecommerce-stats").length) {
        var d1 = [];
            d1.push([0, 20]);
            d1.push([1, 16]);
            d1.push([2, 17]);
            d1.push([3, 25]);
            d1.push([4, 51]);
            d1.push([5, 57]);
            d1.push([6, 46]);
            d1.push([7, 36]);
            d1.push([8, 27]);
            d1.push([9, 36]);
            d1.push([10, 38]);
            d1.push([11, 41]);
            d1.push([12, 45]);
            d1.push([13, 48]);
            d1.push([14, 40]);
            d1.push([15, 36]);
            d1.push([16, 34]);


        $.plot($("#theme-dark-1-ecommerce-stats"), 
            [ d1 ], { 
                grid: {
                    backgroundColor: 'rgb(88, 65, 85)',
                    color: '#999',
                    borderWidth: 1,
                    borderColor: 'rgb(105, 81, 102)' 
                }, 
                colors: ["#2ECC71"], 
                series: {
                    lines: { 
                        show: true, 
                        fill: true, 
                        fillColor: "rgba(46, 204, 113, 0.5)" 
                    } 
                }      
        });
    }
	 
});