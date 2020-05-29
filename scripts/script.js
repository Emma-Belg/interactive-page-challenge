
onload="visitorsCounter()";


document.getElementById("visitorsCounter").addEventListener("load", visitorsCounter);

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

function disableFormSend() {
    //
    //https://blog.wplauncher.com/javascript-isset-equivalent/
    //
    if(typeof variable_name !== 'undefined' && typeof variable_name !== 'undefined' && typeof variable_name !== 'undefined'){
        document.getElementById("myBtn").disabled = false;
    }
    else{
        document.getElementById("myBtn").disabled = true;
    }

}

//https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript
function imageSlider() {
    let selectedImg = document.getElementById('selected_img');
    let images = document.getElementById('image_list').getElementsByTagName('li');
    for (let i = 0; i < images.length; i++)
    {
        images[i].addEventListener('click', activateImage);
    }function activateImage()
    {
        selectedImg.innerHTML = this.innerHTML;
    }
}

//image carousel
(function (doc) {
    let itemClassName = "carousel__photo";
    let items = d.getElementsByClassName(itemClassName);
    let totalItems = items.length;
    let slide = 0;
    let moving = true;

    // Set classes
    function setInitialClasses() {
        // Targets the previous, current, and next items
        // This assumes there are at least three items.  items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }// Set event listeners
    function setEventListeners() {
        var next = d.getElementsByClassName('carousel__button--next')[0],
            prev = d.getElementsByClassName('carousel__button--prev')[0];  next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }


    // Next navigation handler
    function moveNext() {  // Check if moving
        if (!moving) {    // If it's the last slide, reset to 0, else +1
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }    // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }// Previous navigation handler
    function movePrev() {  // Check if moving
        if (!moving) {    // If it's the first slide, set as the last slide, else -1
            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }

            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    
})(document);




