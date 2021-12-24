const {Model, DataTypes} = require("sequelize")
const sequelize = require("../config/connectionBD")

class Nivel extends Model{}

Nivel.init(
{
    nivel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    }
}, {
        modelName: "Nivel",
        tableName: "nivel",
        sequelize: sequelize,
        timestamps: false
    }
)

module.exports = Nivel