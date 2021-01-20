(function($) {

	"use strict";

	
	try 
	{	

		var Colors = [bgPrimary, bgInfo, bgSuccess, bgWarning, bgDanger];






		/*
		C3 Chart Scatter
        -------------------------------------------------------*/
        var c3chart_scatter = c3.generate({
        	bindto: "#c3chart_scatter",
        	color: {
	          pattern: Colors,
	        },
	        data: {
	          xs: {
	            setosa: 'setosa_x',
	            versicolor: 'versicolor_x',
	            virginica: 'virginica_x'
	          },
	          columns: [
	            ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
	            ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
	            ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
	            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
	            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
	            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
	          ],
	          type : 'scatter',
	        },
	        axis: {
	          x: {
	            label: 'Sepal.Width',
	            tick: {
	              fit: false
	            }
	          },
	          y: {
	            label: 'Petal.Width'
	          }
	        }
	     });







		/*
		C3 Chart Area
        -------------------------------------------------------*/
        var c3chart_area = c3.generate({
        	bindto: '#c3chart_area',
        	color: {
	          pattern: Colors,
	        },
        	data: {
          		columns: [
            		['data1', 300, 350, 300, 0, 0, 0],
            		['data2', 130, 100, 140, 200, 150, 50]
          		],
          	type: 'area'
        	}
      	});





		/*
		C3 Chart Spline
        -------------------------------------------------------*/
        var c3chart_spline = c3.generate({
        	bindto: "#c3chart_spline",
        	color: {
	          pattern: Colors,
	        },
	        data: {
	          columns: [
	            ['data1', 30, 200, 100, 400, 150, 250],
	            ['data2', 130, 100, 140, 200, 150, 50]
	          ],
	          types: {
	            data1: 'spline',
	            data2: 'spline'
	          }
	        }
	    });





		/*
		C3 Chart Step
        -------------------------------------------------------*/
        var c3chart_step = c3.generate({
        	bindto: "#c3chart_step",
        	color: {
	          pattern: Colors,
	        },
        	data: {
          		columns: [
            		['data1', 300, 350, 300, 0, 0, 0],
//            		['data2', 130, 100, 140, 200, 150, 50]
          		],
          		types: {
            		data1: 'step',
            		data2: 'area-step'
          		},
          		onclick: function (d) { console.log('clicked', d); }
        	},
        	subchart: {
          		show: true
        	},
      	});

	     setTimeout(function () {
	        c3chart_step.load({
	          columns: [
	            ['data2', 130, 100, 140, 200, 150, 50]
	          ]
	        });
	     }, 1000);





		/*
		C3 Chart Dount
        -------------------------------------------------------*/
        var c3chart_donut = c3.generate({
        	bindto: "#c3chart_donut",
        	color: {
	          pattern: Colors,
	        },
        	data: {
	          	columns: [
	//            	["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
	            	["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
	            	["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
	            	["setosa", 30],
	//            	["versicolor", 40],
	//            	["virginica", 50],
	          	],
	          	type : 'donut',
	          	onmouseover: function (d, i) { console.log("onmouseover", d, i, this); },
	          	onmouseout: function (d, i) { console.log("onmouseout", d, i, this); },
	          	onclick: function (d, i) { console.log("onclick", d, i, this); },
	          	order: null // set null to disable sort of data. desc is the default.
        	},
	        axis: {
	          x: {
	            label: 'Sepal.Width'
	          },
	          y: {
	            label: 'Petal.Width'
	          }
	        },
	        donut: {
	          label: {
	//            format: function (d, ratio) { return ""; }
	          },
	          title: "Iris Petal Width",
	          width: 70
	        }
      	});

	     setTimeout(function () {
	        c3chart_donut.load({
	          columns: [
	            ['data1', 30, 20, 50, 40, 60, 50],
	          ]
	        });
	     }, 1000);

	     setTimeout(function () {
	        c3chart_donut.unload({
	          ids: 'virginica'
	        });
	    }, 2000);








		/*
		C3 Chart Pie
        -------------------------------------------------------*/
        var c3chart_gauge = c3.generate({
        bindto: "#c3chart_gauge",
        color: {
          pattern: Colors,
        },
        data: {
          columns: [
            [ 'data', 91.4 ]
          ],
          type: 'gauge',
          onmouseover: function (d, i) { console.log("onmouseover", d, i, this); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i, this); },
          onclick: function (d, i) { console.log("onclick", d, i, this); },
        },
        gauge: {
          label: {
//            format: function(value, ratio) {
//              return value;
//            },
//          show: false // to turn off the min/max labels.
          },
//          min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//          max: 100, // 100 is default
//          units: ' %',
//          width: 39 // for adjusting arc thickness
        },
        color: {
          pattern: ['#FF0000', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [30, 60, 90] // alternate first value is 'value'
          }
        }
      });

      var chart1 = c3.generate({
          bindto: '#chart1',
          data: {
              columns: [
                  ['data', 75.0]
              ],
              type: 'gauge',
          },
          gauge: {
              min: 50,
              max: 100
          }
      });

      var chart2 = c3.generate({
          bindto: '#chart2',
          data: {
              columns: [
                  ['data', 0.0]
              ],
              type: 'gauge',
          },
          gauge: {
              min: -100,
              max: 100
          }
      });

      var chart3 = c3.generate({
          bindto: '#chart3',
          data: {
              columns: [
                  ['data', -75.0]
              ],
              type: 'gauge',
          },
          gauge: {
              min: -100,
              max: -50
          }
      });

      var cycleDemo = function () {

        setTimeout(function () {
          d3.select('#chart .c3-chart-arcs-background')
            .transition()
            .style('fill', '#333');
        }, 1000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 10 ]]
            });
        }, 2000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 50 ]]
            });
        }, 3000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 91.4 ]]
            });
        }, 4000);

        setTimeout(function () {
          d3.select('#chart .c3-chart-arcs-background')
            .transition()
            .style('fill', '#e0e0e0');
        }, 5000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 0 ]]
            });
        }, 6000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 50 ]]
            });
        }, 7000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 91.4 ]]
            });
        }, 8000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 0 ]]
            });
        }, 9000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 50 ]]
            });
        }, 10000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 91.4 ]]
            });
        }, 11000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 0 ]]
            });
        }, 12000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 50 ]]
            });
        }, 13000);

        setTimeout(function () {
            c3chart_gauge.load({
              columns: [[ 'data', 91.4 ]]
            });
        }, 14000);

      }

      cycleDemo();

