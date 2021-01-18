var express = require('express')
var path = require('path')
var history = require('connect-history-api-fallback')
var serveStatic = require('serve-static')


var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(history({
    verbose: true
}))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)