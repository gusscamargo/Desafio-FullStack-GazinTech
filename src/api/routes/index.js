const Router = require("restify-router").Router
let route = new Router()

const indexController = require("../controllers/indexController")

route.get("/", indexController.index)

module.exports = route