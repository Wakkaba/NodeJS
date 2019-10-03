const fs = require('fs');

const {StudMake} = require('./wow');

const {fotki} = require('./pht')

// Зробити функцію, яка буде робити профайли стуентів по групах.
// Створити папка jscx-1800 та jscx-2000
fs.mkdir(`./jscx-1800`, err => {
    console.log('OK')
});

fs.mkdir(`jscx-2000`, err => {
console.log('OK')
});

// В конжній папці має бути ще одна пака з імям студента а-ля Viktor Okten. 
//В той файл потрібно записати інфу про студента. ЙОго данні. Довільні. 
StudMake('jscx-1800', 'Arthur', 'Age: 22');

StudMake('jscx-2000', 'Andy', 'Age: 42');

// Також на компі мають знаходитьсь фотки. 
//ФОто потрібно скопіювати в папку з профіайлом студента стрімами.
fotki('./jscx-1800/Arthur/photo.jpg', '../node/jscx-1800/Arthur/meme.png');