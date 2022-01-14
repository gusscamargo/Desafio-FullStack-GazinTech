const corsMiddleware = require('restify-cors-middleware2')

const cors = corsMiddleware({
  allowHeaders: ['*'],
  exposeHeaders: ['*'],
  allowCredentialsAllOrigins: true
})

module.exports = cors