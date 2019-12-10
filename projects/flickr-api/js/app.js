//Main App
// Date November 1st 2015
//Author Sura Karnawi
$(document).ready(function() {

 //Flickr API 
 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


 $('form').submit(function (evt) {//on click start searching and save the tag
    var $submitButton = $('#submit');
    var $searchField = $('#search');
    evt.preventDefault();
    $searchField.prop("disabled",true);
    $submitButton.attr("disabled", true).val("");
    var field = $searchField.val();
    $('#photos').html('');//photo reset
    $.getJSON(flickerAPI, {
        tags: field,
        format: "json"
      },
    function(data){
	  //console.log(data);
      var photoHTML = '';
	  var sliderHTML = ''; //the html for the slider
	  sliderHTML += '<a href="#" class="slideshow_prev_item">&#10096;</a>';//slider previous arrow
	  sliderHTML += '<ul>';
      if (data.items.length > 0) {
        $.each(data.items,function(i,photo) {
		
		//declare all variables then add it to photohtml and the slider
		//then whenever an image is clicked on it will take you to current i
		  var photoLink = data.items[i].media.m.substring(0,56);
		  var photoTitle = photo.title;
		  var thumbLink = photo.media.m;
		  var author = photo.author;
		  
		  var linkLength = thumbLink.length; console.log('link length', linkLength);
		  if (linkLength == 63){//flicker links are 63 or 62 characters
			photoLink = data.items[i].media.m.substring(0,57);
		  } else {
			photoLink = data.items[i].media.m.substring(0,56);
		  }
		  
		  //Thumbnails html
		  photoHTML += '<li>';
          photoHTML += '<a href="' + photoLink + '" class="image">';
		  photoHTML += '<img src="' + photoLink + '_q.jpg" title="' + photoTitle +'" alt="' + photoTitle +'"></a></li>';
		  
		  //slider html
		  sliderHTML += '<li class="slideshow_item">';
          sliderHTML += '<img src="' + photoLink + '_b.jpg" title="' + photoTitle +'"  alt="' + photoTitle +'"/>';
		  sliderHTML += '<span class="author">Photographer credit: ' + author + '</span>';
		  sliderHTML += '<a class="share-btn" href="#">SHARE</a>'; //add share button here
		  sliderHTML += '<span class="social-media"></span></li>';
		 
		  
        }); // end each
      } else {
        photoHTML = "<p class='no-search-results'>No photos found that match: " + field + " :( <br> Try Again :)</p>"
		sliderHTML = "<img src='img/placeholder-slider.jpg' alt='placeholder image'>"
      }
	  sliderHTML += '<a href="#" class="slideshow_next_item">&#10097;</a>';//slider next arrow
	  sliderHTML += '</ul>';
      $('#photos').html(photoHTML);
	  $('#theslides').html(sliderHTML);
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("");
	  
	  thumbsHover();//call hover over thumbs
	  shareHover(); //call hover over share
	  
	  //Sura's slideshow calling
	$(function(){
		$('#theslides').SlideShowPlugin({
			width: '910px',
			height: '550px',
			showNum: 10,
			previousBtn : '.slideshow_prev_item',
			nextBtn : '.slideshow_next_item',
			pagination: true,
			autoPlay: false,
			duration: '9500',
			transitionType: 'slide',
		});
	});
    }); // end getJSON
	
  }); // end click
  
	//Hover over SHARE button
	var shareHover = (function(){
	  $('a.share-btn').hover(function(){
			$('.social-media').addClass("hover"); 
		}, function(){
			$('.social-media').removeClass("hover");
		});
	});
	
	//on thumbs hover over select same slider image  
	var thumbsHover = (function(){ 
		$('#photos li').hover(function(){ 
			var idx = $('#photos li').index(this); 
			var active = $('.pagination li').eq(idx);
			$( active ).trigger('click');
		});//end of hover
	});//end of function
  
}); // end ready



