const fs = require('fs');

let content;

try {
    content = fs.readFileSync('file.txt', 'utf-8');
} catch (ex) {
    console.log(ex);
}

console.log('Before content');

console.log(content);