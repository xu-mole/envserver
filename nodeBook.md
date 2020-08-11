## node 02

### 通过express 框架 书写api

#### 什么是api
  ajax 2007-2008年诞生
  前端后端分离   前端通过ajax 请求数据
  $.get('http://wwww.baidu.com/user/login?us=123&ps=456',()=>{

  })
  http://wwww.baidu.com/user/login?us=123&ps=456   api接口

  通过api 接口实现数据的请求

  前端：1.写界面  2.请求数据  3.数据处理
  后端：写api接口

  登录接口逻辑分析
  1.接受用户传递数据
  2.处理数据
  3.返回数据

  ### express 基本使用

  1.安装express

  ```
  npm install express --save
  ```
  模块的引用（第三方模块）从当前目录的node_modulles以此向上寻找

  ### 服务器相关

    服务器：1. 服务器就是一台电脑 
           2.服务器软件（apach、tomcat、IIS、ngnix、node）
           3.服务器ip  和端口号（每一个软件会占用一个端口号）
    局域网/外网：服务器通过网线（无线）连接 每一台电脑都有一个ip
    ip:确定服务器主机的位置
    port：确定服务器里某一个程序
    
  ### API接口的构成要素
      ip 地址
      port 端口号
      pathname 路径
      method：get/post
      接受用户传递数据
      + 接收数据
        - get req.query
        - post req.body 需要body-parser 插件进行解析
          + 注意数据格式 json  x-www-urencode  formdata

  ### postman 接口测试
  ### 中间件的使用 一定要注意next
  ### 路由
      user/add  user/del
  ### 静态资源目录 static
      指定一个目录  目录可以被访问  apache (www)


  ### 非关系数据库（文档） mongodb
    1.下载 百度地址
    2.安装
      + 最后一个对号不选
      + 缺少数据库文件 c/data/db
      + 不是内部命令  需要设置环境变量  mongod 的bin  目录路径
  #### 指令
    mongodb  数据库名
    mongod   命令行启动数据库命令
    mongo    命令行操作数据库
    mongoose node操作数据库的插件