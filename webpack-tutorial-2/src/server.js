const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.get('/hello-world', function (req, res) {
  const pathtoHtmlFile = path.resolve(__dirname, '../dist/hello-world.html')
  const contentFromHtmlFile = fs.readFileSync(pathtoHtmlFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

app.get('/kiwi', function (req, res) {
  const pathtoHtmlFile = path.resolve(__dirname, '../dist/kiwi.html')
  const contentFromHtmlFile = fs.readFileSync(pathtoHtmlFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

app.listen(3000, function () {
  console.log("server is running on port no 3000");
})