# carousel-vanillajs

-----------------------------H-CAROUSEL-----------------------------------

A infinite and responsive carousel w/ vanilla JavaScript

By Henrique, L.

Using FontAwesome Icons (chevrons) and images from freepik.com for demonstration

Demonstration: https://apilogik.github.io/carousel-vanillajs/

Slide on:
- Automatic if mouse is out;
- Click or swipe (mouse);
- Touch and swipe (mobile)
- By clicking in the nav bullets

EXAMPLE:

------------------------HTML-----------------------------

  <div class="carousel">

      <div class="carousel-container carousel-desktop">
        <div class="slide-single" draggable="false">
          <img class="image-carousel" draggable="false" src="assets/media/slide01.webp">
        </div>
        <div class="slide-single" draggable="false">
          <img class="image-carousel" draggable="false" src="assets/media/slide02.webp">
        </div>
        <div class="slide-single" draggable="false">
          <img class="image-carousel" draggable="false" src="assets/media/slide03.webp">
        </div>
      </div>

      <div class="carousel-bullets"><!--JS--></div>
      <!--nav arrows-->
      <i class="arrows" aria-hidden="true" id="navprev"></i>
      <i class="arrows" aria-hidden="true" id="navnext"></i>

  </div>
  
------------------------CSS----------------------------

	  .carousel{
	    width: 100%;
	    position: relative;
	  }

	  .carousel-container{
	    width: 100%;
	    position: relative;
	    display: flex;
	    flex-wrap: nowrap;
	  }

	  .slide-single{
	    width: 100%;
	  }

	  img.image-carousel{
	    width: 100%;
	  }

	  .carousel-mobile{
	    display: none;
	  }

	  .carousel-bullets{
	    padding: 5px 0;
	    width: 100%;
	    text-align: center;
	  }

	  .bullet{
	    width: 8px;
	    height: 8px;
	    border-radius: 50%;
	    display: inline-block;
	    margin: 0 7px;
	    cursor: pointer;
	  }

	  .active{
	    background-color: black;
	  }

	  .arrows{
	    font-size: 40px;
	    cursor: pointer;
	    position: absolute;
	  }

	  #navnext {
	    right: 10px;
	    top: 40%;
	  }

	  #navprev {
	    left: 10px;
	    top: 40%;
	  }

------------------------MAIN JS-------------------------
  
	import { carouselBuilder } from '../../modules/hcarrousel.js'
	  /*......*/
	//create carousel object
	const carousel = {
		slidesContainer: choosedCarousel, //container - all slides
		allSlides: choosedCarousel.querySelectorAll('.slide-single'), //DOM object w/ each single slide
		bulletsContainer: document.querySelector('.carousel-bullets'), //navigation bullets container
		arrowLeft: document.querySelector('#navprev'),
		arrowRight: document.querySelector('#navnext'),
		speed: 500, //speed of animation (ms)
		interval: 5000 //interval between slides (ms)
	}
	//call
	carouselBuilder(carousel);
  
  
