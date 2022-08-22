const fs = require('fs');

// reading files
// fs.readFile('./blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line of code');

// writing files
fs.writeFile('./blog1.txt', "Hello World", () => {
    console.log('file was written.')
});


// directories


// deleting files