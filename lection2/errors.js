const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
    throw new Error(`oops`);
});

app.use((err, req, res, next) => {
    console.log(err);

    res.status(500).send(`Somethind broke!`);
});

app.listen(3000);