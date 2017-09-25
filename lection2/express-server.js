/* Server with Express  */

const express = require(`express`);

const app = express();

const port = 3000;

app.get(`/`, (request, response) => {
    console.log(`Hello from Express!`);

    response.end(`Main page from Express`);
});

app.listen(port, (err) => {
    if (err) {
            console.log(`something bad happened`, err);
        }

    console.log(`Server is listening on prot ${port}`);
});