const lenght = document.getElementById('lenght');
const lenght2 = document.getElementById('lenght2');
const numbers = document.getElementById('numbers');
const specials = document.getElementById('specials');
const uppercases = document.getElementById('uppercases');
const submit = document.getElementById('submit');
const resultat = document.getElementById('resultat');
lenght.value = 8;
function getNumber(){
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}
function getLetter(){
    const letters = ['abcdefghijklmnopqrstuvwxyz'];
    const position = getNumber(letters[0].length);
    const letter = letters[0][position];
    return letter
}
function getLetterMAJ(){
    const lettersMaj = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const position = getNumber(lettersMaj[0].length);
    const letterMaj = lettersMaj[0][position];
    return letterMaj
}
function getSpecial(){
    const specials = ['&é"(§è!çà)-@#$*€`£'];
    const position = getNumber(specials[0].length);
    const special = specials[0][position];
    return special
}
lenght.addEventListener('change', function (){
    lenght2.value = this.value;
})
lenght2.addEventListener('change', function (){
    lenght.value = this.value;
})
submit.addEventListener('click', function (){
    let password = '';

    for(let i = 0; i < lenght.value; i++){
        if (numbers.checked){
            password = password + getNumber();
            i++;
        }
        if (specials.checked){
            password = password + getSpecial();
            i++;
        }
        if (uppercases.checked){
            password = password + getLetterMAJ();
            i++;
        }
        password = password + getLetter();

    }
    resultat.classList.add('active')
    resultat.value = password;
    return password;
});

// HS Copier l'élément
resultat.addEventListener('click', function () {
    resultat.select();
    //resultat.execCommand('copy');
})

function copy() {
    var copyText = resultat;
    copyText.select();
    document.execCommand("copy");
}

resultat.addEventListener("click", copy);