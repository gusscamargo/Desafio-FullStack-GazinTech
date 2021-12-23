const Router = require("restify-router").Router
let router = new Router()

const indexController = require("../controllers/indexController")

router.get("/", indexController.index)

module.exports = router