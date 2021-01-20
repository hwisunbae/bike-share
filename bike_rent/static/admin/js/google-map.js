var map;
$(document).ready(function(){

  "use strict";

  if(google) {


    /*
    Google Map Clustering
    ---------------------------*/
    if($('#map-clustering').length) {

      function getMarkersFromDatabase(zoomLevel){
        var i, j, result = [];
        if (zoomLevel < 5){
          for(i=0; i<database.length; i++){
            result.push({
              latLng:database[i].main.pos,
              data:{
                label: database[i].main.label,
                count: database[i].list.length
              }
            });
          }
        } else {
          for(i=0; i<database.length; i++){
            for(j=0; j<database[i].list.length; j++){
              result.push({
                latLng:database[i].list[j].pos,
                data:{
                  label: database[i].list[j].label,
                  count: 1
                }
              });
            }
          }
        }
        return result;
      }

      function appendMarkers(zoomLevel){
        $("#map-clustering").gmap3({
          clear:{name:"clusterer"},
          marker:{
            values: getMarkersFromDatabase(zoomLevel),
            cluster:{
              radius:100,
              calculator: function(values){
                var i, cnt = 0;
                for(i=0; i<values.length; i++){
                  if (values[i] && values[i].data && values[i].data.count){
                    cnt += values[i].data.count;
                  } else {
                    cnt++;
                  }
                }
                return cnt;
              },
              // This style will be used for clusters with more than 0 markers
              0: {
                content: "<div class='cluster cluster-1'>CLUSTER_COUNT</div>",
                width: 53,
                height: 52
              },
              // This style will be used for clusters with more than 20 markers
              20: {
                content: "<div class='cluster cluster-2'>CLUSTER_COUNT</div>",
                width: 56,
                height: 55
              },
              // This style will be used for clusters with more than 50 markers
              50: {
                content: "<div class='cluster cluster-3'>CLUSTER_COUNT</div>",
                width: 66,
                height: 65
              }
            },
            options: {
              icon: new google.maps.MarkerImage("http://maps.gstatic.com/mapfiles/icon_green.png")
            }
          }
        });
      }


      $("#map-clustering").gmap3({
          map:{
            options:{
              center:[46.578498,2.457275],
              zoom: 3,
              mapTypeId: google.maps.MapTypeId.TERRAIN
            },
            events:{
              zoom_changed: function(map){
                appendMarkers(map.getZoom());
              }
            },
            callback: function(map){
              appendMarkers(map.getZoom());
            }
          }
        });

    }  






    /*
    Google Street View Paromanas
    ---------------------------*/
    if($('#map-interacting-ui').length) {
       // Update position
      $(document).on('submit', '.edit_marker', function(e) {
        e.preventDefault();

        var $index = $(this).data('marker-index');

        $lat = $('#marker_' + $index + '_lat').val();
        $lng = $('#marker_' + $index + '_lng').val();

        var template = $('#edit_marker_template').text();

        // Update form values
        var content = template.replace(/{{index}}/g, $index).replace(/{{lat}}/g, $lat).replace(/{{lng}}/g, $lng);

        map.markers[$index].setPosition(new google.maps.LatLng($lat, $lng));
        map.markers[$index].infoWindow.setContent(content);

        $marker = $('#markers-with-coordinates').find('li').eq(0).find('a');
        $marker.data('marker-lat', $lat);
        $marker.data('marker-lng', $lng);
      });


      // Update center
      $(document).on('click', '.pan-to-marker', function(e) {
        e.preventDefault();

        var lat, lng;

        var $index = $(this).data('marker-index');
        var $lat = $(this).data('marker-lat');
        var $lng = $(this).data('marker-lng');

        if ($index != undefined) {
          // using indices
          var position = map.markers[$index].getPosition();
          lat = position.lat();
          lng = position.lng();
        }
        else {
          // using coordinates
          lat = $lat;
          lng = $lng;
        }

        map.setCenter(lat, lng);
      });


      map = new GMaps({
        div: '#map-interacting-ui',
        lat: -12.043333,
        lng: -77.028333
      });

      GMaps.on('marker_added', map, function(marker) {
        $('#markers-with-index').append('<li><a href="#" class="pan-to-marker" data-marker-index="' + map.markers.indexOf(marker) + '">' + marker.title + '</a></li>');

        $('#markers-with-coordinates').append('<li><a href="#" class="pan-to-marker" data-marker-lat="' + marker.getPosition().lat() + '" data-marker-lng="' + marker.getPosition().lng() + '">' + marker.title + '</a></li>');
      });

      GMaps.on('click', map.map, function(event) {
        var index = map.markers.length;
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();

        var template = $('#edit_marker_template').text();

        var content = template.replace(/{{index}}/g, index).replace(/{{lat}}/g, lat).replace(/{{lng}}/g, lng);

        map.addMarker({
          lat: lat,
          lng: lng,
          title: 'Marker #' + index,
          infoWindow: {
            content : content
          }
        });
      });
    }




    /*
    Google Street View Paromanas
    ---------------------------*/
    if($('#map-street-view-panoramas').length) {
      var panorama = GMaps.createPanorama({
        el: '#map-street-view-panoramas',
        lat : 42.3455,
        lng : -71.0983
      });
    }




    /*
    Google Map KML GEO RSS LAYERS
    ---------------------------*/
    if($('#map-kml-georss-layers').length) {
      var infoWindow = new google.maps.InfoWindow({});
      var map = new GMaps({
        el: '#map-kml-georss-layers',
        zoom: 12,
        lat: 40.65,
        lng: -73.95
      });
      map.loadFromKML({
        url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss',
        suppressInfoWindows: true,
        events: {
          click: function(point){
            infoWindow.setContent(point.featureData.infoWindowHtml);
            infoWindow.setPosition(point.latLng);
            infoWindow.open(map.map);
          }
        }
      });
    }





    /*
    Google Map Fusion Table Layers
    ---------------------------*/
    if($('#map-fusion-table-layers').length) {
      infoWindow = new google.maps.InfoWindow({});
      map = new GMaps({
        el: '#map-fusion-table-layers',
        zoom: 11,
        lat: 41.850033,
        lng: -87.6500523
      });
      map.loadFromFusionTables({
        query: {
          select: '\'Geocodable address\'',
          from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
        },
        suppressInfoWindows: true,
        events: {
          click: function(point){
            infoWindow.setContent('You clicked here!');
            infoWindow.setPosition(point.latLng);
            infoWindow.open(map.map);
          }
        }
      });
    }





    /*
    Google Map Custom Controls
    ---------------------------*/
    if($('#map-custom-controls').length) {
      map = new GMaps({
        el: '#map-custom-controls',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333
      });
      map.addControl({
        position: 'top_right',
        content: 'Geolocate',
        style: {
          margin: '5px',
          padding: '1px 6px',
          border: 'solid 1px #717B87',
          background: '#fff'
        },
        events: {
          click: function(){
            GMaps.geolocate({
              success: function(position){
                map.setCenter(position.coords.latitude, position.coords.longitude);
              },
              error: function(error){
                alert('Geolocation failed: ' + error.message);
              },
              not_supported: function(){
                alert("Your browser does not support geolocation");
              }
            });
          }
        }
      });
    }





    /*
    Google Map Custom Controls
    ---------------------------*/
    if($('#map-custom-controls').length) {
      map = new GMaps({
        el: '#map-custom-controls',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333
      });
      map.addControl({
        position: 'top_right',
        content: 'Geolocate',
        style: {
          margin: '5px',
          padding: '1px 6px',
          border: 'solid 1px #717B87',
          background: '#fff'
        },
        events: {
          click: function(){
            GMaps.geolocate({
              success: function(position){
                map.setCenter(position.coords.latitude, position.coords.longitude);
              },
              error: function(error){
                alert('Geolocation failed: ' + error.message);
              },
              not_supported: function(){
                alert("Your browser does not support geolocation");
              }
            });
          }
        }
      });
    }





    /*
    Google Map Geofences
    ---------------------------*/
    if($('#map-geofences').length) {
      var map = new GMaps({
        el: '#map-geofences',
        lat: -12.043333,
        lng: -77.028333
      });
      var path = [
            [-12.040397656836609,-77.03373871559225],
            [-12.040248585302038,-77.03993927003302],
            [-12.050047116528843,-77.02448169303511],
            [-12.044804866577001,-77.02154422636042]
          ];

      var polygon = map.drawPolygon({
        paths: path,
        strokeColor: '#BBD8E9',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#BBD8E9',
        fillOpacity: 0.6
      });

      var circle = map.drawCircle({
        lat: -12.040504866577001,
        lng: -77.02024422636042,
        radius: 350,
        strokeColor: '#432070',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#432070',
        fillOpacity: 0.6
      });

      map.addMarker({
        lat: -12.043333,
        lng: -77.028333,
        draggable: true,
        fences: [polygon],
        outside: function(m, f){
          alert('This marker has been moved outside of its fence');
        }
      });

      map.addMarker({
        lat: -12.040504866577001,
        lng: -77.02024422636042,
        draggable: true,
        fences: [circle],
        outside: function(m, f){
          alert('This marker has been moved outside of its fence');
        }
      });
    }




    
    /*
    Google Map Context Menu
    ---------------------------*/
    if($('#map-context-menu').length) {
      map = new GMaps({
        el: '#map-context-menu',
        lat: -12.043333,
        lng: -77.028333
      });
      map.setContextMenu({
        control: 'map',
        options: [{
          title: 'Add marker',
          name: 'add_marker',
          action: function(e){
            console.log(e.latLng.lat());
            console.log(e.latLng.lng());
            this.addMarker({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
              title: 'New marker'
            });
            this.hideContextMenu();
          }
        }, {
          title: 'Center here',
          name: 'center_here',
          action: function(e){
            this.setCenter(e.latLng.lat(), e.latLng.lng());
          }
        }]
      });
      map.setContextMenu({
        control: 'marker',
        options: [{
          title: 'Center here',
          name: 'center_here',
          action: function(e){
            this.setCenter(e.latLng.lat(), e.latLng.lng());
          }
        }]
      });
    }


    /*
    Google Map Static Polylines  
    ---------------------------*/
    if($('#map-static-polylines').length) {
      var path = [
        [-12.040397656836609,-77.03373871559225],
        [-12.040248585302038,-77.03993927003302],
        [-12.050047116528843,-77.02448169303511],
        [-12.044804866577001,-77.02154422636042],
        [-12.040397656836609,-77.03373871559225]
      ];

      var url = GMaps.staticMapURL({
        size: [610, 350],
        lat: -12.043333,
        lng: -77.028333,
        polyline: {
          path: path,
          strokeColor: '#131540',
          strokeOpacity: 0.6,
          strokeWeight: 6
        }
      });
      $('<img style="width:100%"/>').attr('src', url).appendTo('#map-static-polylines');
    }



    /*
    Google Map Static   
    ---------------------------*/
    if($('#map-static-markers').length) {
      var url = GMaps.staticMapURL({
        size: [610, 350],
        lat: -12.043333,
        lng: -77.028333,
        markers: [
          {lat: -12.043333, lng: -77.028333},
          {lat: -12.045333, lng: -77.034, size: 'small'},
          {lat: -12.045633, lng: -77.022, color: 'blue'}
        ]
      });
      $('<img style="width:100%"/>').attr('src', url).appendTo('#map-static-markers');
    }




    /*
    Google Map Static   
    ---------------------------*/
    if($('#map-static').length) {
      var url = GMaps.staticMapURL({
        size: [610, 350],
        lat: -12.043333,
        lng: -77.028333
      });
      $('<img style="width:100%;"/>').attr('src', url).appendTo('#map-static');
    }



    /*
    Google Map Advanced Routes    
    ---------------------------*/
    if($('#map-advanced-routes').length) {
       map = new GMaps({
        el: '#map-advanced-routes',
        lat: -12.043333,
        lng: -77.028333
      });
      $('#start_travel').on("click", function(e){
        e.preventDefault();
        map.travelRoute({
          origin: [-12.044012922866312, -77.02470665341184],
          destination: [-12.090814532191756, -77.02271108990476],
          travelMode: 'driving',
          step: function(e){
            $('#instructions').append('<li>'+e.instructions+'</li>');
            $('#instructions li:eq('+e.step_number+')').delay(450*e.step_number).fadeIn(200, function(){
              map.setCenter(e.end_location.lat(), e.end_location.lng());
              map.drawPolyline({
                path: e.path,
                strokeColor: '#131540',
                strokeOpacity: 0.6,
                strokeWeight: 6
              });
            });
          }
        });
      });
    }



    /*
    Google Map Routes    
    ---------------------------*/
    if($('#map-routes').length) {
       map = new GMaps({
        el: '#map-routes',
        lat: -12.043333,
        lng: -77.028333
      });
      map.drawRoute({
        origin: [-12.044012922866312, -77.02470665341184],
        destination: [-12.090814532191756, -77.02271108990476],
        travelMode: 'driving',
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
    }




    /*
    Google Map Overlays    
    ---------------------------*/
    if($('#map-polygons').length) {
     var map = new GMaps({
        el: '#map-polygons',
        lat: -12.040397656836609,
        lng: -77.03373871559225,
        click: function(e){
          console.log(e);
        }
      });

      var paths = [
                [
                  [
                    [-105.00432014465332, 39.74732195489861],
                    [-105.00715255737305, 39.74620006835170],
                    [-105.00921249389647, 39.74468219277038],
                    [-105.01067161560059, 39.74362625960105],
                    [-105.01195907592773, 39.74290029616054],
                    [-105.00989913940431, 39.74078835902781],
                    [-105.00758171081543, 39.74059036160317],
                    [-105.00346183776855, 39.74059036160317],
                    [-105.00097274780272, 39.74059036160317],
                    [-105.00062942504881, 39.74072235994946],
                    [-105.00020027160645, 39.74191033368865],
                    [-105.00071525573731, 39.74276830198601],
                    [-105.00097274780272, 39.74369225589818],
                    [-105.00097274780272, 39.74461619742136],
                    [-105.00123023986816, 39.74534214278395],
                    [-105.00183105468751, 39.74613407445653],
                    [-105.00432014465332, 39.74732195489861]
                  ],[
                    [-105.00361204147337, 39.74354376414072],
                    [-105.00301122665405, 39.74278480127163],
                    [-105.00221729278564, 39.74316428375108],
                    [-105.00283956527711, 39.74390674342741],
                    [-105.00361204147337, 39.74354376414072]
                  ]
                ],[
                  [
                    [-105.00942707061768, 39.73989736613708],
                    [-105.00942707061768, 39.73910536278566],
                    [-105.00685214996338, 39.73923736397631],
                    [-105.00384807586671, 39.73910536278566],
                    [-105.00174522399902, 39.73903936209552],
                    [-105.00041484832764, 39.73910536278566],
                    [-105.00041484832764, 39.73979836621592],
                    [-105.00535011291504, 39.73986436617916],
                    [-105.00942707061768, 39.73989736613708]
                  ]
                ]
              ];

      path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511], [-12.044804866577001,-77.02154422636042]];

      map.drawPolygon({
        paths: paths,
        useGeoJSON: true,
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });

      map.drawPolygon({
        paths: path,
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
    }



    /*
    Google Map Overlays    
    ---------------------------*/
    if($('#map-overlays').length) {
      var map = new GMaps({
        el: '#map-overlays',
        lat: -12.043333,
        lng: -77.028333
      });
      map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        layer: 'overlayLayer',
        content: '<div class="overlay">Lima<div class="overlay_arrow above"></div></div>',
        verticalAlign: 'top',
        horizontalAlign: 'center'
      });
    }
    



    /*
    Google Map Polylines    
    ---------------------------*/
    if($('#map-polylines').length) {
      var map = new GMaps({
        el: '#map-polylines',
        lat: -12.043333,
        lng: -77.028333,
        click: function(e){
          console.log(e);
        }
      });

      var path = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]];

      map.drawPolyline({
        path: path,
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
    }



    /*
    Google Map Geocoding
    ---------------------------*/
    if($('#map-geocoding').length) {
      var map = new GMaps({
        el: '#map-geocoding',
        lat: -12.043333,
        lng: -77.028333
      });

      $('#geocoding_form').submit(function(e){
        e.preventDefault();
        GMaps.geocode({
          address: $('#address').val().trim(),
          callback: function(results, status){
            if(status=='OK'){
              var latlng = results[0].geometry.location;
              map.setCenter(latlng.lat(), latlng.lng());
              map.addMarker({
                lat: latlng.lat(),
                lng: latlng.lng()
              });
            }
          }
        });
      });
    }
    




    /*
    Google Map Geoplocation
    ---------------------------*/
    if($('#map-geolocation').length) {
      var map = new GMaps({
        el: '#map-geolocation',
        lat: -12.043333,
        lng: -77.028333
      });

      GMaps.geolocate({
        success: function(position){
          map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error){
          alert('Geolocation failed: '+error.message);
        },
        not_supported: function(){
          alert("Your browser does not support geolocation");
        },
        always: function(){
          alert("Done!");
        }
      });
    }
    



    /*
    Google Map Events
    ---------------------------*/
    if($('#map-markers').length) {
      var map = new GMaps({
        el: '#map-markers',
        lat: -12.043333,
        lng: -77.028333
      });
      map.addMarker({
        lat: -12.043333,
        lng: -77.03,
        title: 'Lima',
        details: {
          database_id: 42,
          author: 'HPNeo'
        },
        click: function(e){
          if(console.log)
            console.log(e);
          alert('You clicked in this marker');
        },
        mouseover: function(e){
          if(console.log)
            console.log(e);
        }
      });
      map.addMarker({
        lat: -12.042,
        lng: -77.028333,
        title: 'Marker with InfoWindow',
        infoWindow: {
          content: '<p>HTML Content</p>'
        }
      });
    }
    



    /*
    Google Map Events
    ---------------------------*/
    if($('#map-events').length) {
      var map = new GMaps({
        el: '#map-events',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333,
        click: function(e){
          alert('click');
        },
        dragend: function(e){
          alert('dragend');
        }
      });
    }
    



    /*
    Basic Google Map
    ---------------------------*/
    if($('#basic-map').length) {
      var map = new GMaps({
        el: '#basic-map',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
      });
    }
    
  }
});