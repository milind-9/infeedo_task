const express = require('express')
const cors = require('cors')
const db = require('./db_connection')
const app = express()
const cookieParser = require('cookie-parser')
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
  extended: true
}))

db.sync({
  force: true
})
  .then(() => {
    console.log('database connection successfull')
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message)
  })

  require('./routes/task_routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
module.exports = app;