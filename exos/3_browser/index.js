'use strict';

// # 4_Browser

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la class 'color'
    - L'ajouter à l'élément de la page qui a l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Chaque div doit afficher en textContent le texte de sa couleur, ainsi que la position de la couleur dans le tableau  (1. white)
    - Au click, chaque div doit changer la couleur du background du body
*/

const colors = [
    'white',
    'blue',
    'red',
    'green',
    'black',
    'grey',
    'orange',
    'purple',
];
colors.forEach((item, i) => {
    const myDiv = document.createElement("div");
    myDiv.classList.add('color');
    myDiv.style.backgroundColor = item;
    myDiv.textContent = i + '.' + item;
    document.getElementById('exo1').append(myDiv)
    //console.log(myDiv);
    myDiv.addEventListener(
        "click",
        function () {
            document.body.style.backgroundColor = item;
        }
    )
});


// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa largeur
    en fonction de la position en Y de la souris à l'écran (event.clientY)
*/
const mySectionExo2 = document.createElement("section");
mySectionExo2.id = "exo2";
document.body.append(mySectionExo2);
const myDiv2 = document.createElement('div');
myDiv2.classList.add('myDiv2');
mySectionExo2.append(myDiv2);
myDiv2.addEventListener(
    "mousemove",
    function () {
        const mousePosition = event.clientY;
        this.style.width = mousePosition + 'px';
    }
)
// -------------------------------

/* Exercice 3: Timer
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Y ajouter deux divs: une avec la classe 'nb', et l'autre avec la classe 'dots'
    - Pour chaque seconde écoulée depuis le chargement de la page, (utiliser setInterval())
      - afficher le nombre de points dans '.nb'
      - ajouter une div avec la classe 'dot' à l'élément '.dots'
    - Stocker dans le localstorage l'info du nb de points
    pour recharger la page avec le bon nombre de points dès le début
*/
const mySectionExo3 = document.createElement("section");
mySectionExo3.id = "exo3";
document.body.append(mySectionExo3);
const myDiv3 = document.createElement('div');
myDiv3.classList.add('nb');
mySectionExo3.append(myDiv3);
const myDiv4 = document.createElement('div');
myDiv4.classList.add('dots');
mySectionExo3.append(myDiv4);

let compteurLocalStorage = localStorage.getItem('compteur');
let compteur = 0;
if (compteurLocalStorage) {
    compteur = parseInt(localStorage.getItem('compteur'));
}
for (let i = 0; i <= compteur; i++){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    myDiv4.append(dot);
}
myDiv3.textContent = compteur;
const time = setInterval(function () {
        compteur += 1;
        myDiv3.textContent = compteur;
        localStorage.setItem('compteur', compteur)
        const dot = document.createElement('div');
        dot.classList.add('dot');
        myDiv4.append(dot);
    },
    1000
);
// -------------------------------

/* Exercice 4: Contrôle au clavier
    - Faire en sorte de changer la couleur du background du body quand on appuie sur 1, 2, 3...
    en fonction de la position des boutons de l'exo 1
    - Faire en sorte de remettre la page dans l'état initial (aucune section sauf exo1) lorsque l'on appuie sur CTRL-R (COMMAND-R)
    - Exécuter chacun des 3 premiers exercices lorsque la page est vide en appuyant sur ENTER
    - Faire en sorte de d'arrêter le timer quand on appuie sur S, et de le relancer en réappuyant
*/
let timerState = 'on';
document.addEventListener(
    'keydown',
    function () {
        document.body.style.backgroundColor = colors[event.key];
        console.log(event.key);
        if (event.key === 'S') {
            if (timerState === 'on') {
                clearInterval(time);
                timerState = 'off'
            } else {
                //setInterval(time);
                timerState = 'on'
            }

        }
    }
)
//-----_____-----_____----- Correction

/*
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const isCtrl = event.metaKey;

    if (key >= 1 && key < colors.length) {
        document.body.style.background = colors[event.key - 1];
    } else if (isCtrl && key === 'r') {
        event.preventDefault();
        exo1.remove();
        exo2.remove();
        exo3.remove();
        exoBonus.remove();
    } else if (key === 'Enter') {
        document.body.append(exo1);
        document.body.append(exo2);
        document.body.append(exo3);
        document.body.append(exoBonus);
    } else if (key === 's') {
        if (interval) {
            interval = clearInterval(interval);
        } else {
            interval = startCounting();
        }
    }
});
*/
// -------------------------------

/* Exercice BONUS: Harry Potter
    - Créer une <section> avec l'id 'exoBonus', et l'ajouter au body
    - Créer une <div> pour Harry, avec la classe 'character' et l'ajouter à la 3e section
    - La div 'character' a pour enfant une div avec la classe 'name' avec le nom en textContent
    et une img avec le src correspondant
    - Ajouter un listener qui, au click, choisit un personnage au hasard
    puis remplace la <div> cliquée par une nouvelle <div>
    créée de zéro de la même manière, avec les infos du nouveau personnage
    - Enregistrer le personnage affiché dans le localstorage pour le recharger au démarrage
*/

const characters = [
    {
        name: 'Harry',
        src: 'static/Harry_Potter_character_poster.jpeg',
    },
    {
        name: 'Hermione',
        src: 'static/Hermione_Granger_poster.jpeg',
    },
    {
        name: 'Ron',
        src: 'static/Ron_Weasley_poster.jpeg',
    },
    {
        name: 'Sirius',
        src: 'static/Sirius_Black.jpeg',
    },
    {
        name: 'Rubeus',
        src: 'static/RubeusHagrid.jpeg',
    },
    {
        name: 'Albus',
        src: 'static/Dumbledore_and_Elder_Wand.jpeg',
    },
];
