/*

*Project Name: Thema Admin Bootstrap Template;
*Author: Lancecoder;
*Website: lancecoder.com;
*Filename: dashboard1.js

Scipts
 - Flot graph
 - Sparkline graph
 - Chart graph
 - Rickshaw graph
 - Date range
 - Victor World Map
 - Skycons
 - Chat Room Conversation
 - Todo list
 - JQPlot
*/

var bgGrayDashboard = "rgb(66, 247, 151)";
var bgPrimaryDashboard = "rgba(51, 122, 183, .8)";
var bgInfoDashboard = "rgba(91, 192, 222, .8)";
var bgSuccessDashboard = "rgba(92, 184, 92, .8)";
var bgWarningDashboard = "rgba(240, 173, 78, .8)";
var bgDangerDashboard = "rgba(217, 83, 79, .8)";

var Colors = [bgEmerald, bgEmerald1, bgEmerald2, bgEmerald3, bgEmerald4, bgPrimary, bgInfo, bgSuccess, bgWarning, bgDanger];

var DashboardGreen = function () {

    "use strict";
    
    return {

        //Flot Graph
        initFlotGraph: function() {

            if($("body#default-scheme #transaction-summary").length) {

                var area_data = [
                    {
                        label: "date",
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
                                colors: [ { opacity: 1 }, { opacity: 1 }
                                ]
                            }
                        }
                    },
                    xaxis: {
                        tickDecimals: 0
                    },
                    colors: [Colors[1]],
                    grid: {
                        tickColor: "#eee",
                        borderWidth: 1,
                        borderColor: '#eee',
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

                 $.plot($("#transaction-summary"), area_data, chartAreaUserOptions);

                

            }    //end if


            if($("#graph-earnings").length) {

                // var chartBar2_data =  [ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9] ];

                // var chartBar2UserOptions = {
                //     series: {
                //         bars: {
                //             show: true,
                //             barWidth: 0.8,
                //             fill: true,
                //             fillColor: {
                //                 colors: [ { opacity: 0.6 }, { opacity: 0.6 } ]
                //             },
                //             lineWidth: 1
                //         }
                //     },
                //     xaxis: {
                //         axisLabel: "Year",
                //         axisLabelUseCanvas: true,
                //         axisLabelFontSizePixels: 12,
                //         axisLabelFontFamily: 'Verdana, Arial',
                //         axisLabelPadding: 10,        
                //         mode: "categories",
                //         tickSize: [20, "year"],
                //         timeformat: "%Y",
                //         tickLength: 0
                //     },
                //     yaxis: {
                //         axisLabel: "Population (multiply by 10,000)",
                //         axisLabelUseCanvas: true,
                //         axisLabelFontSizePixels: 12,
                //         axisLabelFontFamily: 'Verdana, Arial',
                //         axisLabelPadding: 3
                //     },
                //     colors: [Colors[0]],
                //     grid: {
                //         color: [Colors[0]],
                //         hoverable: true,
                //         clickable: true,
                //         tickColor: "#eee",
                //         borderWidth: 0,
                //         borderColor: 'eee',
                //     },
                //     legend: {
                //         show: false
                //     },
                //     tooltip: true,
                //     tooltipOpts: {
                //         content: "x: %x, y: %y"
                //     }
                // };

                // $.plot($("#graph-earnings"), chartBar2_data, chartBar2UserOptions);

                var data = [
                    {
                        data: [["Germany", 600000]], color: bgWarning
                    }, 
                    {
                        data: [["Britain", 470121]], color: bgDanger
                    },
                    {
                        data: [["Japan", 890000]], color: bgInfo
                    },
                    {
                        data: [["France", 780000]], color: bgPrimary
                    },
                    {
                        data: [["United States", 1000000]], color: bgSuccess
                    },
                    {
                        data: [["Spain", 540000]], color: bgSunFlower
                    }
                ];


                $.plot("#graph-earnings", data, {
                    series: {
                        bars: {
                            show: true,
                            barWidth: 0.6,
                            align: "center",
                            fillColor: {
                                colors: [ { opacity: 0.6 }, { opacity: 0.6 } ]
                            },
                            lineWidth: 1
                        }
                    },
                    colors: [Colors[0]],
                    yaxis: {
                        axisLabel: "Countries Earning",
                        axisLabelUseCanvas: true,
                        axisLabelFontSizePixels: 12,
                        axisLabelFontFamily: 'Verdana, Arial',
                        axisLabelPadding: 3,
                        tickFormatter: function (v, axis) {
                            return formatThousands(v, ",");
                        }
                    },
                    xaxis: {
                        mode: "categories",
                        tickLength: 0
                    },
                    grid: {
                        color: [Colors[0]],
                        hoverable: true,
                        clickable: true,
                        tickColor: "#eee",
                        borderWidth: 0,
                        borderColor: 'eee',
                    },
                    tooltip: true
                });







            } //end if

        },

        //Sparkline Graph
        initSparklineGraph: function() {

            var colors = ["rgba(173, 171, 171, .8)", "rgba(173, 171, 171, .6)", "rgba(173, 171, 171, .4)", "rgba(173, 171, 171, .2)"]


             $("#default-scheme .sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
                type: 'bar',
                height: '125',
                barWidth: 13,
                colorMap: {
                    '7': "rgba(86, 201, 239, .8)"
                },
                barSpacing: 2,
                barColor: "rgba(86, 201, 239, .5)"
            });

            $(".widget-total-sessions").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
                type: 'bar',
                height: '40',
                barWidth: 8,
                colorMap: {
                    '7': "rgba(173, 171, 171, .8)"
                },
                barSpacing: 2,
                barColor: "rgba(252, 224, 83, .6)"
            });

            $(".widget-total-revenue").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
                type: 'line',
                height: '40',
                width: '200',
                lineColor: "rgba(239, 96, 83, .6)",
                fillColor: '#ffffff',
                lineWidth: 3,
                spotColor: '#34495E',
                minSpotColor: '#34495E'
            });


            $(".widget-speed-sessions").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
                type: 'line',
                height: '40',
                width: '200',
                lineColor: 'rgb(40, 175, 148)',
                fillColor: 'rgba(40, 175, 148, .6)',
                highlightLineColor: '#f77f2e',
                drawNormalOnTop: true
            });

            

        },

        //Chart Graph
        initChartGraph: function() {

            var colors = ["rgba(173, 171, 171, .8)", "rgba(173, 171, 171, .6)", "rgba(173, 171, 171, .4)", "rgba(173, 171, 171, .2)"]

            if($('#default-scheme #canvas1i').length && $('#default-scheme #canvas1i2').length && $('#default-scheme #canvas1i3').length) {

                var doughnutData = [
                    {
                        value: 30,
                        color: "rgba(247, 205, 39, .6)"
                    },
                    {
                        value: 30,
                        color: "rgba(237, 91, 78, .6)"
                    },
                    {
                        value: 60,
                        color: "rgba(242, 140, 50, .6)"
                    },
                    {
                        value: 100,
                        color: "rgba(39, 181, 152, .6)"
                    },
                    {
                        value: 120,
                        color: "rgba(70, 164, 226, .6)"
                    }
                ];

                var myDoughnut = new Chart(document.getElementById("canvas1i").getContext("2d")).Doughnut(doughnutData);
                var myDoughnut = new Chart(document.getElementById("canvas1i2").getContext("2d")).Doughnut(doughnutData);
                var myDoughnut = new Chart(document.getElementById("canvas1i3").getContext("2d")).Doughnut(doughnutData);

            }//end if

        },

        //Rick Shaw Graph
        initRickShawGraph: function() {

            var colors = ["rgba(173, 171, 171, .8)", "rgba(173, 171, 171, .6)", "rgba(173, 171, 171, .4)", "rgba(173, 171, 171, .2)"];

            
            if($("#default-scheme #server_load_chart").length) {
                var seriesData=[[],[]];
                var random=new Rickshaw.Fixtures.RandomData(50);
                for(var i=0;i<50;i++){
                    random.addData(seriesData);
                }
                var graph=new Rickshaw.Graph({
                    element:document.querySelector("#default-scheme #server_load_chart"),
                    height:200,
                    renderer:'area',
                    series:[
                    {
                        data:seriesData[0],
                        color: "rgba(242, 100, 87, .6)",
                        name:'DB Server'
                    },
                    {
                        data:seriesData[1],
                        color:'#eceff1',
                        name:'Web Server'
                    }]
                });
                var hoverDetail=new Rickshaw.Graph.HoverDetail({graph:graph});
                setInterval(function(){
                    random.removeData(seriesData);
                    random.addData(seriesData);graph.update();
                },1000);
            }
                

        },

        //Date Range
        initDateRange: function() {
            var cb = function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
                $('#default-scheme #reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                //alert("Callback has fired: [" + start.format('MMMM D, YYYY') + " to " + end.format('MMMM D, YYYY') + ", label = " + label + "]");
            }

            var optionSet1 = {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2012',
                maxDate: '12/31/2015',
                dateLimit: {
                    days: 60
                },
                showDropdowns: true,
                showWeekNumbers: true,
                timePicker: false,
                timePickerIncrement: 1,
                timePicker12Hour: true,
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: 'left',
                buttonClasses: ['btn btn-default'],
                applyClass: 'btn-small btn-primary',
                cancelClass: 'btn-small',
                format: 'MM/DD/YYYY',
                separator: ' to ',
                locale: {
                    applyLabel: 'Submit',
                    cancelLabel: 'Clear',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1
                }
            };
            $('#default-scheme #reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
            $('#default-scheme #reportrange').daterangepicker(optionSet1, cb);
            $('#default-scheme #reportrange').on('show.daterangepicker', function () {
                console.log("show event fired");
            });
            $('#default-scheme #reportrange').on('hide.daterangepicker', function () {
                console.log("hide event fired");
            });
            $('#default-scheme #reportrange').on('apply.daterangepicker', function (ev, picker) {
                console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
            });
            $('#default-scheme #reportrange').on('cancel.daterangepicker', function (ev, picker) {
                console.log("cancel event fired");
            });
            $('#default-scheme #options1').on('click', function() {
                $('#default-scheme #reportrange').data('daterangepicker').setOptions(optionSet1, cb);
            });
            $('#default-scheme #options2').on('click', function() {
                $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
            });
            $('#default-scheme #destroy').on('click', function() {
                $('#default-scheme #reportrange').data('daterangepicker').remove();
            });
        },

        //World Map
        initWorldMap: function() {

            if($('#default-scheme #world-map-gdp-2').length) {

                $('#default-scheme #world-map-gdp-2').vectorMap({
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
                        el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
                    }
                });
                
            }

            
        },

        

        initEasyPieChart: function() {

            var colors = ["rgba(173, 171, 171, .8)", "rgba(173, 171, 171, .6)", "rgba(173, 171, 171, .4)", "rgba(173, 171, 171, .2)"]

            $('.pie-chart-bandwidth').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: '10',
                barColor: "rgba(231, 76, 60, .8)",
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

            $('.pie-chart-memory').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: '10',
                barColor: "rgba(241, 196, 15, .8)",
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

            $('.pie-chart-sales').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: '10',
                barColor: "rgb(58, 196, 234)",
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        },

        initMorrisChart: function() {

            
        },

        initTodoList: function(){
            $("#default-scheme #sortable-todo").sortable();

            
            /*
            $('.btn-select-all').on('click', function() {

                
                
                if($(this).hasClass('selected')) {

                    $(this).html("<i class='fa fa-check'></i> Select All");

                    $(this).removeClass('selected');
                    $('.to-do-list li').each(function(){
                        $(this).find('input[type=checkbox]').removeAttr('checked');
                        $(this).children('.todo-title').removeClass('line-through');
                    });
                }else{
                    $('.to-do-list li').each(function(){
                        $(this).find('input[type=checkbox]').attr('checked', true);
                        $(this).children('.todo-title').addClass('line-through');
                    });

                    $(this).addClass('selected');
                    $(this).html("<i class='fa fa-times'></i> Deselect All");
                }
                
            });
            */

            

            $('#default-scheme .todo-check label').on('click', function() {
                $(this).parents('li').children('.todo-title').toggleClass('line-through');
            });

            //close todo list
            $('#default-scheme .todo-remove').on('click', function() {

                $(this).parents('li').remove();

            });


            $('#default-scheme .todo-remove').tooltipster({
                offsetY: 2,
                animation: 'grow'
            });

            $('#default-scheme .todo-edit').tooltipster({
                offsetY: 2,
                animation: 'grow'
            });

            $('#default-scheme .todo-done').tooltipster({
                offsetY: 2,
                animation: 'grow'
            });

        }
    };

}();



function formatThousands(value, separator) {
    var buf = [];
    value = String(value).split('').reverse();
    for (var i = 0; i < value.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            buf.push(separator);
        }   
        buf.push(value[i]);
    }
    return buf.reverse().join('');
} 




