const express = require(`express`);
const app = express();

app.use((req, res, next) => {
    console.log(req.headers);

    next();
});

app.use((req, res, next) => {
    req.chance = Math.random();

    next();
});

app.get(`/`, (req, res) => {
    res.json({
        chance: req.chance
    });
});

app.listen(3000);