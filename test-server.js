const express = require('express'),
      app     = express(),
      port    = 3000,
      fs      = require('fs');

app.get('/', (req, res)=>{
    res.sendFile('./index.html', {root:'./'})
})
app.get('/about', (req, res)=> {
    res.sendFile('./about.html', {root: './'})
})
app.use(express.static('./'))
app.listen(port, function() {
    console.log('Server listening on port', port);
})