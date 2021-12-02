'use strict';
function getJson(url) {
    return fetch(url)
        .then(function (resp) {
            return resp.json();
        })
        .catch(function (err) {
            console.error(err);
        });
}

document.addEventListener(
    'DOMContentLoaded',
    async function () {
        const promise1 = getJson('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json')
        const promise2 = getJson('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json')
        const tweets = (await Promise.all([promise1, promise2])).flat();

        console.log('Le tableau de tweet', tweets.flat());

        // ### Projet Touitter ###

        // [0] observer la structure de donnée des tweets dans la console de votre navigateur

        // [1] créer et ajouter un <button> "bouton" qui quand on clique dessus affiche 'click' dans la console.
        // Ne pas oublier de donner un textContent au bouton
        function createButton() {
            const buttonDisplayClick = document.createElement("button");
            buttonDisplayClick.textContent = "Fr";
            buttonDisplayClick.addEventListener(
                "click",
                () => {
                    if (!idFr) {
                        idFr = true;
                        buttonDisplayClick.textContent = "Tous";
                        const arrayFilter = tweets.filter(item => item.lang === "fr");
                        const filteredOL = displayTweetList(arrayFilter)
                        displayedOL.replaceWith(filteredOL);
                        displayedOL = filteredOL;

                    } else {
                        idFr = false;
                        buttonDisplayClick.textContent = "Fr";
                        const allOl = displayTweetList(tweets);
                        displayedOL.replaceWith(allOl);
                        displayedOL = allOl;

                    } //endElse
                } // listener
            ) // eventListener

            return buttonDisplayClick;
        }

        document.body.append(createButton());

        // [2] créer une fonction, qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet
        function createLi(tweet) {
            const theLiTweet = document.createElement("li");
            // Auteur
            if (tweet.user.profile_image_url_https){
                const image = document.createElement("img");
                image.src = tweet.user.profile_image_url_https;
                theLiTweet.append(image)
            }
            const autor = document.createElement("a");
            autor.textContent = tweet.user.name;
            theLiTweet.append(autor)
            const autorReal = document.createElement("span");
            autorReal.textContent = "@"+tweet.user.screen_name;
            theLiTweet.append(autorReal)

            // Content
            const content = document.createElement("p");
            content.textContent = tweet.full_text;
            theLiTweet.append(content)

            // Favoris
            theLiTweet.append(buttonFav())

            return theLiTweet;
        }

        // [3] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [2]
        function createOlList() {
            const olList = document.createElement("ol");
            document.body.append(olList)
            return olList;
        }
/*
        const displayedOL = createOlList();
        tweets.forEach((tweet) => {
            displayedOL.append(createLi(tweet))
        })
*/
        // [4] créer une fonction checkFr qui pour un tweet en entrée renvoie vrai ou faux selon si la langue est 'fr'
        function checkFr(tweet) {
            return tweet.lang === "fr"
        }

        // [X5] modifier "bouton", et utiliser checkFr au clic du bouton pour afficher dans la console la liste des
        // tweets français

        // [6] modifier "bouton" pour que quand on clique dessus,
        //  X- crée un nouveau <ol> avec seulement les tweets français
        //  X- remplace le <ol> existant avec le nouvel <ol>, en utilisant .replaceWith()

        // [X7] créer une variable booléenne isFr, et l'initialiser à false
        let idFr = false;
        // [X8] inverser la valeur du booléen au clic sur "bouton"

        // X[9] modifier "bouton" pour pouvoir réafficher tous les tweets quand on reclique dessus
        //  XIl faut utiliser isFr.

        // [X10] changer l'intitulé de "bouton" de filtre en fonction de isFr

        /* [11] créer une fonction, qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
        et l'utiliser à [3], [6], [9] */

        function displayTweetList(myArray){
            const olList = document.createElement("ol");
            myArray.forEach((items)=>{
                olList.append(createLi(items))
            })
            return olList;
        }
        let displayedOL = displayTweetList(tweets);

        document.body.append(displayedOL);

        /* [12] créer une fonction qui crée et renvoie le bouton de filtre.
          Cette fonction doit contenir toute la logique liée au filtre.
          Utiliser cette fonction pour remplacer le code de création du bouton de filtre.
        */

        // ### BONUS: LOCALSTORAGE ###
        // [X1] Rajouter un bouton "fav" à chaque li

        /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
          + et stocker l'ensemble des id_str fav dans le localStorage */
        function buttonFav(){
            const fav = document.createElement("button");
            fav.classList.add("favoris")
            fav.addEventListener(
                "click",
                () => {
                    fav.classList.toggle("active");
                    const parent = fav.parentElement;
                    parent.classList.toggle("active")
                }
            )
            return fav;
        }
        // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
    },
    {once: true},
);
