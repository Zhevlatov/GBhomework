'use strict'
let text = document.querySelector('.original').textContent;

let filtered1 = document.querySelector('.filtered1');
let filtered2 = document.querySelector('.filtered2');

let f1Btn = document.querySelector('.filter1-btn');
let f2Btn = document.querySelector('.filter2-btn');

const rule1 = /\'/g;
const rule2 = /\B\'/g;

let f1 = text.replace(rule1, '"');
let f2 = text.replace(rule2, '"');

f1Btn.addEventListener('click', function (event) {
    filtered1.insertAdjacentHTML('beforeend', `${f1}`);
});
f2Btn.addEventListener('click', function (event) {
    filtered2.insertAdjacentHTML('beforeend', `${f2}`);
});