const log = console.log
const ip = require('ip')
const os = require('os')
const path = require('path')
const config = require('./config')
const youziku = require('youziku')
const express = require('express')
const router = express.Router()
const client = new youziku.youzikuClient(config.ApiKey)
const app = express()

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")
app.use('/resources', express.static('./resources'))
app.use('/dist', express.static('./'))

app.get('/', function (req, res) {
  res.render('doutula')
})

const server = app.listen(8002, () => {
  var host = ip.address()
  var port = server.address().port
  log('http://%s:%s', host, port)
})
