const controller = new Object()

const Desenvolvedor = require("../models/desenvolvedor")
const Nivel = require("../models/nivel")

controller.getAll = async (req, res, next) => {
    

    try{

        const data = await Desenvolvedor.findAll({
            include: [
                Nivel
            ]
        })


        res.send(200, {
            message: "success",
            data: data
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
    const {id} = req.params

    try{
        const data = await Desenvolvedor.findByPk(id, {
            include: [
                Nivel
            ]
        })

        res.send(200, {
            message: "success",
            data: data
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
        const resultado = await Desenvolvedor.create(data)

        res.send(201, {
            message: "ok",
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
    try{
        res.send(200, {
            message: "ok"
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
    try{
        res.send(204, {
            message: "ok"
        })        
    }catch(err){
        res.send(400, {
            message: "error",
            error: err
        })
    }   

    return next()
}

module.exports = controller