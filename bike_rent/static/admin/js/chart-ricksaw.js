(function($) {

	"use strict";

	
	try 
	{	

		var Colors = [bgPrimary, bgInfo, bgSuccess, bgWarning, bgDanger];




    /*
    Ricksaw Series
    -------------------------------------------------------*/
     var curr_width = $('.chart-widget-container.graph5').width();

    $(".chart-widget-container.graph5 .chart-widget .chart-widget-content svg, .chart-widget-container.graph5 .chart-widget .chart-widget-content div").remove();
    
    ricksawSeries(curr_width);

    $( window ).resize(function() {
      var curr_width = $(".chart-widget-container.graph5").width();

      $(".chart-widget-container.graph5 .chart-widget .chart-widget-content svg, .chart-widget-container.graph5 .chart-widget .chart-widget-content div, .chart-widget-container .chart-widget #y_axis").remove();

      ricksawSeries(curr_width);
    });

    function ricksawSeries(width) {
      var tv = 250;

      // instantiate our graph!
      var graph = new Rickshaw.Graph( {
        element: document.getElementById("ricksaw_series"),
        width: 900,
        height: 500,
        renderer: 'line',
        series: new Rickshaw.Series.FixedDuration([{ name: 'one' }], undefined, {
          timeInterval: tv,
          maxDataPoints: 100,
          timeBase: new Date().getTime() / 1000
        }) 
      } );

      graph.render();

      // add some data every so often

      var i = 0;
      var iv = setInterval( function() {

        var data = { one: Math.floor(Math.random() * 40) + 120 };

        var randInt = Math.floor(Math.random()*100);
        data.two = (Math.sin(i++ / 40) + 4) * (randInt + 400);
        data.three = randInt + 300;

        graph.series.addData(data);
        graph.render();

      }, tv );
    }







    /*
    Ricksaw Y Axis
    -------------------------------------------------------*/
    var curr_width = $('.chart-widget-container.graph4').width();

    $(".chart-widget-container.graph4 .chart-widget .chart-widget-content svg, .chart-widget-container.graph4 .chart-widget .chart-widget-content div").remove();
    
    ricksawYaxisGraph(curr_width-50);

    $( window ).resize(function() {
      var curr_width = $(".chart-widget-container.graph4").width();

      $(".chart-widget-container.graph4 .chart-widget .chart-widget-content svg, .chart-widget-container.graph4 .chart-widget .chart-widget-content div, .chart-widget-container .chart-widget #y_axis").remove();

      ricksawYaxisGraph(curr_width-50);
    });

    function ricksawYaxisGraph(width) {

      $('.chart-widget-container .chart-widget #y_axis').remove()
      $('.chart-widget-container .chart-widget.yaxis-graph').prepend("<div id='y_axis'></div>");
      var graph = new Rickshaw.Graph( {
        element: document.getElementById("ricksaw_yaxis"),
        renderer: 'line',
        height: 300,
        width: width,
        series: [
          {
            data: [ { x: 0, y: 120 }, { x: 1, y: 890 }, { x: 2, y: 38 }, { x: 3, y: 70 }, { x: 4, y: 32 } ],
            color: "#c05020"
          }, {
            data: [ { x: 0, y: 80 }, { x: 1, y: 200 }, { x: 2, y: 100 }, { x: 3, y: 520 }, { x: 4, y: 133 } ],
            color: "#30c020"
          }, {
            data: [ { x: 0, y: 200 }, { x: 1, y: 390 }, { x: 2, y: 1000 }, { x: 3, y: 200 }, { x: 4, y: 230 } ],
            color: "#6060c0"
          }
        ]
      } );

      var y_ticks = new Rickshaw.Graph.Axis.Y( {
        graph: graph,
        orientation: 'left',
        tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        element: document.getElementById('y_axis')
      } );

      graph.render();
    }









    /*
    Ricksaw Scatterplot
    -------------------------------------------------------*/
    var curr_width = $('.chart-widget-container.graph3').width();

    $(".chart-widget-container.graph3 .chart-widget .chart-widget-content svg, .chart-widget-container.graph3 .chart-widget .chart-widget-content div").remove();
    
    ricksawScatterPlot(curr_width);

    $( window ).resize(function() {
      var curr_width = $(".chart-widget-container.graph3").width();

      $(".chart-widget-container.graph3 .chart-widget .chart-widget-content svg, .chart-widget-container.graph3 .chart-widget .chart-widget-content div, .chart-widget-container .chart-widget #y_axis").remove();

      ricksawScatterPlot(curr_width);
    });

    function ricksawScatterPlot(width) {
      // set up our data series with 50 random data points

      var seriesData = [ [], [], [] ];
      var random = new Rickshaw.Fixtures.RandomData(150);

      for (var i = 0; i < 500; i++) {
        random.addData(seriesData);
      }

      // instantiate our graph!

      var graph = new Rickshaw.Graph( {
        element: document.getElementById("ricksaw_scatterplot"),
        width: width,
        height: 500,
        renderer: 'scatterplot',
        series: [
          {
            color: Colors[3],
            data: seriesData[0],
          }, {
            color: Colors[5],
            data: seriesData[1],
          }
        ]
      } );

      graph.renderer.dotSize = 6;

      new Rickshaw.Graph.HoverDetail({ graph: graph });

      graph.render();
    }









    /*
    Ricksaw Lines
    -------------------------------------------------------*/
    var curr_width = $('.chart-widget-container.graph2').width();

    $(".chart-widget-container.graph2 .chart-widget .chart-widget-content svg, .chart-widget-container.graph2 .chart-widget .chart-widget-content div").remove();
    
    ricksawLineGraph(curr_width);

    $( window ).resize(function() {
      var curr_width = $(".chart-widget-container.graph2").width();

      $(".chart-widget-container.graph2 .chart-widget .chart-widget-content svg, .chart-widget-container.graph2 .chart-widget .chart-widget-content div, .chart-widget-container .chart-widget #y_axis").remove();

      ricksawLineGraph(curr_width);
    });


    function ricksawLineGraph(width) {
      // set up our data series with 50 random data points

      var seriesData = [ [], [], [] ];
      var random = new Rickshaw.Fixtures.RandomData(150);

      for (var i = 0; i < 150; i++) {
        random.addData(seriesData);
      }

      // instantiate our graph!

      var graph = new Rickshaw.Graph( {
        element: document.getElementById("ricksaw_lines"),
        width: width,
        height: 300,
        renderer: 'line',
        series: [
          {
            color: Colors[2],
            data: seriesData[0],
            name: 'New York'
          }, {
            color: Colors[3],
            data: seriesData[1],
            name: 'London'
          }, {
            color: Colors[2],
            data: seriesData[2],
            name: 'Tokyo'
          }
        ]
      } );

      graph.render();

      var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph
      } );

      var legend = new Rickshaw.Graph.Legend( {
        graph: graph,
        element: document.getElementById('legend')

      } );

      var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
        graph: graph,
        legend: legend
      } );

      var axes = new Rickshaw.Graph.Axis.Time( {
        graph: graph
      } );
      axes.render();
    }








    /*
    Ricksaw Graph
    -------------------------------------------------------*/
    var curr_width = $('.chart-widget-container.graph1').width();

    $(".chart-widget-container.graph1 .chart-widget .chart-widget-content svg, .chart-widget-container.graph1 .chart-widget .chart-widget-content div").remove();
    
    ricksawGraph(curr_width);
    
    $( window ).resize(function() {
      var curr_width = $(".chart-widget-container.graph1").width();

      $(".chart-widget-container.graph1 .chart-widget .chart-widget-content svg, .chart-widget-container.graph1 .chart-widget .chart-widget-content div, .chart-widget-container .chart-widget #y_axis").remove();

      ricksawGraph(curr_width);
    });

    function ricksawGraph(width) {

      var graph = new Rickshaw.Graph( {
        element: document.querySelector("#ricksaw_graph"), 
        width: width, 
        height: 300, 
        series: [{
            color: Colors[1],
            data: [ 
                { x: 0, y: 40 }, 
                { x: 1, y: 49 }, 
                { x: 2, y: 38 }, 
                { x: 3, y: 30 }, 
                { x: 4, y: 32 } ]
        }]
      });
     
      graph.render();
    }



	} 
	catch(error) 
	{
		alert("Error occured: "+ error.message);
	}
	   
	
})(jQuery);