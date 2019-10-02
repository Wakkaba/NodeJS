const fs = require ('fs');
// Також на компі мають знаходитьсь фотки. 
//ФОто потрібно скопіювати в папку з профіайлом студента стрімами.

function fotki(photoShot1, photoOut2){
    fs.createReadStream(photoOut2).pipe(fs.createWriteStream(photoShot1));
    console.log('Smile');

}

module.exports = fotki;