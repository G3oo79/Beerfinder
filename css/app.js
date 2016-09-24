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
	



        
        });