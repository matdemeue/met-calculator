var name = document.getElementsByName('fname');
var weight = document.getElementById('gewicht');
var activity = document.getElementsByName('sport');
var activityTime = document.getElementById('duur');
var submitButton = document.getElementById('button');

const output = document.querySelector('.output');

let metValue;
let burntKcal;

const checkActivity = () => {
    for (var i = 0; i < activity.length; i++) {
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

submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    checkActivity();
    calculateMet();

    let metParMinute = calculateMet();

    burntKcal = metParMinute * parseInt(activityTime.value);

    console.log(burntKcal);
    console.log()
})


