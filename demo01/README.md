## node 部分

[mongodb-zip下载](http://dl.mongodb.org/dl/win32/x86_64)

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

