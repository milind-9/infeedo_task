/* eslint-disable n/handle-callback-err */
const dotenv = require('dotenv')
dotenv.config()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres', 'postgres', '1112', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
})
module.exports = sequelize
