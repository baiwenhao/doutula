const log = console.log
const ip = require('ip')
const os = require('os')
const path = require('path')
const config = require('./config')
const youziku = require('youziku')
const express = require('express')
const router = express.Router()
const client = new youziku.youzikuClient(config.ApiKey)
const resolve = (dir) => path.join(__dirname, '..', dir)
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use('/static', express.static(resolve('doutula/static')))

app.get('/build', function (req, res) {
  const query = res.query
  const cdata = { Datas: [] }
  const params = {
    AccessKey: query.key,
    Content: query.main,
    Url: query.url
  }
  cdata.Datas.push(params)
  client.createBatchWoffWebFontAsync(cdata, function (e) {
    if (e.Code === 200) {
      const url = `http://cdn.webfont.youziku.com/webfonts/custompath/${config.UserKey}/${params.Url}.bmp`
      res.json(url)
    } else {
      res.json(e)
    }
  })
})

app.get('/*', function (req, res) {
  res.render('font')
})

const server = app.listen(8001, () => {
  var host = ip.address()
  var port = server.address().port
  log('http://%s:%s', host, port)
})
