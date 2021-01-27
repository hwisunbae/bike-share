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
*/

var DashboardGreen = function () {
    
    return {

        //Flot Graph
        initFlotGraph: function() {

            if($("body#turquoise-scheme #placeholder33x").length) {

                //define chart clolors ( you maybe add more colors if you want or flot will add it automatic )
                var chartColours = [bgTorquoise];

                //generate random number for charts
                randNum = function () {
                    return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
                }

                var d1 = [];
                //var d2 = [];

                //here we generate data for chart
                for (var i = 0; i < 30; i++) {
                    d1.push([new Date(Date.today().add(i).days()).getTime(), randNum() + i + i + 10]);
                    //    d2.push([new Date(Date.today().add(i).days()).getTime(), randNum()]);
                }

                var chartMinDate = d1[0][0]; //first day
                var chartMaxDate = d1[20][0]; //last day

                var tickSize = [1, "day"];
                var tformat = "%d/%m/%y";

                //graph options
                var options = {
                    grid: {
                        show: true,
                        aboveData: true,
                        color: bgTorquoise,
                        labelMargin: 10,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor: null,
                        minBorderMargin: 5,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: true,
                        mouseActiveRadius: 100
                    },
                    series: {
                        lines: {
                            show: true,
                            fill: true,
                            lineWidth: 2,
                            steps: false
                        },
                        points: {
                            show: true,
                            radius: 4.5,
                            symbol: "circle",
                            lineWidth: 3.0
                        }
                    },
                    legend: {
                        position: "ne",
                        margin: [0, -25],
                        noColumns: 0,
                        labelBoxBorderColor: null,
                        labelFormatter: function (label, series) {
                            // just add some space to labes
                            return label + '&nbsp;&nbsp;';
                        },
                        width: 40,
                        height: 1
                    },
                    colors: chartColours,
                    shadowSize: 0,
                    tooltip: true, //activate tooltip
                    tooltipOpts: {
                        content: "%s: %y.0",
                        xDateFormat: "%d/%m",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    },
                    yaxis: {
                        min: 0
                    },
                    xaxis: {
                        mode: "time",
                        minTickSize: tickSize,
                        timeformat: tformat,
                        min: chartMinDate,
                        max: chartMaxDate
                    }
                };
                var plot = $.plot($("#turquoise-scheme #placeholder33x"), [{
                    label: "Email Sent",
                    data: d1,
                    lines: {
                        fillColor: bgClouds
                    }, //#96CA59 rgba(150, 202, 89, 0.42)
                    points: {
                        fillColor: "#fff"
                    }
                }], options);

            }    //end if

        },

        //Sparkline Graph
        initSparklineGraph: function() {
            $("#turquoise-scheme .sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
                type: 'bar',
                height: '125',
                barWidth: 13,
                colorMap: {
                    '7': bgTorquoise1
                },
                barSpacing: 2,
                barColor: bgTorquoise
            });

            $("#turquoise-scheme .sparkline11").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
                type: 'bar',
                height: '40',
                barWidth: 8,
                colorMap: {
                    '7': bgTorquoise2
                },
                barSpacing: 2,
                barColor: bgTorquoise
            });

            $("#turquoise-scheme .sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
                type: 'line',
                height: '40',
                width: '200',
                lineColor: bgTorquoise,
                fillColor: '#ffffff',
                lineWidth: 3,
                spotColor: '#34495E',
                minSpotColor: '#34495E'
            });
        },

        //Chart Graph
        initChartGraph: function() {

            if($('#turquoise-scheme #canvas1i').length && $('#turquoise-scheme #canvas1i2').length && $('#turquoise-scheme #canvas1i3').length) {

                var doughnutData = [
                    {
                        value: 30,
                        color: bgTorquoise1
                    },
                    {
                        value: 30,
                        color: bgTorquoise2
                    },
                    {
                        value: 60,
                        color: bgTorquoise3
                    },
                    {
                        value: 100,
                        color: bgTorquoise4
                    },
                    {
                        value: 120,
                        color: bgTorquoise1
                    }
                ];

                var myDoughnut = new Chart(document.getElementById("canvas1i").getContext("2d")).Doughnut(doughnutData);
                var myDoughnut = new Chart(document.getElementById("canvas1i2").getContext("2d")).Doughnut(doughnutData);
                var myDoughnut = new Chart(document.getElementById("canvas1i3").getContext("2d")).Doughnut(doughnutData);

            }//end if

        

        },

        //Rick Shaw Graph
        initRickShawGraph: function() {

            
            if($("#turquoise-scheme #server_load_chart").length) {
                var seriesData=[[],[]];
                var random=new Rickshaw.Fixtures.RandomData(50);
                for(var i=0;i<50;i++){
                    random.addData(seriesData);
                }
                graph=new Rickshaw.Graph({
                    element:document.querySelector("#turquoise-scheme #server_load_chart"),
                    height:200,
                    renderer:'area',
                    series:[
                    {
                        data:seriesData[0],
                        color: bgTorquoise,
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
                $('#turquoise-scheme #reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
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
            $('#turquoise-scheme #reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
            $('#turquoise-scheme #reportrange').daterangepicker(optionSet1, cb);
            $('#turquoise-scheme #reportrange').on('show.daterangepicker', function () {
                console.log("show event fired");
            });
            $('#turquoise-scheme #reportrange').on('hide.daterangepicker', function () {
                console.log("hide event fired");
            });
            $('#turquoise-scheme #reportrange').on('apply.daterangepicker', function (ev, picker) {
                console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
            });
            $('#turquoise-scheme #reportrange').on('cancel.daterangepicker', function (ev, picker) {
                console.log("cancel event fired");
            });
            $('#turquoise-scheme #options1').click(function () {
                $('#turquoise-scheme #reportrange').data('daterangepicker').setOptions(optionSet1, cb);
            });
            $('#turquoise-scheme #options2').click(function () {
                $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
            });
            $('#turquoise-scheme #destroy').click(function () {
                $('#turquoise-scheme #reportrange').data('daterangepicker').remove();
            });
        },

        //World Map
        initWorldMap: function() {

            if($('#turquoise-scheme #world-map-gdp-1').length && $('#turquoise-scheme #world-map-gdp-2').length) {

                $('#turquoise-scheme #world-map-gdp-1').vectorMap({
                    map: 'world_mill_en',
                    backgroundColor: 'transparent',
                    zoomOnScroll: false,
                    series: {
                        regions: [{
                            values: gdpData,
                            scale: ['#E6F2F0', bgTorquoise],
                            normalizeFunction: 'polynomial'
                        }]
                    },
                    onRegionTipShow: function (e, el, code) {
                        el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
                    }
                });

                $('#turquoise-scheme #world-map-gdp-2').vectorMap({
                    map: 'world_mill_en',
                    backgroundColor: 'transparent',
                    zoomOnScroll: false,
                    series: {
                        regions: [{
                            values: gdpData,
                            scale: ['#E6F2F0', bgTorquoise],
                            normalizeFunction: 'polynomial'
                        }]
                    },
                    onRegionTipShow: function (e, el, code) {
                        el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
                    }
                });
                
            }

            
        },

        //Skycons
        initSkyCons: function() {
            var icons = new Skycons({
                "color": bgTorquoise
            }),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;

            for (i = list.length; i--;)
                icons.set(list[i], list[i]);
            
            icons.play();
        },

        initEasyPieChart: function() {
            $('#turquoise-scheme .chart').easyPieChart({
                easing: 'easeOutBounce',
                lineWidth: '10',
                barColor: bgTorquoise,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        },

        initMorrisChart: function() {

            if($("#turquoise-scheme #graph-earnings").length) {

                if (Morris.EventEmitter) {
                    // Use Morris.Area instead of Morris.Line
                    Morris.Area({
                        element: 'graph-earnings',
                        padding: 10,
                        behaveLikeLine: true,
                        gridEnabled: false,
                        gridLineColor: '#dddddd',
                        axes: true,
                        fillOpacity: .7,
                        data: [{
                            period: '2012 Q1',
                            samsung: 101,
                            sony: 123,
                            iphone: 340,
                            acer: 230
                        }, {
                            period: '2012 Q2',
                            samsung: 3231,
                            sony: 3412,
                            iphone: 34342,
                            acer: 2111
                        }, {
                            period: '2012 Q3',
                            samsung: 531,
                            sony: 3342,
                            iphone: 42343,
                            acer: 3423
                        }, {
                            period: '2013 Q1',
                            samsung: 1211,
                            sony: 2221,
                            iphone: 4432,
                            acer: 2141
                        }, {
                            period: '2013 Q2',
                            samsung: 32343,
                            sony: 3223,
                            iphone: 3458,
                            acer: 7612
                        }, {
                            period: '2013 Q3',
                            samsung: 765,
                            sony: 3321,
                            iphone: 312,
                            acer: 224
                        }, {
                            period: '2014 Q1',
                            samsung: 312,
                            sony: 7631,
                            iphone: 34343,
                            acer: 3433
                        }, {
                            period: '2014 Q2',
                            samsung: 66752,
                            sony: 3343,
                            iphone: 2456,
                            acer: 3223
                        }, {
                            period: '2014 Q3',
                            samsung: 12123,
                            sony: 3412,
                            iphone: 3331,
                            acer: 7656
                        }, {
                            period: '2015 Q1',
                            samsung: 6531,
                            sony: 3341,
                            iphone: 431,
                            acer: 456
                        }, {
                            period: '2015 Q2',
                            samsung: 34341,
                            sony: 343,
                            iphone: 21343,
                            acer: 123
                        }


                        ],
                        lineColors: [bgTorquoise, bgTorquoise4, bgTorquoise3, bgTorquoise2],
                        xkey: 'period',
                        ykeys: ['samsung', 'sony', 'iphone', 'acer'],
                        labels: ['Samsung', 'Sony', 'iPhone', 'Acer'],
                        pointSize: 0,
                        lineWidth: 0,
                        hideHover: 'auto'

                    });

                }//end if

            }//end if

            
        },

        initChatRoomConversation: function(){

            $('#turquoise-scheme .chat-msg-list').slimscroll({
                height: '360px',
                wheelStep: 35
            });

            $('#turquoise-scheme .chat-input').keypress(function(e) {
                if(e.which == 13) {
                    var chatTime = new Date();
                    chatTime = chatTime.toLocaleTimeString().replace(/:\d+ /, ' '); 
                    var curr_dt = getDayName() + ' ' + chatTime;
                    var chatText = $('#turquoise-scheme .chat-input').val();
                    if (chatText == "") {
                        App.initNotific8('Error', 'Chat field is required!', 'warning', 5000);
                        $("#turquoise-scheme .chat-input").focus();
                    } else {
                        $('<li class="clearfix even"><div class="chat-avatar"><img src="images/chat-user-thumb.png" alt="male"></div><div class="conversation-text"><div class="msg-text"><i>John Carry</i><p>' + chatText + '</p></div><p> ' + curr_dt + '</div></li>').appendTo('#turquoise-scheme .chat-msg-list');
                        $('.chat-input').val('');
                        $(".chat-input").focus();
                        $('.chat-msg-list').scrollTo('100%', '100%', {
                            easing: 'swing'
                        });
                    }
                }
            });

            

            $('#turquoise-scheme .send-msg .btn').click(function () {
                var chatTime = new Date();
                chatTime = chatTime.toLocaleTimeString().replace(/:\d+ /, ' '); 
                var curr_dt = getDayName() + ' ' + chatTime;
                var chatText = $('.chat-input').val();
                if (chatText == "") {
                    
                    //function notific8(heading, message, message_type, life, isSticky, horizontalEdge, verticalEdge) {

                    App.initNotific8('Error', 'Chat field is required!', 'warning', 5000);
                   
                    $(".chat-input").focus();
                } else {
                    $('<li class="clearfix even"><div class="chat-avatar"><img src="images/chat-user-thumb.png" alt="male"></div><div class="conversation-text"><div class="msg-text"><i>John Carry</i><p>' + chatText + '</p></div><p> ' + curr_dt + '</div></li>').appendTo('.chat-msg-list');
                    $('.chat-input').val('');
                    $(".chat-input").focus();
                    $('.chat-msg-list').scrollTo('100%', '100%', {
                        easing: 'swing'
                    });
                }
            });

            function getDayName() {
                var d = new Date();
                var weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";

                var n = weekday[d.getDay()];
                
                return n;
            }

        },

        initTodoList: function(){
            $("#turquoise-scheme #sortable-todo").sortable();

            
            /*
            $('.btn-select-all').click(function () {

                
                
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

            

            $('#turquoise-scheme .todo-check label').click(function () {
                $(this).parents('li').children('.todo-title').toggleClass('line-through');
            });

            //close todo list
            $('#turquoise-scheme .todo-remove').click(function(){

                $(this).parents('li').remove();

            });


            $('#turquoise-scheme .todo-remove').tooltipster({
                offsetY: 2,
                animation: 'grow'
            });

            $('#turquoise-scheme .todo-edit').tooltipster({
                offsetY: 2,
                animation: 'grow'
            });

            $('#turquoise-scheme .todo-done').tooltipster({
                offsetY: 2,
                animation: 'grow'
            });

        }
    };

}();






