const Router = require("restify-router").Router
let router = new Router()

const desenvolvedorController = require("../controllers/desenvolvedorController")

router.get("/", desenvolvedorController.getAll)

router.get("/:id", desenvolvedorController.getOne)

router.post("/add", desenvolvedorController.add)

router.put("/edit", desenvolvedorController.edit)

router.del("/delete", desenvolvedorController.delete)

module.exports = router