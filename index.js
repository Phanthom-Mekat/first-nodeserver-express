const express = require('express')
const phones = require('./phones.json');
const app = express()
const port =5000;

app.get('/',(req,res)=>{
    res.send('hello first express')
})

app.get('/phones',(req,res)=>{
    res.send(phones)
})
app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    console.log('I need data for id',id)
    const phone = phones.find(phone=>phone.id===id)|| {};
    res.send(phone)
})

app.get('/about',(req,res)=>{
    res.send('more data coming soon')
})

app.listen(port,()=>{
    console.log(`Hello running port,${port} `)
})

