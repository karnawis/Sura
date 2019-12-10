Flickr app guide
November 1st 2015
Sura Karnawi

According to the Design provided: 01_flicker.png and 01_flickr_rollover.png. and the task document that I receieved the task is to create an app that retrieves Flickr images when I search for a certain tag, The results should be searchable and pageable and will show as thumbnails. When I hover over a thumbnail the top slider will show a big image of that thumbnail. Please find attached the solution as a rar file. 
All the code was written by me including the slideshow plugin which I developed last year. However I have used some external resources for guidance and to be updated.

 
Notes:

HTML/Page structure
- I use html5, I used a section of photos and section of slider with id's to show the results, I put placeholders of thumbnail and slider just to show the page. An automated result will replace it when search is done
- I use html tag of form to input the tag. when searching for a tag input your tag in the search field and hit enter or press the button.
- Social tooltip is just a placeholder. I didn't integrate the social behaviour.
- I considered accessibility while I was developing, for example when the search results are retrieved each thumbnail and slider image has a title and alt text. 


CSS/Look and Feel
- CSS/CSS3 is used
- I use css reset, so it resets the default browser values.
- For typography I use the font famiy  Serif for the Heading, Sans Serif for paragraph and link button. 
- I tried to stay away from using images and use CSS instead, for example the slider navigation arrows are all css no image is used.


Javascript/Behaviour
- I used Javascript, jQuery, JSON, flickr API https://www.flickr.com/services/api/
- flickr api is used, JSON is used to parse the data that is returned from Flickr. You can see app.js for details I left comments to follow through
- I had faced a problem with displaying big flickr images, then I realized some of their links have longer characters than others.I worked around it with a conditional statment of calculating length then adding the image extension at the end. 
- Photo credit I used the data item Author as I find it the closest to be Photo Credit. 


Environment
- PHP xamp was running during development to give it a server end environment.


- Parsing
Unfortunately I didn't get to tackle the parsing part I found it challenging to tackle with the deadline I previously agreed on.


Plugin:
- I use Slideshow plugin to enable displaying big images of the search results, and being able to use the arrow to navigate. I used Slide Show by Sura which I created last year. It's open source as I used open source resources to create it and I like to give back to the community.


Testing/CROSS BROWSERS:
- I used cross browsers solutions, for example the image on the search submit button, I used absolute positioning to get same experience in all browsers
- I tested with all browsers firefox, Chrome, IE, Safari.

Thank you for your time

Sura Karnawi
www.sura.me