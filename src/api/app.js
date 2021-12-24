const restify = require('restify')
require('dotenv').config()

const server = restify.createServer({
  name: ' desafio-gazin-tech',
  version: '1.0.0'
});

// Porta servidor
const port = 3000

// Plugins
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({ mapParams: true }));

// Routes
const nivelRoute = require("./routes/nivel")
nivelRoute.applyRoutes(server, "/nivel")


server.listen(port, () => {
  console.log("SERVER ON");
});