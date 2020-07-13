const name = document.getElementById('fname');
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

const printToDOM = (name, burntKcal) => {
    output.innerHTML = ''
    const pTag = document.createElement('p');
    pTag.innerHTML = `Proficiat ${name}, je hebt ${Math.round(burntKcal)} kcal verbrand met je activiteit!`
    output.appendChild(pTag);
}

submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();  
    checkActivity();

    let metParMinute = calculateMet();
    burntKcal = metParMinute * parseInt(activityTime.value);

    printToDOM(name.value, burntKcal);
})


