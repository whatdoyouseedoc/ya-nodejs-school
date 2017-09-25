const fs = require('fs');

function stats(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        });
    });
}

Promise.all([
    stats('file.txt'),
    stats('file1.txt'),
    stats('file2.txt'),
    stats('file3.txt')
])
.then((data) => console.log(data))
.catch((err) => console.log(err));