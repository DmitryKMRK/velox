$(function() {
	$('.header__burger').on('click', function() {
		$('.header__nav').slideToggle();
		$(this).toggleClass('header__burger--open');
	});
});

//Scroll
$(function() {
	$('.footer__up-btn').on('click', function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за N мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

//Slider-arrows
function slider(elementClass, prevBtnClass, nextBtnClass, activeElementClass, controlClass, activeControlClass) {
	var sliderItem = document.querySelectorAll('.' + elementClass);
	var prevArrow = document.querySelector('.' + prevBtnClass);
	var nextArrow = document.querySelector('.' + nextBtnClass);
	var firstSlide = sliderItem[0];
	var lastSlide = sliderItem[sliderItem.length - 1];
	var controlItem = document.querySelectorAll('.' + controlClass);
	var firstControl = controlItem[0];
	var lastControl = controlItem[controlItem.length - 1];

	nextArrow.addEventListener('click', function() {
		for(var i = 0; i < sliderItem.length; i++) {
			var currentSlide = sliderItem[i];
			var nextSlide = currentSlide.nextElementSibling;

			if(currentSlide.classList.contains(activeElementClass)) {
				currentSlide.classList.remove(activeElementClass);
        if(currentSlide == lastSlide) {
          firstSlide.classList.add(activeElementClass);
        } else {
          nextSlide.classList.add(activeElementClass);
        }
        break;
			}
		}

		for(var i = 0; i < controlItem.length; i++) {
			var currentControl = controlItem[i];
			var nextControl = currentControl.nextElementSibling;

			if(currentControl.classList.contains(activeControlClass)) {
				currentControl.classList.remove(activeControlClass);
        if(currentControl == lastControl) {
          firstControl.classList.add(activeControlClass);
        } else {
          nextControl.classList.add(activeControlClass);
        }
        break;
			}
		}
	});

	prevArrow.addEventListener('click', function() {
		for(var i = 0; i < sliderItem.length; i++) {
			var currentSlide = sliderItem[i];
			var prevSlide = currentSlide.previousElementSibling;

			if(currentSlide.classList.contains(activeElementClass)) {
				currentSlide.classList.remove(activeElementClass);
        if(currentSlide == firstSlide) {
          lastSlide.classList.add(activeElementClass);
        } else {
          prevSlide.classList.add(activeElementClass);
        }
        break;
			}
		}

		for(var i = 0; i < controlItem.length; i++) {
			var currentControl = controlItem[i];
			var prevControl = currentControl.previousElementSibling;

			if(currentControl.classList.contains(activeControlClass)) {
				currentControl.classList.remove(activeControlClass);
        if(currentControl == firstControl) {
          lastControl.classList.add(activeControlClass);
        } else {
          prevControl.classList.add(activeControlClass);
        }
        break;
			}
		}
	});
}

slider('reviews__slide', 'reviews__slider-arrow--left', 'reviews__slider-arrow--right', 'reviews__slide--active', 'reviews__slider-control', 'reviews__slider-control--active');

//Slider-controls
function sliderControls(controlClass, slideClass, activeControlClass, activeSlideClass) {
	var controls = document.querySelectorAll('.' + controlClass);
	var slides = document.querySelectorAll('.' + slideClass);
	var activeControl = document.getElementsByClassName(activeControlClass);
	var activeSlide = document.getElementsByClassName(activeSlideClass);

	for (var i = 0; i < controls.length; i++) {
	  controls[i].addEventListener('click', function(x) {
	    return function() {
	      activeSlide[0].classList.remove(activeSlideClass);
	      activeControl[0].classList.remove(activeControlClass);
	      controls[x].classList.add(activeControlClass);
	      slides[x].classList.add(activeSlideClass);
	    }
	  }(i));
	}
}

sliderControls('reviews__slider-control', 'reviews__slide', 'reviews__slider-control--active', 'reviews__slide--active');