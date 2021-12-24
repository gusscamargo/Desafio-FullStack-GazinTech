controller = new Object()

controller.get = async (req, res, next) => {
    res.send(200, {
        message: "tudo ok"
    })
    return next()
}

controller.add = async (req, res, next) => {
    res.send(201, {
        message: "tudo ok"
    })
    return next()
}

controller.edit = async (req, res, next) => {
    res.send(200, {
        message: "tudo ok"
    })
    return next()
}

controller.delete = async (req, res, next) => {
    res.send(204, {
        message: "tudo ok"
    })
    return next()
}

module.exports = controller