const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, content) => {
    if (err) {
        return console.log(err);
    }

    console.log(content);
});

console.log('After content');