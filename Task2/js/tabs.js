'use strict';

const asTabs = (node) => {
    const tabs = node.querySelectorAll('div');
    for (let tab of tabs) {
        console.log(tab);
        const button = document.createElement('button');
        button.innerHTML = tab.dataset.tabname;
        tab.prepend(button);
    }
};

asTabs(document.querySelector('tab-panel'));