
/*//onload="visitorsCounter()";


//document.getElementById("visitorsCounter").addEventListener("load", visitorsCounter);

function visitorsCounter() {
    document.getElementById("demo").innerHTML = "Iframe is loaded.";

    let startNumber = 0;
    const endNumber = 50000;

    //https://codepen.io/vajkri/pen/VJKgRa
    let startNr = 0
    const endNr = 20

    document.querySelector('h1').innerHTML = startNr

    const countUp = (count) => {
        document.querySelector('h1').innerHTML = count

        if(count < endNr) {
            setTimeout(() => countUp(count + 1), 60)
        }
    }

    const reset = () => {
        startNr = 0
        document.querySelector('h1').innerHTML = startNr
    }

    document.querySelector('#countBtn').addEventListener('click', () => countUp(startNr))
    document.querySelector('#resetBtn').addEventListener('click', reset)
}

 */

function disableFormSend() {
    //
    //https://blog.wplauncher.com/javascript-isset-equivalent/
    //
    if(typeof document.getElementById('firstname') !== 'undefined' && typeof document.getElementById('lastname') !== 'undefined' && typeof document.getElementById('e-mail') !== 'undefined'){
        document.getElementById("submit").disabled = false;
    }
    else{
        document.getElementById("submit").disabled = true;
    }
}
disableFormSend();

//https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript

let carouselImgs = document.querySelectorAll(".carousel");
let arrowRight =document.querySelector(".carousel__button--prev");
let arrowLeft =  document.querySelector(".carousel__button--next");
let current = 0;

function imageSlider() {
//hide all images
    function reset() {
        for(let i  = 0; i< carouselImgs.length;i++){
            carouselImgs[i].style.display="none"
        }
    }

//call the reset, and only show first one
    function startSlide() {
        //first you hide them all
        reset();
        //then, show the first image
        carouselImgs[0].style.display = 'block';
    }
    startSlide();

//show prev
    function  slideLeft() {
        reset();
        carouselImgs[current -1].style.display ="block";
        current --;
    }
//show next
    function  slideRight() {
        reset();
        carouselImgs[current +1].style.display ="block";
        current ++;
    }

    arrowLeft.addEventListener("click", function () {
        if(current === 0){
            current =  carouselImgs.length;
        }
        slideLeft();
    });

    arrowRight.addEventListener("click", function () {
        if(current === carouselImgs.length -1){
            current = -1;
        }
        slideRight();
    });
}
imageSlider();

//image carousel
/*!(function(d){
    // Variables to target our base class, get carousel items,
    // count how many carousel items there are set the slide to
    // 0 (which is the number that tells us the frame we're on), and
    // set motion to true which disables interactivity.
    var itemClassName = "carousel";
    items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true;

    // To initialise the carousel we'll want to update the DOM with our own classes
    function setInitialClasses() {

        // Target the last, initial, and next items and give them the relevant class.
        // This assumes there are three or more items.
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    // Set click events to navigation buttons
    function setEventListeners() {
        var next = d.getElementsByClassName('carousel__button--next')[0],
            prev = d.getElementsByClassName('carousel__button--prev')[0];

        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
/!*    function disableInteraction() {
        moving = true;

        setTimeout(function(){
            moving = false
        }, 500);
    }*!/

    function moveCarouselTo(slide) {

        // Check if carousel is moving, if not, allow interaction
        if(!moving) {

            // temporarily disable interactivity
            disableInteraction();

            // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;

            // Test if carousel has more than three items
            if ((totalItems - 1) > 3) {

                // Checks if the new potential slide is out of bounds and sets slide numbers
                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)){
                    oldNext = 0;
                }

                // Check if current slide is at the beginning or end and sets slide numbers
                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems -1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }

                // Now we've worked out where we are and where we're going,
                // by adding and removing classes, we'll be triggering the carousel's transitions.
                // Based on the current slide, reset to default classes.
                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;

                // Add the new classes
                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
        }
    }

    // Next navigation handler
    function moveNext() {
        if (!moving) {
            // If it's the last slide, reset to 0, else +1
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }
            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    // Previous navigation handler
    function movePrev() {
        if (!moving) {
            // If it's the first slide, set as the last slide, else -1
            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }
            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }
    // Initialise carousel
    function initCarousel() {
        setInitialClasses();
        setEventListeners();
        // Set moving to false now that the carousel is ready
        moving = false;
    }

    initCarousel();
}(document));*/






