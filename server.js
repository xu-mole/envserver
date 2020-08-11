const express = require('express')
const path = require('path')
const app = express()

// app.use(express.static(path.join(__dirname,'./public')))
app.use('/env',express.static(path.join(__dirname,'./public')))

app.get('/',(req,res)=>{
    res.send('欢迎使用express')
})

let envRouter = require('./envRouter')
app.use('/env',envRouter)

//监听3000端口，开启服务器
app.listen(3000,()=>{
    console.log('server start')
})