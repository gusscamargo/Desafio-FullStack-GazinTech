const restify = require('restify');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', (req, res, next) => {
  res.send({
    "teste": "oi2"
  });
  return next();
});

server.listen(3000, () => {
  console.log("SERVER ON");
});