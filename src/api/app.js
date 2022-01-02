const restify = require('restify')
const corsMiddleware = require('restify-cors-middleware2')
require('dotenv').config()

// Middleware
const crossOrigin = require("./middleware/crossOrigin")
const cors = corsMiddleware({
  allowHeaders: ['*'],
  exposeHeaders: ['*'],
  allowCredentialsAllOrigins: true
})

const server = restify.createServer({
  name: ' desafio-gazin-tech',
  version: '1.0.0'
});

// Porta servidor
const port = process.env.PORT_API || 3000

// Plugins
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({ mapParams: true }));
server.pre(cors.preflight)
server.use(cors.actual)
server.use(crossOrigin)

// Routes
const nivelRoute = require("./routes/nivel")
const desenvolvedorRouter = require("./routes/desenvolvedor")

nivelRoute.applyRoutes(server, "/nivel")
desenvolvedorRouter.applyRoutes(server, "/desenvolvedor")


server.listen(port, () => {
  console.log("SERVER ON");
});