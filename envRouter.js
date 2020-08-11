const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
//解析表单数据
router.use(bodyParser.urlencoded({extended:false}))
//解析JSON数据
router.use(bodyParser.json())

//中间件-拦截器
// router.use('/env/*',(req,res,next)=>{
//     let {token} = req.query
//     if(token){
//         next()
//     }else{
//         res.send({err:0,msg:'缺少token!'})
//     }  
// })

//登录接口
router.get('/login',(req,res)=>{
    // console.log(req.query)

    let {us,ps} = req.query
    
    if(us == 'admin'&& ps =='123456'){
        res.send({us,ps,msg:'登陆成功'})
    }else{
        res.send({err:-1,msg:'登陆失败'})
    }    
    
})

//注册接口
router.post('/reg',(req,res)=>{
    // console.log(req.body)
    res.send({err:0,msg:'注册成功'})
})

//导出路由模块
module.exports = router