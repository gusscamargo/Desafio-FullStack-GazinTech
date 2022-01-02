const sequelize = require("sequelize")

const Nivel = require("../models/nivel")
const Desenvolvedor = require("../models/desenvolvedor")

controller = new Object()

// Retorna todos os niveis
controller.getAll = async (req, res, next) => {
    try{

        // Procura todos os niveis e adiciona quantos devs estão relacionados
        const niveis = await Nivel.findAll({
            attributes: {
                include: [
                    [
                        sequelize.literal(
                            "(SELECT COUNT(*) FROM `desenvolvedor` WHERE `desenvolvedor`.`nivel_id` = `Nivel`.`id`)"
                        ),
                        "numeroDevs"
                    ]
                ]
            }
        })

        res.send(200, niveis)
    }catch(err){
        res.send(400, {
            message: err.name
        })
    }

    return next()
}


// Retorna um nivel especificado
controller.getOne = async (req, res, next) => {
    const {id} = await req.params
    try{
        const nivel = await Nivel.findByPk(id, {
            attributes: {
                include: [
                    [
                        sequelize.literal(
                            "(SELECT COUNT(*) FROM `desenvolvedor` WHERE `desenvolvedor`.`nivel_id` = `Nivel`.`id`)"
                        ),
                        "numeroDevs"
                    ]
                ]
            }
        })
        
        res.send(200, nivel === null ? [] : nivel)
    }catch(err){
        res.send(400, {
            message: err.name
        })
    }

    return next()
}

// Adiciona um nivel
controller.add = async (req, res, next) => {
    const data = await req.body

    try{
        const resultado = await Nivel.create(data)

        res.send(201, resultado) 

    }catch(err){
        res.send(400, {
            message: err.name
        })
    }

     return next() 
}

// Edita um nivel
controller.edit = async (req, res, next) => {
    const data = await req.body

    try{
        let nivel = await Nivel.findByPk(data.id)
        nivel = await nivel.update(data)

        res.send(200, nivel) 

    }catch(err){
        res.send(400, {
            message: err.name
        })
    }
    return next()
}


// Excluiu um nivel mas não sem antes verificar se não há qualquer desenvolvedor relacionado a ele
controller.delete = async (req, res, next) => {
    const {id} = await req.body
    
    try{
        const {count} = await Desenvolvedor.findAndCountAll({
            where: {
                nivel_id: id
            }
        })

        if(count > 0){
            res.send(501, {
                message: "One or more developers associates"
            }) 
        }

        // Evitar tentar excluir niveis que não existem
        const nivel = await Nivel.findByPk(id)
        if(nivel) await nivel.destroy()
        
        res.send(204) 

    }catch(err){
        res.send(400, {
            message: err.name
        })
    }
    return next()
}

module.exports = controller