const Router = require("restify-router").Router
let router = new Router()

const desenvolvedorController = require("../controllers/desenvolvedorController")

router.get("/", (req, res, next) => {
    res.send(200, {
        message: "Oi"
    })

    return next()
})

module.exports = router