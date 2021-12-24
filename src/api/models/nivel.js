const {Model, DataTypes} = require("sequelize")
const sequelize = require("../config/connectionBD")

class Nivel extends Model{}

Nivel.init(
{
    nivel: DataTypes.TEXT
}, {
        modelName: "Nivel",
        tableName: "nivel",
        sequelize: sequelize,
        timestamps: false
    }
)

module.exports = Nivel