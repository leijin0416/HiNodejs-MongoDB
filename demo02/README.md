## node 部分

| 文件夹 | 描述 |
| ------ | ------ |
| app.js | 是整个应用的启动入口，会引入server.js。`node app` === `node start` |
| server.js | 是系统服务配置和创建的地方 |
| conf.js | 存放着系统的配置信息`（配置 mongoDB 数据库的参数）` |
| mongodb.js | 与 MongoDB 相关的内容，会引入 conf.js |
| daos | 该文件夹是封装了所有对数据库的操作（api设计等），对应 models |
| models | 该文件夹是数据库集合设计，存放着mongoose的模型类如User |
| routes | 该文件夹是`应用路由控制跳转(Router)和请求分发处理的模块`，根据对象信息进行模块化 |
| public | 该文件夹是一些静态元素 |
| logs | 该文件夹是存放了系统日志 |
| package.json | 定义了系统需要的其他的第三方模块，如express，ejs等 |

后台的各个模块中其实有一个基于express和ejs的MVC模式，对应的三个模块为：models(M)-views(V)-routes(C)

[1、布局文档](https://github.com/bitwater/HelloNodejsMedical/blob/master/server.js)

[2、mongodb-zip下载](http://dl.mongodb.org/dl/win32/x86_64)

### 1、新建node文件夹

初始化项目

```js
npm init  // 会生成package.json文件
```

### 2、安装express框架，安装相关依赖

```js
npm install express -S 
npm install mongodb -S 
npm install mongoose -S 
```

### 3、创建app.js，全局的入口文件

无数据库写法：

```js
var express = require('express');//引入express模块
var app = express();

//定义方法
app.get('/',function(req,res){
    res.send('HellowWorld')
});
//响应接口
app.get('/list/product',function(req,res){
//数据
    let result={
        err:0,
        msg:'ok',
        data:{
            "name":"huawei",
            "price":"1999",
            "title":"huawei huawei huawei",
            "id":"1"
        }
    }
    res.send(result)
})
//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000,function(){
    console.log('runing 3000...');
})
```
### 4、node app 运行

---

db.collection() is not a function？

解决方法：将mongodb版本更新为^2.2.33，即运行npm install mongodb@^2.2.33 即可

[1、八步开发后端接口(全)](https://blog.csdn.net/qq_36996271/article/details/85124358)

[2、mongodb-增删改查](https://blog.csdn.net/Xue_zenghui/article/details/99721631)

