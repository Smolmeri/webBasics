'use strict';

const divArr = [];

document.addEventListener('mousemove', event => {
    const div = document.createElement('div');
    div.classList.add('dot');
    div.style.top = event.pageY + 'px';
    div.style.left = event.pageX + 'px';
    document.querySelector('body').appendChild(div);
    divArr.push(div);
    if (divArr.length > 12) {
        divArr.shift();
        document.querySelector('body').removeChild(divArr[0]);
    };
});



console.log(divArr);