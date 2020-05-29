
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
    let images = document.getElementById('image_list').getElementsByTagName('li');for (i = 0; i < images.length; i++)
    {
        images[i].addEventListener('click', activateImage);
    }function activateImage()
    {
        selectedImg.innerHTML = this.innerHTML;
    }
}




