const express = require('express')
const connectToMongo = require('./db')
const app = express()
const port = 4000

connectToMongo();

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log(`Port listen on http://localhost:${port}`)
})
