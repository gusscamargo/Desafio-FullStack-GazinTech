const Router = require("restify-router").Router
let router = new Router()

const nivelController = require("../controllers/nivelController")

router.get("/", nivelController.get)

router.get("/:id", nivelController.getOne)

router.post("/add", nivelController.add)

router.put("/edit", nivelController.edit)

router.del("/delete", nivelController.delete)


module.exports = router