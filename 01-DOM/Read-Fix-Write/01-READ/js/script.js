//1-6
//Bekijk onderstaande methodes om (een) element(en) op te halen
//Onderzoek via de console wat ze terug geven
const pTags = document.getElementsByTagName(`p`);
console.log(1, pTags);

// Dit zorgt ervoor dat er een variabele gecreeerd wordt 
// genaamd pTags, hierin zet je dankzij de functie document.getElementsByTagName
// alles erin wat in de p tag zit.

const $search = document.getElementById(`search`);
console.log(2, $search);

// The getElementById() method returns the element that has the ID attribute with the specified value.

//This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate, or get info from, an element on your document.

//Returns null if no elements with the specified ID exists.

//An ID should be unique within a page. However, if more than one element with the specified ID exists, the getElementById() method returns the first element in the source code.

//Als ik dit ingeef, geeft hij mij de dingen uit het searchelement terug, nl 

{//<input type="text" id="search" placeholder="find episode"> */}


const divTagsByTagName = document.getElementsByTagName(`div`);
console.log(3, divTagsByTagName);

// geeft mij alle divs terug die er bestaan in deze html, ze zitten allemaal in 1 array.


const $divTagQuerySelector = document.querySelector(`div`);
console.log(4, $divTagQuerySelector);

// Geeft het eerste element in het document dat overeenkomt met de opgegeven selector, of groep van selectors, of null als er geen overeenkomsten zijn gevonden.
// Geeft mij de allereerste div terug die hij selecteert.

const divTagsquerySelectorAll = document.querySelectorAll(`div`);
console.log(5, divTagsquerySelectorAll);

// NodeList(6) [div.collapsible, div.bar1, div.bar2, div.bar3, div.collapsible-body, div.episode-short.row]
// Returns all div's selected

// The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

const $subtitle = document.querySelector(`.subtitle`);
console.log(6, $subtitle);

// Returns the first thing with subtitle in it.
// In this case the H2 class subtitle -col12>The on with the controle structures

//7
//Wat is het verschil in uitkomst van beide manieren om een element te selecteren?
const $button = document.querySelector(`header .button`);
console.log(`7a`, $button);

// -> const $button = document.querySelector(`header .button`);
// geeft deze uitkomst in console
VM68:2 7a <a hrefcol class=​"paper-btn button">​watch episode​</a>​
undefined
//  en selecteerd de watch episode 

const $main = document.querySelector(`header`);
console.log(`7b`, $main);
const $button2 = $main.querySelector(`.button`);
console.log(`7b`, $button2);

// dit selecteerd eerst de header, via de eerste queryselector header
// Het is beter om het samen te doen, nl header .button in dezelfde haakjes.
//  Anders kom ik in de problemen en krijg ik een error

//8-10
//Bekijk deze properties van het document object. Wat geven ze terug?
const links = document.links;
console.log(8, links);
// HTMLCollection(4) [a.nav-link, a.nav-link, a.nav-link, a.nav-link]
// Ze geven een array terug met 4 navigatielinks (van 0 tot 3)

const forms = document.forms;
console.log(9, forms);

//   Alle formulieren, nl 1 (de searchbar)

const title = document.title;
console.log(10, title);

// const title = document.title;
console.log(10, title);
VM1407:2 10 "BeCode Antwerpen"

// Het geeft de titel weer, namelijk in dit geval "BeCode Antwerpen"


//11-13
//Er is een belangrijk verschil tussen childNodes en children.
//Onderzoek de uitkomst en leg uit wat we hieronder doen.
const $episodes = document.querySelector(`.episode-list`);
console.log(`11a`, $episodes.childNodes);
console.log(`11b`, $episodes.firstChild);

// children is a property of an Element. Only Elements have children, and these children are all of type Element.
//  However .childNodes is a property of Node. .childNodes can contain any node. Of course .children is DOM4 so browser support is shaky,
//  however if you use the DOM-shim, your cross browser problems will go away!

//  Eigen woorden, children horen altijd bij een element zoals een div, p, alles is eigenlijk een element.
// childNodes zijn het eigendom van Node, 
// Node = A "node", in this context, is simply an HTML element. The "DOM" is a tree structure that represents the HTML of the website, and every HTML element is a "node". See Document Object Model (DOM). More specifically,
//  "Node" is an interface that is implemented by multiple other objects, including "document" and "element".

// Returns a node list of 11 list elements

console.log(`12a`, $episodes.children);
console.log(`12b`, $episodes.firstElementChild);
console.log(`12c`, $episodes.childElementCount);

console.log(`13a`, $episodes.firstElementChild.nextSibling);
console.log(`13b`, $episodes.firstElementChild.nextElementSibling);

// 11a gives me the nodelist
// 11b gives me text
// 12a gives me ...

//14
//Hier wissen we een element.
//Welk element precies? Hoe selecteren we dit?
console.log(14, $episodes.children[3].children[2].lastElementChild.remove());

// Hier verwijderen we het laatste child element, de laatste in de array, hier dus children[3]


//15
//Bekijk de 2 verschillende outputs in de console
//Waarom staat er geen 'Episode: '?
const $episode5 = $episodes.children[4];
console.log(`15a`, $episode5.textContent);
console.log(`15b`, $episode5.innerHTML);

//16
//Wat doen we hier?
//Krijgen we hetzelde resultaat via innerHTML?
const $viewersEP5 = $episode5.children[2].lastElementChild;
$viewersEP5.innerText = `5.33`;
// $episode5 is not defined at...altough it is defined!

//17
//Wat doen we hier?
//Krijgen we hetzelde resultaat via innerText?
const $viewers = $episodes.children[4].children[2].firstElementChild;
$viewers.innerHTML = `<a href="#">${$viewers.innerText}</a>`;

//18
console.log(`18a`, $search.hasAttribute(`type`));
console.log(`18b`, $search.getAttribute(`type`));
$search.setAttribute(`type`, `search`);
console.log(`18c`, $search.getAttribute(`type`));

//19
// Waarom zien we hier niet het correcte achtergrondkleur van de knop?
console.log(19, $button.style.backgroundColor);
$button.style.textTransform = `uppercase`;

//20
//Beschrijf wat we hier doen
const $nav = document.querySelector(`.nav-link`);
$nav.classList.add(`active`);

//21
//Wat doen we hier?
//Waarom is de laatste lijn volledig grijs?
const spans = Array.from(document.getElementsByTagName(`span`));
spans.forEach($span => $span.classList.toggle(`fade`, $span.textContent.startsWith(`TB`)));
