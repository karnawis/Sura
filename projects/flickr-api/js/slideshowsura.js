
/*
 *  Project: Slideshow by Sura
 *  Description: Basic slider
 *  Author: Sura Karnawi
 *  License: open source
 */

;(function ( $, window, document, undefined ) {

    var pluginName = "SlideShowPlugin",
    // the name of using in .data()
        dataPlugin = "plugin_" + pluginName,
    // default options
        defaults = {
            pagination: true,
            containerClass: '.slideshow',
            paginationList: '.pagination li',
            showNum: 0,
            previousBtn : '.slideshow_prev_item',
			nextBtn : '.slideshow_next_item',
			autoPlay: true,
			duration: '5000',
			width: '500px',
			height: '500px',
			transitionType:'none',
        };




    var privateMethod = function() {

    };

    // The actual plugin constructor
    var Plugin = function ( element ) {
        /*
         * Plugin instantiation
         */
        this.options = $.extend( {}, defaults );

    };

    var self;

	var currentIndex;
	var previousIndex;
	var nextIndex;

    Plugin.prototype = {

        init: function ( options ) {

            // this object as self


     		self = this;

     		// extend options ( http://api.jquery.com/jQuery.extend/ )
            $.extend( this.options, options );

            /*
             * Place initialization logic here
             */

			//Setting a variable container instead of a class for
        	this.containerClass = this.element.find($(this.options.containerClass));

			if(typeof this.options.containerClass === "undefined"){
				this.containerClass = this.element.find($('.slideshow'));
				console.log($(this.options.containerClass));
			} else {
				this.containerClass = this.element.find($(this.options.containerClass));
				console.log($(this.options.containerClass));
			}


			//Width and Height
            $('.slideshow').css( 'width', this.options.width );
            $('.slideshow').css( 'height', this.options.height );


            // Show
			this.showNum = this.options.showNum;

			// Slides
			this.slides = this.element.find('li');
			this.element.find('ul').addClass('slides');
			//this.element.find('ol').addClass('slides');
			this.slides = this.element.find('li');
			this.slideIndex = 0;
			this.totalSlides = $( this.slides ).size();

			// First and last Slides
			this.first = this.slides.eq( 0 );
			this.firstIndex = 0;
			//add class active
			( this.first ).addClass("active");

			//Slides Indexing
			this.last = $( this.slides ).eq( $( this.slides ).size() - 1 );
			this.lastIndex = this.totalSlides -1;
			//this.updateSlideIndex(0);//Initiate slides with classes

			//Auto Play
			if(this.options.autoPlay === true ){ setInterval(this.timeIntervalDisplay,  this.options.duration); }

			// Previous and Next Buttons
			this.previousBtn = this.element.find( this.options.previousBtn  );
			this.nextBtn = this.element.find( this.options.nextBtn );

			//Pagination
			if( this.options.pagination == true ){
				this.pagination();
				this.paginationList = this.element.find( this.options.paginationList );
			}

			//Event handlers
			$( this.previousBtn ).on( 'click', this.nextSlide );
			$( this.nextBtn ).on( 'click', this.nextSlide );
			$( this.paginationList ).on( 'click', this.paginationListSlide );

        	//Transition
        	this.transitionType = this.options.transitionType;
			this.transitionSlides( );

        },


        //Update Slide Info
		updateSlideIndex: function ( index ) {

        	//var currentIndex = $('.slideshow').find('.active').index();
			var currentIndex = $($(this.options.containerClass)).find('.active').index();
			
			
			previousIndex = index -1;
			nextIndex =  index+1;

			if( index == self.lastIndex) {

				nextIndex = 0;

			} else {

        		nextIndex =  index+1;
        	}

			if( index == 0) {

				previousIndex = self.lastIndex;

			} else {

        		previousIndex = index -1;
        	}

			//Remove current class from all siblings
			//$('li.slideshow_item').siblings().removeClass('current');

			//Remove the active, previous, next classes from the current slide
			$('li.slideshow_item').eq( currentIndex ).removeClass('active');
			$('li.slideshow_item').siblings().removeClass('next');
			$('li.slideshow_item').siblings().removeClass('previous');

			//Adding active, previous, next classes to the new active slide
			$('li.slideshow_item').eq( index ).addClass('active');
			$('li.slideshow_item').eq( previousIndex ).addClass('previous');
			$('li.slideshow_item').eq( nextIndex ).addClass('next');

			//Update Pagination bullets
			$('.pagination li').siblings().removeClass('active');
			$('.pagination li').eq( index ).addClass('active');

			//Show and hide
			//$('li.slideshow_item').eq( currentIndex ).hide();
			//$('li.slideshow_item').eq( index ).show();

        },


		//passing the time to rotate between slides
        timeIntervalDisplay: function ( ) {

        	var currentIndex = $('.slideshow').find('.active').index();

        	if( currentIndex == self.lastIndex) {

				var newIndex = 0;

			} else {

        		var newIndex = currentIndex +1;
        	}

			self.updateSlideIndex( newIndex );
        },

        //Pagination
       pagination: function ( ) {

        	var size = $( this.slides ).size();

			$(".slideshow").append("<ul class='pagination'></ul>");

        	for(var i=0; i < size; i++) {
        		$(".pagination").append("<li class='pagination-list'><a href='#'>"+i+"</a></li>");
        	}

        	//Add a class active to the first element
        	$('.pagination li').eq(0).addClass('active');

        },

        //Selecting the element in pagination that select a slide
        paginationListSlide: function ( event ) {

        	event.preventDefault();

			$('.pagination li').siblings().removeClass('active');

			$( this ).addClass( 'active' );

			var currentIndex = $('.pagination').find('.active').index();

			self.updateSlideIndex( currentIndex );
        },

        //Next button
        nextSlide: function ( event ) {

        	event.preventDefault();

        	var currentIndex = $('.slideshow').find('.active').index();

        	if( currentIndex == self.lastIndex) {

				var newIndex = 0;

			} else {

        		var newIndex = currentIndex +1;
        	}

			self.updateSlideIndex( newIndex );
        },

        //Previous Slide
        previousSlide: function ( event ) {

    		event.preventDefault();

        	var currentIndex = $('.slideshow').find('.active').index();


        	if( currentIndex == 0) {

				var newIndex = self.lastIndex;

			} else {

        		var newIndex = currentIndex -1;
        	}

			self.updateSlideIndex( newIndex );
        },

		//Transitions
        transitionSlides: function ( ) {

		 if(self.transitionType === 'none'){
		 	//do nothing

		 } else if (self.transitionType === 'opacity') {

		 		$('.slideshow_item').addClass('opacity');

		 } else if (self.transitionType === 'rotate') {

		 		$('.slideshow_item').addClass('rotate');

		 } else if (self.transitionType === 'slide'){

		 		$('.slideshow_item').addClass('slide');

		 		//previous

		 		// transform: 'translate(' + (-100 * (current - 1)) + '%, 0)',
           		 //WebkitTransform: 'translate(' + (-100 * (current - 1)) + '%, 0)',

		 } else {
		 		//do nothing
		 }

		},


        destroy: function () {
            // unset Plugin data instance
           this.element.data( dataPlugin, null );
        },

		// public get method
		// href: function () {
		//   return this.element.attr( 'href' );
        //},
    }

    /*
     * Plugin wrapper, preventing against multiple instantiations and
     * allowing any public function to be called via the jQuery plugin,
     * e.g. $(element).pluginName('functionName', arg1, arg2, ...)
     */
    $.fn[ pluginName ] = function ( arg ) {

        var args, instance;

        // only allow the plugin to be instantiated once
        if (!( this.data( dataPlugin ) instanceof Plugin )) {

            // if no instance, create one
            this.data( dataPlugin, new Plugin( this ) );
        }

        instance = this.data( dataPlugin );

        instance.element = this;

        // Is the first parameter an object (arg), or was omitted,
        // call Plugin.init( arg )
        if (typeof arg === 'undefined' || typeof arg === 'object') {

            if ( typeof instance['init'] === 'function' ) {
                instance.init( arg );
            }

        // checks that the requested public method exists
        } else if ( typeof arg === 'string' && typeof instance[arg] === 'function' ) {

            // copy arguments & remove function name
            args = Array.prototype.slice.call( arguments, 1 );

            // call the method
            return instance[arg].apply( instance, args );

        } else {

            $.error('Method ' + arg + ' does not exist on jQuery.' + pluginName);

        }
    };

}(jQuery, window, document));


/*
Questions:
why containerClass won't work with timeInterval function? self, this?
*/