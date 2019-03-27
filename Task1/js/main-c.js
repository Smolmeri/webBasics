'use strict';
// Put code of task C here
const main = document.querySelector('main');

const img = document.createElement('img');
img.src = "http://placekitten.com/320/160";
img.alt = 'title';

const caption = document.createElement('figcaption');
caption.innerHTML = 'Caption';

const figure = document.createElement('figure');
figure.appendChild(img);
figure.appendChild(caption);

const otsikko = document.createElement('h2');
otsikko.innerHTML = ('Article Header 2');

const header = document.createElement('header');
header.appendChild(otsikko);

const kappale = document.createElement('p');
kappale.innerHTML = ('Lorem Ipsun Dipsum nipsun litsun bitsum');

const artikkeli = document.createElement('article');
artikkeli.appendChild(otsikko);
artikkeli.appendChild(figure);
artikkeli.appendChild(kappale);

main.appendChild(artikkeli);