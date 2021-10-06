const express = require('express')
const cors = require('cors');

const app = express()
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
  app.use(cors());
  next();
})

app.use('/', require('./router/CompanyRouter'))

app.listen(3333,console.log("Server ON!"))