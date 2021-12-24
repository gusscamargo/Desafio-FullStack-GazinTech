const Nivel = require("./nivel")
const Desenvolvedor = require("./desenvolvedor")

async function usuarios () { 
    const users = await Nivel.findAll()

    return users
}

async function teste() {
    const users = await usuarios()
    // console.log(users[0].dataValues)
    users.forEach( nivel => {
        console.log(nivel.dataValues)
    })
}

async function inserirNivel() {
    const nivel = await Nivel.create({
        nivel: "Pleno"
    })

    return nivel.dataValues.id
 }

async function inserirDev(nivelId) { 
    const dev = await Desenvolvedor.create({
        nivel_id: nivelId,
        nome: "Gustavo Michels de Camargo",
        sexo: "M",
        datanascimento: "1980-06-17",
        idade: 23       
    })

    return dev
}

async function excecutar() {
    const nivelId = await inserirNivel()
    const dev = await inserirDev(nivelId)

    console.log(dev)
}


async function searchDev() {
    const devs = await Desenvolvedor.findAll()

    console.log(devs)
}

searchDev()