const corsMiddleware = require('restify-cors-middleware2')

const cors = corsMiddleware({
  allowHeaders: ['*'],
  exposeHeaders: ['*'],
  allowCredentialsAllOrigins: true,
  // origins: [
  //   "http://127.0.0.1:3000/",
  //   "http://localhost:3000/",
  //   "http://127.0.0.1:4000/",
  //   "http://localhost:4000/",
  //   "http://127.0.0.1/",
  //   "http://localhost/"
  // ]
})

module.exports = cors