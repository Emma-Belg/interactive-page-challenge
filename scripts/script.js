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


