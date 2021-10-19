// J'ai essayé de custom la date avec un prompt... mais ca fonctionne pas
//const customDate = window.prompt('Veuillez indiquer une date au format AAAA-MM-JJ');
const counterMs = document.getElementById('millis');
const counterS = document.getElementById('seconds');
const counterMin = document.getElementById('minutes');
const counterHour = document.getElementById('hours');
const counterDay = document.getElementById('days');
/*
if (customDate) {
    date = customData;
} else {
    date = '2023-02-09'
}
*/
setInterval(function(){
    const myDate = new Date('2022-02-09');
    const today = new Date();
    let timeDiff = myDate - today;
    if (timeDiff < 0){
        alert('La date est arrivée');
    }
    let timeMs = Math.floor((timeDiff % 1000));
    let timeS = Math.floor((timeDiff / 1000) % 60);
    let timeMin = Math.floor((timeDiff / (1000 * 60)) % 60);
    let timeHour = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    let timeDay = Math.floor((timeDiff / (1000 * 60 * 60 * 24)));
    if (timeS < 10){
        timeS = '0' + timeS;
    }
    if (timeMin < 10){
        timeMin = '0' + timeMin;
    }
    if (timeHour < 10){
        timeHour = '0' + timeHour;
    }
    counterMs.textContent = timeMs;
    counterS.textContent = timeS;
    counterMin.textContent = timeMin;
    counterHour.textContent = timeHour;
    counterDay.textContent = timeDay;
}, 1)