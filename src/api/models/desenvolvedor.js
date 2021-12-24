const {Model, DataTypes} = require("sequelize")
const sequelize = require("../config/connectionBD")
const Nivel = require("./nivel")

class Desenvolvedor extends Model{}

Desenvolvedor.init(
{
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    sexo: {
        type: DataTypes.CHAR,
        allowNull: true
    },
    datanascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
            isDate: true
        }
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
            isNumeric: true,
            isInt: true
        }
    },
    hobby: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
        modelName: "Desenvolvedor",
        tableName: "desenvolvedor",
        sequelize: sequelize,
        timestamps: false
    }
)

Desenvolvedor.belongsTo(Nivel, { foreignKey: "nivel_id" })

module.exports = Desenvolvedor