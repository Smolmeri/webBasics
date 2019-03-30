'use strict';

const increaseFontSize = () => {
    let id = document.getElementById('balloon');
    let style = window.getComputedStyle(id, null).getPropertyValue('font-size');
    let currentSize = parseInt(style);
    currentSize++;
    id.style.fontSize = (currentSize) + 'px';
    if (currentSize > 150) {
        id.innerHTML = ' 💥 '
    };
    if (currentSize > 151) {
        removeEventListener('keydown', increaseFontSize(), decreaseFontSize());
    }
};

const decreaseFontSize = () => {
    let id = document.getElementById('balloon');
    let style = window.getComputedStyle(id, null).getPropertyValue('font-size');
    let currentSize = parseInt(style);
    currentSize--;
    id.style.fontSize = (currentSize) + 'px';
};

document.addEventListener('keydown', event => {
    if (event.key == 'ArrowUp') {
        increaseFontSize();
    };
});

document.addEventListener('keydown', event => {
    if (event.key == 'ArrowDown') {
        decreaseFontSize();
    };
});