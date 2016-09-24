$(document).ready(function(){
 	   $('select').material_select();
 	   $('.carousel').carousel();
 	//carousel nexts and previous movement methods.
     /*$('.carousel.carousel-slider').carousel({full_width: true});*/

    // Next slide
	$('.carousel').carousel('next');
	$('.carousel').carousel('next', 3); // Move next n times.
	// Previous slide
	$('.carousel').carousel('prev');
	$('.carousel').carousel('prev', 4); // Move prev n times.
	// Set to nth slide
	$('.carousel').carousel('set', 4);
	$('.parallax').parallax();
	//firebase data
	var config = {
    apiKey: "AIzaSyDONv_jow4N-ruNrWSGfIdUuLKNkYy3wY4",
    authDomain: "beerfinder-5af63.firebaseapp.com",
    databaseURL: "https://beerfinder-5af63.firebaseio.com",
    storageBucket: "beerfinder-5af63.appspot.com",
    messagingSenderId: "1039902569554"
  };
  firebase.initializeApp(config);

//
	$("#clickButton").on("click", function(){
   where = $("#whereInput").val().trim();
   cityState = $("#cityStateInput").val().trim();
   
   console.log("where " + where)
  database.ref().push({
      where: where,
      cityState: cityState,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  return false;
  });
 database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val().where);
  console.log(childSnapshot.val().cityState)
  var where = (childSnapshot.val().where) ;
  var cityState = (childSnapshot.val().cityState)
       var queryURL = "https://crossorigin.me/http://api.brewerydb.com/v2/locations/?key=df96c11767682fe9178fde3cedaa19f3&" + cityState + "=" + where
      var map;
      // Create a new blank array for all the listing markers.
      var markers = [];
      console.log("ssss " + where)
      console.log(queryURL)
 $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
       
      console.log(response)
      
       
     
        // Create a styles array to use with the map.
        
        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 13,
          mapTypeControl: false
        });
        // These are the real estate listings that will be shown to the user.
        // Normally we'd have these in a database instead.
        var lats = [];
        var lngs = [];
        console.log(response.data.length)
        for (x=0;x<response.data.length;x++){
        var lat = response.data[x].latitude
        var lng = response.data[x].longitude
        var locations = [];
        lats.push(lat);
        lngs.push(lng);
      }
      console.log(lats)
      console.log(lngs)
        var largeInfowindow = new google.maps.InfoWindow();
        // Style the markers a bit. This will be our listing marker icon.
        var defaultIcon = ("https://github.com/bernerd252/secretbeer/blob/master/images/beerBottle.gif")
        // Create a "highlighted location" marker color for when the user
        // mouses over the marker.
        // 
        var largeInfowindow = new google.maps.InfoWindow();
        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < lats.length; i++) {
          // Get the position from the location array. And turn them into something the computer can use.
          var latParse = parseFloat(lats[i])
          console.log("latParse " + latParse)
          var lngParse = parseFloat(lngs[i])
          console.log("lngParse " + lngParse)
          var title = response.data[i].brewery.name;
          console.log(location)
      
      // change latParse and lngParse into latitude and longitude cocordinates that google maps can understand
         var position = new google.maps.LatLng(latParse,lngParse);
          
          // Create a marker per location, and put into markers array.
          var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i
          });
          // Push the marker to our array of markers.
          markers.push(marker);
          // Create an onclick event to open the large infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
          // Two event listeners - one for mouseover, one for mouseout,
          // to change the colors back and forth.
          marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
          });
          marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
          });
        
        document.getElementById('show-listings').addEventListener('click', showListings);
        document.getElementById('hide-listings').addEventListener('click', hideListings);
        
      
      function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
        }
      }
      // This function will loop through the markers array and display them all.
      function showListings() {
        var bounds = new google.maps.LatLngBounds();
        // Extend the boundaries of the map for each marker and display the marker
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
          bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
      }
      // This function will loop through the listings and hide them all.
      function hideListings() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      }
    }
  });
});



        
        });