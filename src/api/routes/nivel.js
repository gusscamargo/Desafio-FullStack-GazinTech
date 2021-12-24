const Router = require("restify-router").Router
let router = new Router()

router.get("/", (req, res, next) => {
    res.send(200, {
        message: "tudo ok"
    })
    return next()
})

router.post("/add", (req, res, next) => {
    res.send(201, {
        message: "tudo ok"
    })
    return next()
})

router.put("/edit", (req, res, next) => {
    res.send(200, {
        message: "tudo ok"
    })
    return next()
})

router.del("/delete", (req, res, next) => {
    res.send(204, {
        message: "tudo ok"
    })
    return next()
})


module.exports = router