//      setInterval(cycleDemo, 30000);







		/*
		C3 Chart Pie
        -------------------------------------------------------*/
        var c3chart_pie = c3.generate({
        	bindto: "#c3chart_pie",
        	color: {
              pattern: Colors,
            },
            padding: {
            left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           	},
        	data: {
          	columns: [
//            	["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            	["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            	["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            	["setosa", 30],
//            	["versicolor", 40],
//            	["virginica", 50],
          	],
          	type : 'pie',
          		onmouseover: function (d, i) { console.log("onmouseover", d, i, this); },
         	 	onmouseout: function (d, i) { console.log("onmouseout", d, i, this); },
          		onclick: function (d, i) { console.log("onclick", d, i, this); },
        	},
        	axis: {
          		x: {
            		label: 'Sepal.Width'
          		},
          		y: {
            		label: 'Petal.Width'
          		}
        	}
      });

      setTimeout(function () {
        c3chart_pie.load({
          columns: [
            ["setosa", 130],
          ]
        });
      }, 1000);

      setTimeout(function () {
        c3chart_pie.unload({
          ids: 'virginica'
        });
      }, 2000);







		/*
		C3 Chart Bar
        -------------------------------------------------------*/
        var c3chart_bar = c3.generate({
        	bindto: '#c3chart_bar',
        	color: {
              pattern: Colors,
            },
            padding: {
            left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
	        data: {
	          columns: [
	            ['data1', 1030, 1200, 1100, 1400, 1150, 1250],
	            ['data2', 2130, 2100, 2140, 2200, 2150, 1850]
	          ],
	          type: 'bar',
	          onclick: function (d, element) { console.log("onclick", d, element); },
	          onmouseover: function (d) { console.log("onmouseover", d); },
	          onmouseout: function (d) { console.log("onmouseout", d); }
	        },
	        axis: {
	          x: {
	            type: 'categorized'
	          }
	        },
	        bar: {
	          width: {
	            ratio: 0.3,
			//  max: 30
	          },
	        }
	     });

        setTimeout(function () {
            c3chart_bar.load({
                columns: [
                    ['data3', 130, 150, 200, 300, 200, 100]
                ]
            });
        }, 1000);



	} 
	catch(error) 
	{
		alert("Error occured: "+ error.message);
	}
	   
	
})(jQuery);