/*
 * Licensed under the LICENSE.
 * Copyright 2017, Sony Mobile Communications Inc.
 */

const links = document.querySelectorAll('link[rel="import"]');

// Import and add each page to the DOM
Array.prototype.forEach.call(links, function (link) {
    let template = link.import.querySelector('.task-template');
    let clone = document.importNode(template.content, true);
    document.querySelector('.tab-content').appendChild(clone);
});