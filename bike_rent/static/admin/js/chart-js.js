(function($) {

	"use strict";

	

	try {




		/*
		Chartjs Line
		--------------------------------------------------------*/
		if($("#chartjs-bar").length) {
			var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

			var barChartData = {
				labels : ["January","February","March","April","May","June","July"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,0.8)",
						highlightFill: "rgba(220,220,220,0.75)",
						highlightStroke: "rgba(220,220,220,1)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
					},
					{
						fillColor : "rgba(151,187,205,0.5)",
						strokeColor : "rgba(151,187,205,0.8)",
						highlightFill : "rgba(151,187,205,0.75)",
						highlightStroke : "rgba(151,187,205,1)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
					}
				]

			}
		}






		/*
		Chartjs Line
		--------------------------------------------------------*/
		if($("#chartjs-doughnut").length) {
			var doughnutData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];
		}





		/*
		Chartjs Line
		--------------------------------------------------------*/
		if($("#chartjs-line").length) {

			var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
			var lineChartData = {
				labels : ["January","February","March","April","May","June","July"],
				datasets : [
					{
						label: "My First dataset",
						fillColor : "rgba(220,220,220,0.2)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(220,220,220,1)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
					},
					{
						label: "My Second dataset",
						fillColor : "rgba(151,187,205,0.2)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(151,187,205,1)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
					}
				]

			}
				
		}





		/*
		Chartjs Pie
		--------------------------------------------------------*/
		if($("#chartjs-pie").length) {

			var pieData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];
				
		}








		/*
		Chartjs Polar Area
		--------------------------------------------------------*/
		if($("#chartjs-polar-area").length) {

			var polarData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];
				
		}






		/*
		Chartjs Radar
		--------------------------------------------------------*/
		if($("#chartjs-radar").length) {
			var radarChartData = {
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
				datasets: [
					{
						label: "My First dataset",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [65,59,90,81,56,55,40]
					},
					{
						label: "My Second dataset",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [28,48,40,19,96,27,100]
					}
				]
			};


		}

		if($("#theme-dark-1-chartjs-radar").length) {
			var radarChartData = {
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
				pointLabelFontColor:'red',
				datasets: [
					{
						label: "My First dataset",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [65,59,90,81,56,55,40]
					},
					{
						label: "My Second dataset",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [28,48,40,19,96,27,100]
					}
				]
			};


		}

		window.onload = function(){

			//Chartjs Doughnut
			var ctx = document.getElementById("chartjs-bar").getContext("2d");
			window.myBar = new Chart(ctx).Bar(barChartData, {
				responsive : true
			});


			//Chartjs Doughnut
			var ctx = document.getElementById("chartjs-doughnut").getContext("2d");
			window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
				responsive : true
			});


			//Chartjs Line
			var ctx = document.getElementById("chartjs-line").getContext("2d");
			window.myLine = new Chart(ctx).Line(lineChartData, {
				responsive: true
			});



			//Chartjs Pie
			var ctx = document.getElementById("chartjs-pie").getContext("2d");
			window.myPie = new Chart(ctx).Pie(pieData, {
				responsive:true
			});



			//Chartjs Polar Area
			var ctx = document.getElementById("chartjs-polar-area").getContext("2d");
			window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
				responsive:true
			});


			//Chartjs Radar
			window.myRadar = new Chart(document.getElementById("chartjs-radar").getContext("2d")).Radar(radarChartData, {
				responsive: true
			});
			window.myRadar = new Chart(document.getElementById("theme-dark-1-chartjs-radar").getContext("2d")).Radar(radarChartData, {
				responsive: true
			});

			
		}



	} catch(error) {
		alert("Error occured: "+ error.message);
	}
	   
		

  	

})(jQuery);