var map;

$(document).ready(function(){

  "use strict";

	if(google) {

		map = new GMaps({
        	el: '#contact-1',
        	lat: -12.043333,
        	lng: -77.028333
      	});
      	
      	map.addMarker({
        	lat: -12.042,
        	lng: -77.028333,
        	title: 'Marker with InfoWindow',
        	infoWindow: {
          		content: '<p>Thema Team Head Quarter</p>'
        	}
      	});

	}

});