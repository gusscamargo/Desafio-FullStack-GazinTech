const restify = require('restify');

const server = restify.createServer({
  name: ' desafio-gazin-tech',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Routes
const indexRoute = require("./routes/index")
indexRoute.applyRoutes(server)


server.listen(3000, () => {
  console.log("SERVER ON");
});