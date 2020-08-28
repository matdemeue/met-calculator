const weight = document.getElementById('gewicht');
const activity = document.getElementsByName('sport');
const activityTime = document.getElementById('duur');
const submitButton = document.getElementById('button');

const output = document.querySelector('.output');

let metValue;
let burntKcal;

const checkActivity = () => {
    for (let i = 0; i < activity.length; i++) {
        if (activity[i].checked) {

            // do whatever you want with the checked radio
            switch (activity[i].value) {
                case "fietsenRustig":
                    metValue = 4;
                    break;
                case "fietsenLicht":
                    metValue = 6.8;
                    break;
                case "fietsenStevig":
                    metValue = 8;
                    break;
                case "wandelenRustig":
                    metValue = 3.5;
                    break;
                case "wandelenStevig":
                    metValue = 4.3;
                    break;
                case "tennisAlgemeen":
                    metValue = 7.3;
                    break;
                case "zwemmenZwaar":
                    metValue = 9.8;
                    break;
                case "hardlopenAlgemeen":
                    metValue = 8;
                    break;
            }

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

const calculateMet = () => {
    let metCalculated;

    metCalculated = (metValue * 3.5 * parseInt(weight.value)) / 200;
    console.log(metCalculated);
    return metCalculated;
}

const printToDOM = (burntKcal) => {
    // output.innerHTML = ''
    // const pTag = document.createElement('p');
    // pTag.innerHTML = `Proficiat, je hebt ${Math.round(burntKcal)} kcal verbrand met je activiteit!`
    // output.appendChild(pTag);

    const text = `Proficiat, je hebt ${Math.round(burntKcal)} kcal verbrand met je activiteit!`;
    window.alert(text);
}

submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    checkActivity();

    let metParMinute = calculateMet();
    burntKcal = metParMinute * parseInt(activityTime.value);

    console.log(burntKcal);

    if (burntKcal) {
        printToDOM(burntKcal);
    } else {
        window.alert("Gelieve eerst de velden in te vullen!")
    }
})