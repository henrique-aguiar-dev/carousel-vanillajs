import { carouselBuilder } from '../../modules/hcarrousel.js'
import '../css/style.css'

const onLoad = () => {
	//Reload if width has changed
	const initialWidth = window.innerWidth

	const checkWidthChange = () => {
		let actualWidth = window.innerWidth
		actualWidth !== initialWidth ? setTimeout(() => location.reload(),0) : false
	}

	window.addEventListener('resize', checkWidthChange)

	//Select proper carousel - desktop or mobile
	const loadCarousel = () => {
		return window.innerWidth >= 420 ? document.querySelector('.carousel-desktop') : document.querySelector('.carousel-mobile')
	}

	const choosedCarousel = loadCarousel()

	//create carousel object
	const carousel = {
		slidesContainer: choosedCarousel, //container - all slides
		allSlides: choosedCarousel.querySelectorAll('.slide-single'), //DOM object w/ each single slide
		bulletsContainer: document.querySelector('.carousel-bullets'), //navigation bullets container
		arrowLeft: document.querySelector('#navprev'),
		arrowRight: document.querySelector('#navnext'),
		autoSlide: true,
		speed: 500, //speed of animation (ms)
		interval: 5000 //interval between slides (ms)
	}
	
	//On load functions
	carouselBuilder(carousel);
}

onLoad();
