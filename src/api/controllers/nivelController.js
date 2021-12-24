const Nivel = require("../models/nivel")
const Desenvolvedor = require("../models/desenvolvedor")

controller = new Object()

controller.get = async (req, res, next) => {
    try{
        const niveis = await Nivel.findAll()

        res.send(200, {
            message: "success",
            data: niveis
        })
    }catch(err){
        res.send(400, {
            message: "error",
            error: err
        })
    }

    return next()
}

controller.getOne = async (req, res, next) => {
    const id = await req.params.id
    try{
        const nivel = await Nivel.findByPk(id)
        
        res.send(200, {
            message: "success",
            data: nivel
        })
    }catch(err){
        res.send(400, {
            message: "error",
            error: err
        })
    }

    return next()
}

controller.add = async (req, res, next) => {
    const data = await req.body

    try{
        const resultado = await Nivel.create(data)

        res.send(201, {
            message: "success", 
            data: resultado
        }) 

    }catch(err){
        res.send(400, {
            message: "error",
            error: err
        })
    }

     return next() 
}

controller.edit = async (req, res, next) => {
    const data = await req.body

    try{
        let nivel = await Nivel.findByPk(data.id)
        nivel = await nivel.update(data)

        res.send(200, {
            message: "success",
            data: nivel
        }) 

    }catch(err){
        res.send(400, {
            message: "error",
            error: err
        })
    }
    return next()
}

controller.delete = async (req, res, next) => {
    const id = await req.body.id

    try{
        const {count} = await Desenvolvedor.findAndCountAll({
            where: {
                nivel_id: id
            }
        })

        if(count > 0){
            res.send(501, {
                message: "error",
                error: "One or more developers associates"
            }) 
        }

        // Evitar tentar excluir niveis que não existem
        const nivel = await Nivel.findByPk(id)
        if(nivel) await nivel.destroy()
        
        res.send(204) 

    }catch(err){
        res.send(400, {
            message: "error",
            error: err
        })
    }
    return next()
}

module.exports = controller