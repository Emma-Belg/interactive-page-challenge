let startNumber = 0;
const totalVisitors = 50000;
let totalGoals = 20;
let totalFouls = 50

function counter(endNumber, id) {
    document.getElementById(id).innerHTML = startNumber;

    const countUp = (count) => {
        document.getElementById(id).innerHTML = count

        if(count < endNumber) {
            setTimeout(() => countUp(count + 1), 600)
        }
        return count
    }
    document.getElementById(id).innerHTML = countUp(1);

    document.getElementById(id).addEventListener("load", counter);
    //document.querySelector('#resetBtn').addEventListener('click', reset)
}
counter(totalVisitors, "visitors");
counter(totalGoals, "goals");
counter(totalFouls, "faulths");

function disableFormSend() {
    //
    //https://blog.wplauncher.com/javascript-isset-equivalent/
    //
    let f = document.forms["form"].elements;
    let cansubmit = true;

    if(typeof document.getElementById('firstname') !== 'undefined' && typeof document.getElementById('lastname') !== 'undefined' && typeof document.getElementById('e-mail') !== 'undefined'){
        document.getElementById("submit").disabled = false;
    }
    else{
        document.getElementById("submit").disabled = true;
    }
}
disableFormSend();

function getElements() {
    document.getElementById('home');
    document.getElementById('practical');
    document.getElementById('contact');
}

function tabThrough(id) {
    if(document.getElementById(id).addEventListener("click", getElements))
    {
        document.getElementById(id).className="tab-pane fade show active";
    } else {
        document.getElementById(id).className="tab-pane fade hide d-none";
    }
}
function tabContact() {
    if(document.getElementById('contact').addEventListener("click", getElements))
    {
        //document.getElementById('contact').className="tab-pane fade show active";
        document.getElementById("contact").classList.remove('hide');
        document.getElementById("contact").classList.remove('d-none');
    } else {
        //document.getElementById('contact').className="tab-pane fade hide d-none";
        document.getElementById("contact").classList.add('show');
        document.getElementById("contact").classList.add('active');
    }
}

//document.getElementById('home').addEventListener("click", tabThrough('home'));
    document.querySelector('#practical').addEventListener('click',
        function(){console.log("HELLOOOOOO")}, true);
document.getElementById("button").addEventListener("click", function(){
    console.log("HELLOOOOOO")});
//document.getElementById('contact').addEventListener("click", tabContact);

document.getElementById("contact").addEventListener("click", contactTab);

function contactTab() {
    //I don't know why it doesnt remove
    document.getElementById("contact").classList.remove('hide');
    document.getElementById("contact").classList.remove('d-none');
    document.getElementById("contact").classList.add('show');
    document.getElementById("contact").classList.add('active');


}