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
server.use(restify.plugins.bodyParser());

// Routes
const indexRoute = require("./routes/index")
indexRoute.applyRoutes(server)


server.listen(port, () => {
  console.log("SERVER ON");
});