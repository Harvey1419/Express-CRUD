const express = require("express");
const app = express();
var morgan = require('morgan')
const port = 3000;
app.use(morgan('short'))

const hello = `<h1>Parcial Redes</h1>`

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
 
app.use(express.json());

app.get('/', (req,res) => {
  res.send(hello)
})
 
app.use('/api', require('./api.js'))