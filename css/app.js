$(document).ready(function(){
 	   $('select').material_select();
 	   $('.carousel').carousel();
 	//carousel nexts and previous movement methods.
     $('.carousel.carousel-slider').carousel({full_width: true});

    // Next slide
	$('.carousel').carousel('next');
	$('.carousel').carousel('next', 3); // Move next n times.
	// Previous slide
	$('.carousel').carousel('prev');
	$('.carousel').carousel('prev', 4); // Move prev n times.
	// Set to nth slide
	$('.carousel').carousel('set', 4);
	



});
$("#map").hide();
//firebase data
var config = {
    apiKey: "AIzaSyDONv_jow4N-ruNrWSGfIdUuLKNkYy3wY4",
    authDomain: "beerfinder-5af63.firebaseapp.com",
    databaseURL: "https://beerfinder-5af63.firebaseio.com",
    storageBucket: "beerfinder-5af63.appspot.com",
    messagingSenderId: "1039902569554"
};
firebase.initializeApp(config);
//Created variable and assigned fire.database.
var database = firebase.database();
 $(".submit").on("click", function() {
  /*alert("hello");*/
  var regionInput = $('#regioninput').val().trim(); 
  alert("it works");
  var cityInput = $('#cityinput').val().trim(); 
  alert("yesss cityy");
/*  var queryURL = "https://crossorigin.me/http://api.brewerydb.com/v2/locations/?key=9bebc0cee0d006506782667a99991706&" + cityState + "=" + where;
*/
  

$("#regioninput").val("");
$("#cityinput").val("");

$("#map").show();
$(".carousel").hide();



return false;
 });

 

 
    
 

    
//map style and start location
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 9
        });
      }
