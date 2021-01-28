(function($) {

	"use strict";
	
	$(".container2").mapael({
		map : {
			name : "france_departments"
			
			// Set default plots and areas style
			, defaultPlot : {
				attrs : {
					fill: "#004a9b"
					, opacity : 0.6
				}
				, attrsHover : {
					opacity : 1
				}
				, text : {
					attrs : {
						fill : "#505444"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
			, defaultArea: {
				attrs : {
					fill : "#f4f4e8"
					, stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#a4e100"
				}
				, text : {
					attrs : {
						fill : "#505444"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
		},
		
		// Customize some areas of the map
		areas: {
			"department-56" : {
				text : {content : "Morbihan", attrs : {"font-size" : 10}}, 
				tooltip: {content : "<b>Morbihan</b> <br /> Bretagne"}
			},
			"department-21" : {
				attrs : {
					fill : "#488402"
				}
				, attrsHover : {
					fill: "#a4e100"
				}
			}
		},
		
		// Add some plots on the map
		plots : {
			// Image plot
			'paris' : {
				type : "image",
				url: "http://www.vincentbroute.fr/mapael/marker.png",
				width: 12,
				height: 40,
				latitude : 48.86, 
				longitude: 2.3444,
				attrs : {
					opacity : 1
				},
				attrsHover: {
					transform : "s1.5"
				}
			},
			// Circle plot
			'lyon' : {
				type: "circle",
				size:50,
				latitude :45.758888888889, 
				longitude: 4.8413888888889, 
				tooltip: {content : "<span style=\"font-weight:bold;\">City :</span> Lyon <br /> Rhône-Alpes"},
				text : {content : "Lyon"}
			},
			// Square plot
			'rennes' : {
				type :"square",
				size :20,
				latitude : 48.114166666667, 
				longitude: -1.6808333333333, 
				tooltip: {content : "<span style=\"font-weight:bold;\">City :</span> Rennes <br /> Bretagne"},
				text : {content : "Rennes"}
			},
			// Plot positioned by x and y instead of latitude, longitude
			'myplot' : {
				x : 300, 
				y: 200,
				text : {
					content : "My plot"
					, position: "bottom"
					, attrs : {"font-size" : 10, fill : "#004a9b", opacity: 0.6}
					, attrsHover : {fill : "#004a9b", opacity: 1}
				},
			},
			'Bordeaux' : {
				type: "circle",
				size:30,
				latitude :44.834763, 
				longitude: -0.580991,
                attrs : {
                    opacity : 1
                },
				text : {
                    content : "33",
                    position : "inner", 
                    attrs : {
						"font-size" : 16
                        , "font-weight" : "bold"
						, fill : "#fff"
					}, 
                    attrsHover : {
						"font-size" : 16
                        , "font-weight" : "bold"
						, fill : "#fff"
					}
                }
			}
		}
	});





	/*
	Vector Map Belguim
	------------------------------------*/
	$(".vector-map-belgium").mapael({
		map : {
        	name : "belgium",
        	// Set default plots and areas style
			defaultArea: {
				attrs : {
					fill : "rgba(64, 115, 128, .8)", 
					stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#2ECC71"
				}
				, text : {
					attrs : {
						fill : "#000"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
   	 	}
	});






	
	/*
	Vector Map Europian Union
	------------------------------------*/
	$(".vector-map-netherlands").mapael({
		map : {
        	name : "netherlands",
        	// Set default plots and areas style
			defaultArea: {
				attrs : {
					fill : "rgba(128, 128, 128, .8)", 
					stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#2ECC71"
				}
				, text : {
					attrs : {
						fill : "#000"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
   	 	}
	});





	/*
	Vector Map Europian Union
	------------------------------------*/
	$(".vector-map-europian-unions").mapael({
		map : {
        	name : "european_union",
        	// Set default plots and areas style
			defaultArea: {
				attrs : {
					fill : "rgba(22, 24, 30, .8)", 
					stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#2ECC71"
				}
				, text : {
					attrs : {
						fill : "#000"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
   	 	}
	});





	/*
	Vector Map Argentina
	------------------------------------*/
	$(".vector-map-argentina").mapael({
		map : {
        	name : "argentina",
        	// Set default plots and areas style
			defaultArea: {
				attrs : {
					fill : "rgba(22, 24, 30, .8)", 
					stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#2ECC71"
				}
				, text : {
					attrs : {
						fill : "#000"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
   	 	}
	});






	/*
	Vector Map France Regions
	------------------------------------*/
	$(".vector-map-france-regions").mapael({
		map : {
        	name : "france_regions",
        	// Set default plots and areas style
			defaultArea: {
				attrs : {
					fill : "rgba(75, 81, 101, .8)", 
					stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#2ECC71"
				}
				, text : {
					attrs : {
						fill : "#000"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
   	 	}
	});







	/*
	Vector Map Ukraine
	------------------------------------*/
	$(".vector-map-ukraine").mapael({
		map : {
        	name : "ukraine",
        	// Set default plots and areas style
			defaultArea: {
				attrs : {
					fill : "rgba(153, 153, 102, .8)", 
					stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#2ECC71"
				}
				, text : {
					attrs : {
						fill : "#000"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
   	 	}
	});





	/*
	Vector Map United Kingdom
	------------------------------------*/
	$(".vector-map-uk").mapael({
		map : {
        	name : "united_kingdom",
        	// Set default plots and areas style
			defaultArea: {
				attrs : {
					fill : "rgba(87, 109, 109, .8)", 
					stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#2ECC71"
				}
				, text : {
					attrs : {
						fill : "#000"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
   	 	}
	});






	/*
	Vector World Map
	------------------------------------*/
	$(".vector-world-map").mapael({
		map : {
        	name : "world_countries",
        	// Set default plots and areas style
			defaultArea: {
				attrs : {
					fill : "rgba(255, 255, 255, .8)", 
					stroke: "#ced8d0"
				}
				, attrsHover : {
					fill: "#2ECC71"
				}
				, text : {
					attrs : {
						fill : "#000"
					}
					, attrsHover : {
						fill : "#000"
					}
				}
			}
   	 	}
	});

})(jQuery);