const controller = new Object();

controller.index = (req, res, next) => {
    res.send({
        message: "Oi Gustavo"
    })

    return next()
} 

module.exports = controller