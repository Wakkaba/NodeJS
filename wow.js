const fs = require('fs');
// Створити папка jscx-1800 та jscx-2000
// Зробити функцію, яка буде робити профайли стуентів по групах.
exports.StudMake = function (group, name, age){
fs.mkdir(`./${group}/${name}`, (err) => {
    if (!err){
        console.log('new student arrived')
    }
})
fs.writeFile(`./${group}/${name}/info.txt`, age, (err) => {
    if (err) throw err;
    console.log('Info created!');
  });
}