/* Server with http */

const http = require(`http`);
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);

    response.end(`Hello Node.jus Server!`);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.log(`something bad happened`, err);
    }

    console.log(`Server is listening on prot ${port}`);
});