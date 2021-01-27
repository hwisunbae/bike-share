(function($) {

	"use strict";

	
	try 
	{	

		var Colors = [bgEmerald, bgEmerald1, bgEmerald2, bgEmerald3, bgEmerald4, bgPrimary, bgInfo, bgSuccess, bgWarning, bgDanger];

        var border_color = "#eee";

        if($('body').hasClass('theme-dark-1')) {
            border_color = "#ab9ba9"
        }

		var Grid = {
            grid: {
                show: true,
                aboveData: true,
                color: "#bbbbbb",
                labelMargin: 15,
                axisMargin: 0,
                borderWidth: 0,
                borderColor: null,
                minBorderMargin: 5,
                clickable: true,
                hoverable: true,
                autoHighlight: true,
                mouseActiveRadius: 20,
            },
            tooltip: true,
            //activate tooltip
            tooltipOpts: {
                content: "%x : %y.0",
                shifts: {
                    x: -30,
                    y: -50
                },
                defaultTheme: false
            }
        }


        /*
		Flot Chart Matrix
        -------------------------------------------------------*/
        var matrixChart_data1 = [];
        for (var i = 0; i < 14; i += 0.6) {
            matrixChart_data1.push([i, Math.cos(i)]);
        }
        var matrixChart_data2 = [];
        for (var i = 0; i < 14; i += 0.6) {
            matrixChart_data2.push([i, Math.sin(i)]);
        }
        $.plot("#flotchart-matrix", [{
            data: matrixChart_data1,
            points: {
                show: true,
                radius: 4
            },
            lines: {
                show: true
            },
            color: Colors[0]
        }, {
            data: matrixChart_data2,
            points: {
                show: true,
                radius: 4
            },
            lines: {
                show: true
            },
            color: Colors[5],
        }], Grid);






        /*
		Flot Chart Line
        -------------------------------------------------------*/
        var lineChart_data = [];
        for (var i = 0; i < 14; i += 0.5) {
            lineChart_data.push([i, Math.sqrt(i)]);
        }
        $.plot("#flotchart-line", [{
            data: lineChart_data,
            lines: {
                show: true
            },
            points: {
                show: true
            },
            color: Colors[0]
        }], Grid);







        /*
		Flot Chart Spline
        -------------------------------------------------------*/
         var splineChart_data = [];
        for (var i = 0; i < 14; i += 0.5) {
            splineChart_data.push([i, Math.sin(i)]);
        }
        $.plot("#flotchart-spline", [{
            data: splineChart_data,
            lines: {
                show: true,
                fill: true
            },
            color: Colors[1]
        }], Grid);






        /*
		Flot Chart Step
        -------------------------------------------------------*/
        var stepChart_data = [];
        for (var i = 0; i < 14; i += 0.5 + Math.random()) {
            stepChart_data.push([i, Math.sqrt(2 * i + Math.sin(i) + 5)]);
        }

        $.plot("#flotchart-step", [{
            data: stepChart_data,
            lines: {
                show: true,
                steps: true
            },
            color: Colors[0]
        }], Grid);









		/*
		Flot Chart Bar 2
        -------------------------------------------------------*/
        var chartBar2_data = [
            {
                label: "bar",
                data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 32], [6, 22] ]
            }
        ];

        var chartBar2UserOptions = {
            series: {
                bars: {
                    show: true,
                    barWidth: 0.8,
                    fill: true,
                    fillColor: {
                        colors: [ { opacity: 0.6 }, { opacity: 0.6 } ]
                    },
                    lineWidth: 1
                }
            },
            xaxis: {
                tickDecimals: 0
            },
            colors: [Colors[0]],
            grid: {
                color: [Colors[0]],
                hoverable: true,
                clickable: true,
                tickColor: border_color,
                borderWidth: 0,
                borderColor: border_color,
            },
            legend: {
                show: false
            },
            tooltip: true,
            tooltipOpts: {
                content: "x: %x, y: %y"
            }
        };

        $.plot($("#flotchart-bar2"), chartBar2_data, chartBar2UserOptions);







		/*
		Flot Chart Area
        -------------------------------------------------------*/
        var area_data = [
            {
                label: "line",
                data: [ [1, 24], [2, 15], [3, 29], [4, 34], [5, 30], [6, 40], [7, 23], [8, 27], [9, 40] ]
            }
        ];


        var chartAreaUserOptions = {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [ { opacity: 0.5 }, { opacity: 0.5 }
                        ]
                    }
                }
            },
            xaxis: {
                tickDecimals: 0
            },
            colors: [Colors[1]],
            grid: {
                tickColor: border_color,
                borderWidth: 1,
                borderColor: border_color,
                color: Colors[2]
            },
            legend: {
                show: false
            },
            tooltip: true,
            tooltipOpts: {
                content: "x: %x, y: %y"
            }
        };

         $.plot($("#flotchart-area"), area_data, chartAreaUserOptions);

         
         





       
        /*
		Flot Chart Pie
        -------------------------------------------------------*/
        var pie_data = [
			{ label: "Data 1", data: 16, color: Colors[2], },
            { label: "Data 2", data: 6, color: Colors[3], },
            { label: "Data 3", data: 22, color: Colors[1], },
            { label: "Data 4", data: 32, color: Colors[0], }
		]


		var chartPieUserOptions = {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                shifts: {
                    x: 20,
                    y: 0
                },
                defaultTheme: false
            }
        };

        $.plot('#flotchart-pie1', pie_data, chartPieUserOptions);







        /*
		Flot Char Bar
        -------------------------------------------------------*/
        
		var data1a = [
            [0, 10],
            [4, 8],
            [8, 4],
            [12, 22],
            [16, 25],
            [20, 14],
            [24, 10],
            [28, 16],
            [32, 10],
            [36, 8],
            [40, 10]
        ];

        var data1b = [
            [1, 7],
            [5, 12],
            [9, 19],
            [13, 9],
            [17, 11],
            [21, 33],
            [25, 4],
            [29, 25],
            [33, 7],
            [37, 12],
            [41, 14]
        ];

        var data1c = [
            [2, 12],
            [6, 19],
            [10, 10],
            [14, 4],
            [18, 18],
            [22, 25],
            [26, 18],
            [30, 11],
            [34, 12],
            [38, 19],
            [42, 18]
        ];

	   	$.plot("#flotchart-bar", [{
            data: data1a,
            bars: {
                show: true,
                fill: 1,
                fillColor: {
                    colors: [{
                        opacity: 0.8
                    }, {
                        opacity: 1
                    }]
                }
            },
            color: Colors[4]
        }, {
            data: data1b,
            bars: {
                show: true,
                fill: 1,
                fillColor: {
                    colors: [{
                        opacity: 0.8
                    }, {
                        opacity: 1
                    }]
                }
            },
            color: Colors[0]
        }, {
            data: data1c,
            bars: {
                show: true,
                fill: 1,
                fillColor: {
                    colors: [{
                        opacity: 0.8
                    }, {
                        opacity: 1
                    }]
                }
            },
            color: Colors[2]
        }], Grid);

	} 
	catch(error) 
	{
		alert("Error occured: "+ error.message);
	}
	   
	
})(jQuery);