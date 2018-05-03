
// can be called a factory function
//I want to make it all self contained I will then call the function on the global scope while 

let slideshow = function(time, selector) {

	
	// find the element we're going to build the slideshow inside
	let $slideshowContainer = document.querySelector(selector);
	let $slides = $slideshowContainer.querySelectorAll(".slide");
	let currentSlideNumber = 0;
	let intervalID;

	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector)
		return false
	}

	let next = function() {
		//instead of doing the document you can be more specific by replacing the document with the more specific item
		let $active = $slideshowContainer.querySelector('.active');
		//you can also do it like this but it would be more work for the browser
		//let $active = document.querySelector(selector +' .active')
		//remove .active from whatever slide currently has it

		if ($active) $active.classList.remove('active');

		currentSlideNumber++;
		//check to make sure currentSlideNumber didn't exceed number of current slides
		if (currentSlideNumber === $slides.length) {
			currentSlideNumber = 0;
		}

		//add .active to slide referenced by currentSlideNumber
		
		$slides[currentSlideNumber].classList.add('active');
		//another way to do it!
		//$slideshowContainer.children[currentSlideNumber].classList.add('active')

	}

		let prev = function () {
			let $active = $slideshowContainer.querySelector('.active');

			if ($active) $active.classList.remove('active');

			currentSlideNumber--;

			if (currentSlideNumber < 0) {
				currentSlideNumber = $slides.length - 1;
			}

		//add .active to slide referenced by currentSlideNumber
		
		$slides[currentSlideNumber].classList.add('active');
	}

	let jump = function (slideNum) {
		let $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');
		currentSlideNumber = slideNum;
		$slides[ currentSlideNumber ].classList.add("active")
    }

	let stop = function () {
		clearInterval(intervalID)
	}

	let start = function (){
		stop()
	//setInterval is a build in thing that you give the parameter of a function and something we are giving it the function name and then the parameter of time
		intervalID = setInterval(next, time);
	}
	
	start();

	return {
		// publicly accessible stuff goes here
		next: next,
		stop: stop,
		start: start,
		prev: prev,
		jump: jump
	}

}



//so what we're doing is creating something like .play or .innerhtml it has something already built into the code. We're making things like .play outselves so we can give that to whatever coder is using this after and they can use it. They don't care how it works. They just care that they can use it. It allows developers to trust developers at the next level deeper.

//The trust is how the sites are built. THATS OOP!!!! Object oriented programing!

//so the things that we're making can be used as an object. 

//SO I think I'm still confused on how the function is becoming an object. I see that we're returning the function as an object item now and it just becomes an object that can be called
//############################################

	//setInterval is a build in thing that you give the parameter of a function and somehting we are giving it the function name and then the parameter of time
//setInterval for every 3 seconds 
//remove .active from whichever one has it
//add .active to the current slide that we will define in the variable. current slide num
//we'll put them in an array

//so make current slide number go up by one ++
//and then active to slide one.
//put a little extra bit to say that it won't go past 3. If current slide Num is too high( more than 3) reset back to 0, current slide num
//then after reseting add.active to slide


//if you push the letters through to the end and then also set each to a button that is assigned to the slide and then have a button to start doing the movement







//If you do everything on the global scope then there are just a ton of variables hanging out
//we're going to start to put the items inside the scope that we are in. 
//scoping out queries for elements. so we can call the element more specifically
//you don't want such generic names in the outside scope and 


//OOP l
















