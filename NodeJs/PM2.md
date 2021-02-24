pm2 usage

npm i -D express compression
pm2 start/restart/stop/delete server.js


pm2 list
pm2 logs --err


// server.js
```
var express = require('express')
var compression = require('compression')
var port = process.env.PORT || 8080//port can be changed 
var app = express()
// gzip
app.use(compression())
app.use(express.static('./dist')) // or ./build 
module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
```

