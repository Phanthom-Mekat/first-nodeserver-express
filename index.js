const express = require('express')
const app = express()
const port =5000;

app.get('/',(req,res)=>{
    res.send('hello first express')
})

app.get('/about',(req,res)=>{
    res.send('more data coming soon')
})

app.listen(port,()=>{
    console.log(`Hello running port,${port} `)
})