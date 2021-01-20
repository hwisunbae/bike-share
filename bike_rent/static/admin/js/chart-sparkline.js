(function($) {

	"use strict";

	
	try 
	{	

		var Colors = [bgPrimary, bgInfo, bgSuccess, bgWarning, bgDanger];



    /*
    Sparkline Box plots
    -------------------------------------------------------*/
    $('.sparkboxplot').sparkline('html', { type: 'box'});
    $('.sparkboxplotraw').sparkline([ 1, 3, 5, 8, 10, 15, 18 ], 
        {type:'box', raw: true, showOutliers:true, target: 6});






    /*
    Sparkline Tri-state charts using inline values
    -------------------------------------------------------*/
    $('.sparktristate').sparkline('html', {type: 'tristate'});
    $('.sparktristatecols').sparkline('html', {type: 'tristate', colorMap: {'-2': '#fa7', '2': '#44f'} });






    /*
    Sparkline Customized line chart
    -------------------------------------------------------*/
    $('#linecustom').sparkline('html', {height: '1.5em', width: '8em', lineColor: '#f00', fillColor: '#ffa', minSpotColor: false, maxSpotColor: false, spotColor: '#77f', spotRadius: 3});






    /*
    Sparkline Discrete charts
    -------------------------------------------------------*/
    $('.discrete1').sparkline('html', 
        { type: 'discrete', lineColor: 'blue', xwidth: 18 });
    $('#discrete2').sparkline('html', 
        { type: 'discrete', lineColor: 'blue', thresholdColor: 'red', thresholdValue: 4 });






    /*
    Sparkline Bar + line composite charts
    -------------------------------------------------------*/
    $('#compositebar').sparkline('html', { type: 'bar', barColor: '#aaf' });
    $('#compositebar').sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7], 
        { composite: true, fillColor: false, lineColor: 'red' });






    /*
    Sparkline Normal Line
    -------------------------------------------------------*/
    $('#normalline').sparkline('html', { fillColor: false, normalRangeMin: -1, normalRangeMax: 8 });






    /*
    Sparkline Composite Line
    -------------------------------------------------------*/
    $('#compositeline').sparkline('html', { fillColor: false, changeRangeMin: 0, chartRangeMax: 10 });
    $('#compositeline').sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7], 
        { composite: true, fillColor: false, lineColor: 'red', changeRangeMin: 0, chartRangeMax: 10 });





    /*
    Sparkline Bar
    -------------------------------------------------------*/
    $('.sparkbar').sparkline('html', {type: 'bar'});





    /*
    Sparkline Inline
    -------------------------------------------------------*/
    $('.sparkline').sparkline();





		/*
		Sparkline Mouse Speed
    -------------------------------------------------------*/
    drawMouseSpeedDemo();
    function drawMouseSpeedDemo() {
      var mrefreshinterval = 500; // update display every 500ms
      var lastmousex=-1; 
      var lastmousey=-1;
      var lastmousetime;
      var mousetravel = 0;
      var mpoints = [];
      var mpoints_max = 30;
      $('html').mousemove(function(e) {
          var mousex = e.pageX;
          var mousey = e.pageY;
          if (lastmousex > -1) {
              mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
          }
          lastmousex = mousex;
          lastmousey = mousey;
      });
      var mdraw = function() {
          var md = new Date();
          var timenow = md.getTime();
          if (lastmousetime && lastmousetime!=timenow) {
              var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
              mpoints.push(pps);
              if (mpoints.length > mpoints_max)
                  mpoints.splice(0,1);
              mousetravel = 0;
              $('#mousespeed').sparkline(mpoints, { width: mpoints.length*2, tooltipSuffix: ' pixels per second' });
          }
          lastmousetime = timenow;
          setTimeout(mdraw, mrefreshinterval);
      }
      // We could use setInterval instead, but I prefer to do it this way
      setTimeout(mdraw, mrefreshinterval); 
    };


	} 
	catch(error) 
	{
		alert("Error occured: "+ error.message);
	}
	   
	
})(jQuery);