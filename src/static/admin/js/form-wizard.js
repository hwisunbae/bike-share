$(document).ready(function() {

    "use strict";

    var $validator1 = $("#wizardForm1").validate({
        rules: {
            fullname: {
                required: true
            },
		    email: {
                required: true,
                email: true
		    },
		    pass1: {
                required: true
		    },
		    pass2: {
                required: true,
                equalTo: '#pass1'
		    },
		    productName: {
                required: true
		    },
		    productId: {
                required: true
		    },
		    quantity: {
                required: true
            },
		    exampleInputCard: {
                required: true,
                number: true
		    },
		    exampleInputSecurity: {
                required: true,
                number: true
		    },
		    exampleInputHolder: {
                required: true
            },
		    exampleInputExpiration: {
                required: true,
                date: true
            },
		    exampleInputCsv: {
                required: true,
                number: true
            }
        }
    });

    var $validator2 = $("#wizardForm2").validate({
        rules: {
            fullname2: {
                required: true
            },
            email2: {
                required: true,
                email: true
            },
            pass12: {
                required: true
            },
            pass22: {
                required: true,
                equalTo: '#pass12'
            },
            productName2: {
                required: true
            },
            productId2: {
                required: true
            },
            quantity2: {
                required: true
            },
            exampleInputCard2: {
                required: true,
                number: true
            },
            exampleInputSecurity2: {
                required: true,
                number: true
            },
            exampleInputHolder2: {
                required: true
            },
            exampleInputExpiration2: {
                required: true,
                date: true
            },
            exampleInputCsv2: {
                required: true,
                number: true
            }
        }
    });
 
    $('#wizard1').bootstrapWizard({
        'tabClass': 'nav nav-tabs',
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            $('#wizard1').find('.progress-bar').css({width:$percent+'%'});
        },
        'onNext': function(tab, navigation, index) {
            var $valid = $("#wizardForm1").valid();
            if(!$valid) {
                $validator1.focusInvalid();
                return false;
            }
        },
        'onTabClick': function(tab, navigation, index) {
            var $valid = $("#wizardForm1").valid();
            if(!$valid) {
                $validator1.focusInvalid();
                return false;
            }
        },
    });

    $('#wizard2').bootstrapWizard({
        'tabClass': 'nav nav-tabs',
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index+1;
            var $percent = ($current/$total) * 100;
            $('#wizard2').find('.progress-bar').css({width:$percent+'%'});
        },
        'onNext': function(tab, navigation, index) {
            var $valid = $("#wizardForm2").valid();
            if(!$valid) {
                $validator2.focusInvalid();
                return false;
            }
        },
        'onTabClick': function(tab, navigation, index) {
            var $valid = $("#wizardForm2").valid();
            if(!$valid) {
                $validator2.focusInvalid();
                return false;
            }
        },
    });
    
    $('.date-picker').datepicker({
        orientation: "top auto",
        autoclose: true
    });
});