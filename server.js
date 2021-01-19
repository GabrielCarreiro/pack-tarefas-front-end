var express = require('express')
var history = require('connect-history-api-fallback')
var serveStatic = require('serve-static')
var path = require('path')

app = express()
app.use(history());    
app.use(serveStatic(path.join(__dirname, '/dist')))
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port) 