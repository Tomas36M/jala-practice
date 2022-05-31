const config = require('../db')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: config.PORT,
    dialect: config.DIALECT,
    logging: false
})

module.exports = sequelize;