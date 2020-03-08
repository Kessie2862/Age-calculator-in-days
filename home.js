function clickMe() {
    let currYear = 2020;
    let daysInYear = 365;
    let birthYear = prompt('Which year were you born?');
    let ageInYears = (currYear - birthYear) * daysInYear;
    let answer = document.createTextNode("You're " + ageInYears + ' days old');
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'clickMe');
    h1.appendChild(answer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('clickMe').remove();
}