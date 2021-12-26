const controller = new Object()

const Desenvolvedor = require("../models/desenvolvedor")
const Nivel = require("../models/nivel")


// Retona todos os desenvovedores e os niveis deles
controller.getAll = async (req, res, next) => {    

    try{

        const data = await Desenvolvedor.findAll({
            include: [
                Nivel
            ]
        })


        res.send(200, data) 
               
    }catch(err){
        res.send(400, {
            message: err.name
        })
    }   

    return next()
}

// Retona um desenvovedor especificado e o nivei dele
controller.getOne = async (req, res, next) => {
    const {id} = req.params

    try{
        const data = await Desenvolvedor.findByPk(id, {
            include: [
                Nivel
            ]
        })

        res.send(200, data)       
    }catch(err){
        res.send(400, {
            message: err.name
        })
    }   

    return next()
}


// Adiciona um desenvolvedor
controller.add = async (req, res, next) => {
    const data = await req.body

    try{
        const resultado = await Desenvolvedor.create(data)

        res.send(201, resultado)        
    }catch(err){
        res.send(400, {
            message: err.name
        })
    }   

    return next()
}

// Edita um desenvolvedor
controller.edit = async (req, res, next) => {
    const data = await req.body

    try{
        let desenvolvedor = await Desenvolvedor.findByPk(data.id)
        desenvolvedor = await desenvolvedor.update(data)

        res.send(200, desenvolvedor)       
    }catch(err){
        res.send(400, {
            message: err.name
        })
    }   

    return next()
}

// Deleta um desenvolvedor
controller.delete = async (req, res, next) => {
    const {id} = await req.body

    try{
        const desenvolvedor = await Desenvolvedor.findByPk(id)
        if(desenvolvedor) await desenvolvedor.destroy()
        
        res.send(204)       
    }catch(err){
        res.send(400, {
            message: err.name
        })
    }   

    return next()
}

module.exports = controller