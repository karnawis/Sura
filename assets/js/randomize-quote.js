//Randomizing Quotes

	//Randomizing Quotes
	randomizeQuote();


	function randomizeQuote(){

	//var allQuotes = [[],[],[]];

	var quotes = new Array();

	quotes[0] = '"The Woman who Follows the Crowd Will Usually Go No Further than The Crowd. The Woman who Walks Alone is likely to Find Herself in Places No One Has Ever Been Before." ~Albert Einstein';

	quotes[1] = '"People will forget what you said. People will forget what you did. But people will never forget how you made them feel." ~ MAYA ANGELOU';

	quotes[2] = '"I&#8217;ve missed more than 9,000 shots in my career. Ive lost almost 300 games. Twenty-six times, I&#8217;ve been trusted to take the game-winning shot and missed. I&#8217;ve failed over and over and over again in my life. And that is why I succeed." ~MICHAEL JORDAN';

	quotes[3] = '"Courage is to tell the story of who you are with your whole heart." ~Dr. Brene Brown';

	quotes[4] = '"All our dreams can come true, if we have the courage to pursue them."~WALT DISNEY';

	quotes[5] = '"You make a living by what you get; you make a life by what you give." ~WINSTON CHURCHILL';

	quotes[6] = '"If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them." ~DAVID THOREAU';

	quotes[7] = '"There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them." ~DENIS WAITLEY';

	quotes[8] = '"The biggest adventure you can ever take is to live the life of your dreams." ~Oprah Winfrey';

	quotes[9] = '"Real integrity is doing the right thing, knowing that nobody&#39;s going to know whether you did it or not." ~Oprah Winfrey';

	quotes[10] = '&#34;Many of life&#39;s failures are experienced by people who did not realize how close they were to success when they gave up.&#34; &#126;THOMAS EDISON';

	quotes[11] = '&#34;I am always doing that which I cannot do, in order that I may learn how to do it.&#34; &#126;PABLO PICASSO';

	quotes[12] = '&#34;I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.&#34; &#126;MURIEL STRODE';

	quotes[13] = '&#34;Twenty years from now you will be more disappointed by the things that you didn&#39;t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.&#34;  &#126;H. JACKSON BROWN, JR.' ;

	quotes[14] = '&#34;You must be the change that you wish to see in the world.&#34; &#126;Mahatma Gandhi.';

	quotes[15] = '&#34;I know for sure that what we dwell on is who we become.&#34; &#126;OPRAH WINFREY';

	quotes[16] = '&#34;The man who removes a mountain begins by carrying away small stones.&#34; &#126;CHINESE PROVERB';

	quotes[17] = '&#34;Don &#39;t chase people. Be you, do your own thing and work hard. The right people who belong in your life will come to you and stay.&#34; &#126;Wu Tang';

	quotes[18] = '&#34;Always belive something wonderful is a bout to happen&#34; &#126;Louise Hay';

	quotes[19] = '&#34;The more you are motivated by Love, The more Fearless & Free your action will be.&#34; &#126;Dalai Lama';

	quotes[20] = '&#34; When you judge another, you do not define them, you define yourself. &#34; &#126;Wayne Dyer';

	quotes[21] = '&#34;Don&#39;t chase people. Be you, do your own thing and work hard. The right people who belong in your life will come to you and stay.&#34; &#126;Wu Tang';

	quotes[22] = '&#34;Be thankful for what you have; you&#39;ll end up having more. If you concentrate on what you don&#39;t have, you will never, ever have enough.&#34; &#126;Oprah';

	quotes[23] = '&#34;Ambition is an idol, on whose wings great minds are carried only to extreme; to be sublimely great or to be nothing.&#34; &#126;Shakti Gawain';

	quotes[24] = '&#34;Quality questions create a quality life. Successful people ask better questions, and as a result, they get better answers.&#34; &#126;TONY ROBINS';

	quotes[25] = '&#34;I don&#39;t know what my calling is, but I want to be here for a bigger reason. I strive to be like the greatest people who have ever lived.&#34; &#126;Will Smith';

	quotes[26] = '&#34;I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. &#34; &#126;Nelson Mandela ';

	quotes[27] = '&#34;Education is the most powerful which you can use to change the world. &#34; &#126;Nelson Mandela';

	quotes[28] = '&#34;If in our daily life we can smile, if we can be peaceful and happy, not only we, but everyone will profit from it. This is the most basic kind of peace work.&#34; &#126;Nhat Hanh';

	quotes[29] = '&#34; The lines in the maps are not in the ground, it makes a great point: these lines really don&#39;t exist. They&#39;re made up completely and we perpetuate in the illusion that somehow we&#39;re all different from each other and I think the world would be a much better place if someday we stop pretending that these lines exist and we concentrate in our similarities rather than in our differences.&#34; &#126;Yanni';

	quotes[30] = '&#34;Take small steps in the right direction. No matter how small your steps, keep moving forward towards your goal.&#34; &#126;Nick Vujicic';

	quotes[31] = '&#34Of all the forces that are exerted on us over our lifetime, at least for me, love has been the most powerful of all.&#34; &#126;Yanni';

	quotes[32] = '&#34Of Keep your face to the sunshine and you cannot see the shadow.&#34; &#126;Helen Keller';

	quote[33] = '&#34Of People don&#39;t buy what you do; they buy why you do it. And what you do simply proves what you believe .&#34; &#126;Simon Sinek';

	var rando = Math.floor(Math.random()*quotes.length);
	$("#quote").html(quotes[rando]);

	}
